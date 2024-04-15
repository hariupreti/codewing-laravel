import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ImportUser from './Components/ImportUser';
import ImportedUserList from './Components/ImportedUserList';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div>
                <ImportUser></ImportUser>
                <ImportedUserList></ImportedUserList>
            </div>
        </AuthenticatedLayout>
    );
}
