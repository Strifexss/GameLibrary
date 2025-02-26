<?php

namespace App\Http\Controllers;

use App\Models\Games;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GamesController extends Controller
{
    protected $model;
    public function __construct()
    {
        $this->model = new Games();
    }

    public function index()
    {
        $games = $this->model::all()->toArray();

        return Inertia::render('Games', [
            'games' => $games
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $this->model->fill($data);
        $this->model->save();

        return redirect()->back();
    }
}
