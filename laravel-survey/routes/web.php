<?php

use Illuminate\Support\Facades\Route;
// this for the backend routes
Route::get('/', function () {
    return view('welcome');
});
