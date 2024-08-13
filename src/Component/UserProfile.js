// import React, { useState, useEffect } from 'react';
// import './UserProfile.css'; // Ensure this matches your actual CSS file

// function UserProfile() {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         // Retrieve user data from localStorage
//         const userData = JSON.parse(localStorage.getItem('user'));
//         if (userData) {
//             setUser(userData);
//         }
//     }, []);

//     if (!user) {
//         return <div className="loading">Loading...</div>; // Handle loading state
//     }

//     return (
//         <div className="user-profile-container">
//             <div className="profile-header">
//                 <img src={user.profileImage || 'default-profile.png'} alt={user.username} className="profile-image" />
//                 <div className="profile-info">
//                     <h1>{user.username}</h1>
//                     <p className="email">{user.email}</p>
//                     <p className="joined-date">Joined: {user.joinedDate}</p>
//                     <a href="/edit-profile" className="edit-profile-btn">Edit Profile</a>
//                 </div>
//             </div>
            
//             <div className="user-reviews">
//                 <h2>Your Reviews</h2>
//                 <div className="review-list">
//                     {user.reviews && user.reviews.length > 0 ? (
//                         user.reviews.map((review, index) => (
//                             <div key={index} className="review-card">
//                                 <h3>{review.movieTitle}</h3>
//                                 <p>{review.content}</p>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No reviews yet.</p>
//                     )}
//                 </div>
//             </div>

//             <div className="user-movie-list">
//                 <h2>Your Movie List</h2>
//                 <div className="movie-list">
//                     {user.movieList && user.movieList.length > 0 ? (
//                         user.movieList.map((movie, index) => (
//                             <div key={index} className="movie-card">
//                                 <img src={movie.poster || 'default-movie-poster.png'} alt={movie.title} className="movie-poster" />
//                                 <div className="movie-info">
//                                     <h3>{movie.title}</h3>
//                                     <p>Added on: {movie.addedDate}</p>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No movies added to your list yet.</p>
//                     )}
//                 </div>
//             </div>

//             <div className="user-activities">
//                 <h2>Recent Activities</h2>
//                 <div className="activity-list">
//                     {user.activities && user.activities.length > 0 ? (
//                         user.activities.map((activity, index) => (
//                             <div key={index} className="activity-card">
//                                 <h3>{activity.title}</h3>
//                                 <p>{activity.description}</p>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No recent activities.</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default UserProfile;



import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for API calls
import './UserProfile.css'; // Ensure this matches your actual CSS file

function UserProfile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Handle loading state
    const userId = JSON.parse(localStorage.getItem('userId')); // Retrieve userId from localStorage

    useEffect(() => {
        // Function to fetch user data
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`/api/users/${userId}`);
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [userId]);

    const handleAddMovie = async (movie) => {
        try {
            await axios.post(`/api/users/${userId}/movies`, movie);
            // Refresh the user data to reflect changes
            const response = await axios.get(`/api/users/${userId}`);
            setUser(response.data);
        } catch (error) {
            console.error('Error adding movie:', error);
        }
    };

    if (loading) {
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

            <div className="user-movie-list">
                <h2>Your Movie List</h2>
                <div className="movie-list">
                    {user.movieList && user.movieList.length > 0 ? (
                        user.movieList.map((movie, index) => (
                            <div key={index} className="movie-card">
                                <img src={movie.poster || 'default-movie-poster.png'} alt={movie.title} className="movie-poster" />
                                <div className="movie-info">
                                    <h3>{movie.title}</h3>
                                    <p>Added on: {movie.addedDate}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No movies added to your list yet.</p>
                    )}
                </div>
            </div>

            <div className="user-activities">
                <h2>Recent Activities</h2>
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
