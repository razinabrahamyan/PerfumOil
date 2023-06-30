<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\History;
use App\Models\Question;
use App\Models\Test;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function test(){
        $answers1 = [
            (object)['id' => 44],
            (object)['id' => 55],
            (object)['id' => 66],
            (object)['id' => 77],
        ];
        $answers2 = [
            (object)['id' => 44],
            (object)['id' => 55],
            (object)['id' => 66],
            (object)['id' => 77],
        ];
        $selected1 = collect($answers1);
        $selected2 = collect($answers2);
        for($i = 0; $i < count($selected1); $i++){
            if($selected1[$i]->id !== $selected2[$i]->id){
                dd(false);
            }
        }
        dd(true);


    }

    public function generateTest(Request $request){
        $test = new Test();
        $test -> user_id = auth()->id();
        $test -> subject_id = $request -> subject_id;


        $questions = Question::where('subject_id',$request -> subject_id)
            ->inRandomOrder()
            ->get();
        $easy_ids = $questions -> where('level_id',1)
            -> take(7)
            -> pluck('id');
        $medium_ids = $questions -> where('level_id',2)
            -> take(7)
            -> pluck('id');
        $hard_ids = $questions -> where('level_id',3)
            -> take(6)
            -> pluck('id');
        $merged_questions = $easy_ids->merge($medium_ids)
            ->merge($hard_ids);
        $test -> questions_count = count($merged_questions);
        $test -> save();

        $test -> questions()
            -> attach($merged_questions->shuffle());
        return response()->json([
            'success' => 'success',
            'test' => $test
        ]);
    }

    public function getTest($id){
        $test = Test::where('id',$id)
            -> with(['questions' => function($question){
                $question->with(['answers' => function($answer){
                    $answer->select('id','title','question_id');
                }]);
            }])
            -> first();
        if($test){
            if($test -> step === 0){
                $test -> step = 1;
                $test -> started_at = now();
                $test -> save();
            }
            return response()->json([
                'success' => 'success',
                'test' => $test
            ]);
        }else{
            return response()->json([
                'success' => 'error',
                'message' => 'test not found'
            ]);
        }

    }
    public function getStatistics($id){
        $test = Test::where('id',$id)
            -> with(['questions' => function($question) use($id){
                $question->with(['history' => function($history) use($id){
                    $history -> orderBy('order')
                        ->where('test_id',$id)
                        ->with('answer');
                }]);
            }])
            -> first();
        if($test && $test->status === 'completed'){
            return response()->json([
                'success' => 'success',
                'test' => $test,
            ]);
        }else{
            return response()->json([
                'success' => 'error',
                'message' => 'Թեսթը գոյություն չունի կամ դեռ չի ավարտվել'
            ]);
        }


    }
    public function saveStep(Request $request){
        $test = Test::where('id',$request->test_id)->first();
        $question = Question::where('id',$request->question_id)
            -> with('answers')
            -> first();
        $equality = false;
        switch ($question->type_id){
            case 1:
                $equality = $this -> checkRightAnswers($question -> answers, $request -> answers);
                $this -> storeAnswersHistory($test -> id,$question -> id, $request -> answers);
                break;
            case 2:
                $equality = $this -> checkRightAnswers($question -> answers, $request -> answers['right'],true);
                $this -> storeAnswersHistory($test -> id,$question -> id, $request -> answers['right'],true);
                $this -> storeAnswersHistory($test -> id,$question -> id, $request -> answers['wrong'],false);
                break;
            case 3:
                $equality = $this -> checkOrderedAnswers($question -> answers, $request -> answers);
                $this -> storeOrderedAnswers($test -> id,$question -> id, $request -> answers);
        }
        $last_update  = strtotime($test->updated_at);
        $now = strtotime(now());
        $time_spent = $now - $last_update;
        if($equality){
            $test->questions() -> updateExistingPivot($question->id, ['status' => 'right', 'spent' => $time_spent]);
            $question->success = $question->success + 1;
            $question->save();
        }else{
            $test->questions() -> updateExistingPivot($question->id, ['status' => 'wrong', 'spent' => $time_spent]);
            $question->fails = $question->fails + 1;
            $question->save();
        }
        if($test->step < $test->questions_count){
            $test->step = $test->step + 1;
        }else{
            $test->ended_at = now();
            $test->status = 'completed';
        }

        $test->save();

        $answers_to_check = collect($request -> answers)
            -> where('right',true)
            -> pluck('id');
        $answers_right = $question -> answers
            -> where('right',true)
            -> pluck('id');

        return response()->json([
            'success' => 'success',
            'data' => $request->all(),
            'test' => $test,
            'equality' => $equality,
            'answers_right' => $answers_right,
            'answers_to_check' => $answers_to_check
        ]);
    }
    public function storeAnswersHistory($test_id,$question_id,$answers,$right = 'not_set'){
        if($right === 'not_set'){
            $this -> storeAnswersThemselves($test_id,$question_id,$answers);
        }else{
            $this -> storeAnswersByGivenValues($test_id,$question_id,$answers,$right);
        }
    }
    public function storeAnswersThemselves($test_id,$question_id,$answers){
        foreach ($answers as $answer){
            History::create([
                'user_id' => auth() -> id(),
                'test_id' => $test_id,
                'question_id' => $question_id,
                'answer_id' => $answer['id'],
                'order' => array_key_exists('order',$answer)? $answer['order']:null,
                'right' => array_key_exists('right',$answer)? $answer['right']:true,
            ]);
        }
    }

    public function storeOrderedAnswers($test_id,$question_id,$answers){
        $order = 1;
        foreach ($answers as $answer){
            History::create([
                'user_id' => auth() -> id(),
                'test_id' => $test_id,
                'question_id' => $question_id,
                'answer_id' => $answer['id'],
                'order' => $order++,
            ]);
        }
    }
    public function storeAnswersByGivenValues($test_id,$question_id,$answers, $right){
        foreach ($answers as $answer){
            History::create([
                'user_id' => auth() -> id(),
                'test_id' => $test_id,
                'question_id' => $question_id,
                'answer_id' => $answer['id'],
                'right' => $right
            ]);
        }
    }


    public function checkRightAnswers($answers1, $answers2,$right_given = false){
        $selected1 = collect($answers1)
            -> where('right',true)
            -> pluck('id');
        $selected2 = collect($answers2);
        if(!$right_given){
            $selected2 = $selected2 -> where('right',true);
        }
        $selected2 = $selected2 -> pluck('id');

        return !count($selected1 -> diff($selected2))
            && !count($selected2 -> diff($selected1));
    }

    public function checkOrderedAnswers($answers1, $answers2){
        $selected1 = collect($answers1);
        $selected2 = collect($answers2);
        for($i = 0; $i < count($selected1); $i++){
            if($selected1[$i]['id'] !== $selected2[$i]['id']){
                return false;
            }
        }
        return true;
    }
}
