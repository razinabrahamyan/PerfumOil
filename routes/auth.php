<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;
Route::prefix('axios')->group(function (){
    Route::post('/login', [LoginController::class, 'login'])
        ->middleware('api');
    Route::post('/logout', [LoginController::class, 'logout'])
        ->middleware('api');
    Route::any('/verify_token', [LoginController::class, 'verifyToken'])
        ->middleware('jwt.verify');

});

