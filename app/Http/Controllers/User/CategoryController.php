<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(){
        $categories = Category::get();
        return response()->json([
            'success' => 'success',
            'categories' => $categories
        ]);
    }

    public function getSubjects($id){
        $category = Category::where('id',$id)->with('subjects')->first();
        return response()->json([
            'success' => 'success',
            'category' => $category
        ]);
    }
}
