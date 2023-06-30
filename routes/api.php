<?php

use App\Http\Controllers\Dashboard\QuestionController;
use App\Http\Controllers\User\CategoryController;
use App\Http\Controllers\User\TestController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::prefix('axios')->group(function (){
    Route::middleware('jwt.verify')->group(function (){
        Route::get('/get-questions', [QuestionController::class, 'index']);
        Route::get('/get-question-config', [QuestionController::class, 'configData']);
        Route::post('/store-question', [QuestionController::class, 'store']);
        Route::get('/get-test/{id}', [TestController::class, 'getTest']);
        Route::get('/get-statistics/{id}', [TestController::class, 'getStatistics']);
        Route::post('/save-step', [TestController::class, 'saveStep']);
        Route::post('/generate-test', [TestController::class, 'generateTest']);
        Route::get('/get-categories', [CategoryController::class, 'index']);
        Route::get('/get-subjects/{id}', [CategoryController::class, 'getSubjects']);
    });

});
