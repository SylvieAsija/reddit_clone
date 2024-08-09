import React from 'react';

interface PostCardProps {
    id: number;
    user: string;
    title: string;
    content: string;
    upvotes: number;
    downvotes: number;
    updatedAt: string;
    subreddit: string;
}

// const PostCard: React.FC<PostCardProps> = ({ user, title, content, upvotes, downvotes, updatedAt }) => {
export default function PostCard ({ id, user, title, content, upvotes, downvotes, updatedAt, subreddit }:PostCardProps) {
return (
        // <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        //     <h2 className="text-xl font-semibold mb-2 text-gray-500">{title}</h2>
        //     <p className="text-gray-700 dark:text-gray-300 mb-4">User: {user}</p>
        //     <p className="text-gray-700 dark:text-gray-300 mb-4">{content}</p>
        //     <p className="text-gray-500 dark:text-gray-400 text-sm">Last updated: {new Date(updatedAt).toLocaleString()}</p>
        //     <p className="text-gray-500 dark:text-gray-400 text-sm">Upvotes: {upvotes} | Downvotes: {downvotes}</p>
        // </div>
        <div className="bg-white dark:bg-reddit_bg p-4 rounded-lg shadow pb-8 hover:bg-post_hover">
            <h3 className="text-xl font-semibold mb-2 text-white">{`${id}: Post Title: ${title}`}</h3>
            <p className="text-sm text-subreddit_name hover:text-subreddit_name_hover">{`Posted by u/${user} in r/${subreddit || 'Unknown'}`}</p>
            <p className="mt-2 text-post_text">{`Post Body: ${content}`}</p>
            <div className="mt-4 flex justify-between items-center">
                <span className="text-xs text-gray-400 text-white">{new Date(updatedAt).toLocaleString()}</span>
                <div className="flex space-x-4">
                    <span className='text-upvote'>{`Upvotes: ${upvotes}`}</span>
                    <span className='text-downvote'>{`Downvotes: ${downvotes}`}</span>
                </div>
            </div>
        </div>
    );
};
