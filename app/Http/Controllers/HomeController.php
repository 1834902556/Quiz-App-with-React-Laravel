<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        return Inertia::render('MyComponents/Home');
    }
    public function addInfo(){
        return Inertia::render('MyComponents/AddInfo');
    }
    public function manageInfo(){
        return Inertia::render('MyComponents/Manage');
    }
}
