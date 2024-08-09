import React, { useState, useEffect, useCallback } from 'react';
import { Head, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import PostCard from '@/Components/PostCard';
import axios from 'axios';

interface Post {
    id: number;
    title: string;
    content: string;
    upvotes: number;
    downvotes: number;
    updated_at: string;
    user: {
        name: string;
    };
    subreddit: {
        name: string;
    };
}

interface PostsProps extends PageProps {
    posts: {
        data: Post[];
        current_page: number;
        last_page: number;
    };
}

export default function Dashboard({ auth, posts: initialPostsData }: PostsProps) {
    const [posts, setPosts] = useState<Post[]>(initialPostsData.data);
    const [currentPage, setCurrentPage] = useState(initialPostsData.current_page);
    const [loading, setLoading] = useState(false);

    const fetchMorePosts = useCallback(async () => {
        // if (loading || currentPage >= initialPostsData.last_page) return;
        if (loading) return;

        setLoading(true);

        try {
            let nextPage = currentPage + 1;
            if (nextPage > initialPostsData.last_page) {
                // Loop back to the first page
                nextPage = 1;
            }
            const response = await axios.get(`/posts?page=${nextPage}`);
            setPosts((prevPosts) => [...prevPosts, ...response.data.data]);
            setCurrentPage(nextPage);
        } finally {
            setLoading(false);
        }
    }, [currentPage, loading]);

    const handleScroll = useCallback(() => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1000 && !loading) {
            fetchMorePosts();
        }
    }, [fetchMorePosts, loading]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);
    

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Posts" />
            <div className="bg-reddit_bg py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-reddit_bg overflow-hidden shadow-sm sm:rounded-lg">
                        {
                            posts.map(post =>
                                <PostCard
                                    key={post.id}
                                    id={post.id}
                                    user={post.user.name}
                                    title={post.title}
                                    content={post.content}
                                    upvotes={post.upvotes}
                                    downvotes={post.downvotes}
                                    updatedAt={post.updated_at}
                                    subreddit={post.subreddit.name}
                                />
                            )
                        }
                    </div>
                    {loading && <div>Loading more posts...</div>}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

