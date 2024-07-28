<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Support\Str;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();

        return Inertia::render('Posts/All', [
            'date' => $posts[0]->created_at->toDateString(),
            'title' => $posts[0]->title,
            'content' => $posts[0]->content,
            'upvotes' => $posts[0]->upvotes
        ]);

        // return Post::all();
    }}
