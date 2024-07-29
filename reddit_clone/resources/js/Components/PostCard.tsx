import React from 'react';

interface PostCardProps {
    user: string;
    title: string;
    content: string;
    upvotes: number;
    downvotes: number;
    updatedAt: string;
}

const PostCard: React.FC<PostCardProps> = ({ user, title, content, upvotes, downvotes, updatedAt }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-gray-500">{title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">User: {user}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{content}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Last updated: {new Date(updatedAt).toLocaleString()}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Upvotes: {upvotes} | Downvotes: {downvotes}</p>
        </div>
    );
};

export default PostCard;
