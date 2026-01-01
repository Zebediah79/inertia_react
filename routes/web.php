<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     sleep(2);
//     return Inertia::render('Home', ['name' => 'Zeb']);
// });

// Route::get('/about', function(){
//     return Inertia::render('About/About');
// });

Route::get('/', [PostController::class, 'index']);

Route::resource('posts', PostController::class)->except('index');
