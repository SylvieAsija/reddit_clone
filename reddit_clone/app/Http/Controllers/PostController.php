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

        foreach($posts as $post) {
            $date = $post->created_at->toDateString();
            $title = $post->title;
            $content = $post->content;
            $upvotes = $post->upvotes;
        }

        return Inertia::render('Posts/All', [
            // 'date' => $posts[0]->created_at->toDateString(),
            // 'title' => $posts[0]->title,
            // 'content' => $posts[0]->content,
            // 'upvotes' => $posts[0]->upvotes,

            'date' => $date,
            'title' => $title,
            'content' => $content,
            'upvotes' => $upvotes,
        ]);

        // return Post::all();
    }}
