<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome', ['users' => App\Models\User::all()]);
});
