import React from 'react';

interface PostCardProps {
    user: string;
    title: string;
    content: string;
    upvotes: number;
    downvotes: number;
    updatedAt: string;
    subreddit: string;
}

// const PostCard: React.FC<PostCardProps> = ({ user, title, content, upvotes, downvotes, updatedAt }) => {
export default function PostCard ({ user, title, content, upvotes, downvotes, updatedAt, subreddit }:PostCardProps) {
return (
        // <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        //     <h2 className="text-xl font-semibold mb-2 text-gray-500">{title}</h2>
        //     <p className="text-gray-700 dark:text-gray-300 mb-4">User: {user}</p>
        //     <p className="text-gray-700 dark:text-gray-300 mb-4">{content}</p>
        //     <p className="text-gray-500 dark:text-gray-400 text-sm">Last updated: {new Date(updatedAt).toLocaleString()}</p>
        //     <p className="text-gray-500 dark:text-gray-400 text-sm">Upvotes: {upvotes} | Downvotes: {downvotes}</p>
        // </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-500">{`Post Title: ${title}`}</h3>
            <p className="text-sm text-gray-500">{`Posted by u/${user} in r/${subreddit || 'Unknown'}`}</p>
            <p className="mt-2">{`Post Body: ${content}`}</p>
            <div className="mt-4 flex justify-between items-center">
                <span className="text-xs text-gray-400">{new Date(updatedAt).toLocaleString()}</span>
                <div className="flex space-x-4">
                    <span>{`Upvotes: ${upvotes}`}</span>
                    <span>{`Downvotes: ${downvotes}`}</span>
                </div>
            </div>
        </div>
    );
};
