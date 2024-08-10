import React, { useState, useEffect } from 'react';
import { useUser } from './UserContext'; // Ensure this path is correct
import './Profile.css';

function Profile() {
    const { user } = useUser(); // Access user context
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        // Fetch user data if needed
        if (user) {
            setUserInfo(user);
        }
    }, [user]);

    if (!userInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-container">
            <h1>Profile</h1>
            <div className="profile-info">
                <p><strong>Email:</strong> {userInfo.email}</p>
                <p><strong>Username:</strong> {userInfo.username}</p>
                {/* Add more user information if needed */}
            </div>
        </div>
    );
}

export default Profile;
