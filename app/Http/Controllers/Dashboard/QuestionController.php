<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Answer;
use App\Models\Question;
use App\Models\QuestionLevel;
use App\Models\QuestionType;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class QuestionController extends Controller
{
    public function store(Request $request){
        $base64_image = $request->image;
        $image_name = null;
        if (preg_match('/^data:image\/(\w+);base64,/', $base64_image)) {
            $data = substr($base64_image, strpos($base64_image, ',') + 1);
            $data = base64_decode($data);
            $extension = explode('/', mime_content_type($request->image))[1];
            $image_name = time().'_'.'test.'.$extension;
            Storage::disk('public')->put("tests/images/".$image_name, $data);
        }
        $question = Question::create([
            'subject_id' => '1',
            'level_id' => $request->level,
            'type_id' => $request->type,
            'image' => $image_name,
            'title' => $request->question,
            'rate' => $request->rate
        ]);
        $this->saveAnswers($request,$question->id);
        return response()->json([
            'success' => 'success',
            'data' => $request->all()
        ]);
    }
    public function saveAnswers(Request $request,$question_id){
        switch ($request->type){
            case 1:
                foreach ($request->answers as $answer){
                    Answer::create([
                        'question_id' => $question_id,
                        'right' => array_key_exists('right',$answer) && $answer['right'],
                        'title'=> $answer['text']
                    ]);
                }
                break;
            case 2:
                foreach ($request->answers['right'] as $answer){
                    Answer::create([
                        'question_id' => $question_id,
                        'title'=> $answer['text']
                    ]);
                }
                foreach ($request->answers['wrong'] as $answer){
                    Answer::create([
                        'question_id' => $question_id,
                        'right' => false,
                        'title'=> $answer['text']
                    ]);
                }
                break;
            case 3:
                $order = 1;
                foreach ($request->answers as $answer){
                    Answer::create([
                        'question_id' => $question_id,
                        'order' => $order++,
                        'title'=> $answer['text']
                    ]);
                }
                break;

        }
    }

    public function index(){
        $questions = Question::with('level','type')->get();
        return response()->json([
            'success' => 'success',
            'questions' => $questions
        ]);
    }

    public function configData(){
        $question_types = QuestionType::all();
        $question_levels = QuestionLevel::all();
        return response()->json([
            'success' => 'success',
            'question_types' => $question_types,
            'question_levels' => $question_levels
        ]);
    }
}
