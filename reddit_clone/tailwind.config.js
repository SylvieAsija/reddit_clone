import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'reddit_bg': '#0E1113',
                'post_hover': '#181C1F',
                'subreddit_name': '#B7CAD4',
                'subreddit_name_hover': '#90A9FD',
                'post_text': '#A8CAD4',
                'upvote': '#D93900',
                'downvote': '#6A5CFF'
            }
        },
    },

    plugins: [forms],
};
