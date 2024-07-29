import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Timeline from '@/Components/Timeline';

interface Props {
    date: Date,
    title: string,
    content: string,
    upvotes: number
}

export default function Posts({auth, date, title, content, upvotes}: any) {


    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Posts" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <Timeline date={date} title={title} content={content} upvotes={upvotes} />
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
