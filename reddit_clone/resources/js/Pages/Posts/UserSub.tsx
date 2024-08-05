import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import PostCard from '@/Components/PostCard';


interface Post {
    id: number;
    user: string;
    title: string;
    content: string;
    upvotes: number;
    downvotes: number;
    updated_at: string;
    subreddit: string;
}

export default function Posts({auth, posts}:PageProps & {posts: Post[]}) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Posts" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        {
                            posts.map(post =>
                                <PostCard
                                    key={post.id}
                                    user={post.user}
                                    title={post.title}
                                    content={post.content}
                                    upvotes={post.upvotes}
                                    downvotes={post.downvotes}
                                    updatedAt={post.updated_at}
                                    subreddit={post.subreddit}
                                />
                            )
                        }
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
