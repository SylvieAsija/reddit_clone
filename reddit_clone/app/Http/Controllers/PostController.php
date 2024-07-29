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
        //$posts = Post::all();

        // foreach($posts as $postNum => $post) {
        //     $date[$postNum] = $post->created_at->toDateString();
        //     $title[$postNum] = $post->title;
        //     $content[$postNum] = $post->content;
        //     $upvotes[$postNum] = $post->upvotes;

        //     echo $postNum, " ", $title[$postNum], " ", $upvotes[$postNum], " ", $date[$postNum], "<br>";
        // }

        $posts = Post::with('User')->get(['id', 'user_id', 'title', 'content', 'upvotes', 'downvotes', 'updated_at']);
        
        echo $posts;

        return Inertia::render('Posts/All', [
            // 'date' => $posts[0]->created_at->toDateString(),
            // 'title' => $posts[0]->title,
            // 'content' => $posts[0]->content,
            // 'upvotes' => $posts[0]->upvotes,

            // 'posts' => $post->only(
            //     'created_at',
            //     'title',
            //     'content',
            //     'upvotes',
            // ),
            
            // 'date' => $date,
            // 'title' => $title,
            // 'content' => $content,
            // 'upvotes' => $upvotes,

            // 'posts' => $posts

            'posts' => $posts->map(function ($post) {
                return [
                    'id' => $post->id,
                    'user' => $post->user->name,
                    'title' => $post->title,
                    'content' => $post->content,
                    'upvotes' => $post->upvotes,
                    'downvotes' => $post->downvotes,
                    'updated_at' => $post->updated_at,
                ];
            }),
        ]);

        // return Post::all();
    }}
