import React, { useState, useEffect } from 'react';
import './UserProfile.css'; // Ensure this matches your actual CSS file

function UserProfile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Retrieve user data from localStorage
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            setUser(userData);
        }
    }, []);

    if (!user) {
        return <div className="loading">Loading...</div>; // Handle loading state
    }

    return (
        <div className="user-profile-container">
            <div className="profile-header">
                <img src={user.profileImage || 'default-profile.png'} alt={user.username} className="profile-image" />
                <div className="profile-info">
                    <h1>{user.username}</h1>
                    <p className="email">{user.email}</p>
                    <p className="joined-date">Joined: {user.joinedDate}</p>
                    <a href="/edit-profile" className="edit-profile-btn">Edit Profile</a>
                </div>
            </div>
            <div className="user-reviews">
                <h2>Your Reviews</h2>
                {/* Render user's movie reviews here */}
                <div className="review-list">
                    {user.reviews && user.reviews.length > 0 ? (
                        user.reviews.map((review, index) => (
                            <div key={index} className="review-card">
                                <h3>{review.movieTitle}</h3>
                                <p>{review.content}</p>
                            </div>
                        ))
                    ) : (
                        <p>No reviews yet.</p>
                    )}
                </div>
            </div>
            <div className="user-activities">
                <h2>Recent Activities</h2>
                {/* Render user's recent activities here */}
                <div className="activity-list">
                    {user.activities && user.activities.length > 0 ? (
                        user.activities.map((activity, index) => (
                            <div key={index} className="activity-card">
                                <h3>{activity.title}</h3>
                                <p>{activity.description}</p>
                            </div>
                        ))
                    ) : (
                        <p>No recent activities.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
