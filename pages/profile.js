import withAuth from '../auth/withAuth';
import { useUser } from '../auth/useUser';
//import React from 'react';
import Layout from '../components/Layout';

export default function profile() {

  const { user, logout } = useUser();

    return (
        <Layout>
            <div className="container">
                <h1>Profile</h1>
                {
                    user?.email &&
                    <div>
                        <div>Email: {user.email}</div>
                        <button onClick={() => logout()}>Logout</button>
                    </div> 
                }
            </div>
        </Layout>
    )
}
