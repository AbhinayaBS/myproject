// // Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './NaveBar.css';
// function NaveBar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <h1>MovieNow</h1>
//       </div>
//       <div className="navbar-links">
//         <Link to="/" className="nav-link">Home</Link>
//         <Link to="/films" className="nav-link">Films</Link>
//         <Link to="/lists" className="nav-link">Lists</Link>
//         <Link to="/journal" className="nav-link">Journal</Link>
//         <Link to="/login" className="nav-link login">Login</Link>
//       </div>
//     </nav>
//   );
// }

// export default NaveBar;



// // Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './NaveBar.css'; // Ensure this matches the actual file name

// function NaveBar() {
//   return (
//     <nav className="navbar">
//       <Link to="/main-landing" className="navbar-logo">
//         <h1>MovieNow</h1>
//       </Link>
//       <div className="navbar-links">
//         <Link to="/" className="nav-link">Home</Link>
//         <Link to="/films" className="nav-link">Films</Link>
//         <Link to="/lists" className="nav-link">Lists</Link>
//         <Link to="/journal" className="nav-link">Journal</Link>
//         <Link to='/reviews' className='nav-link'>Reviews</Link>
//         <Link to="/login" className="nav-link login">Login</Link>
//       </div>
//     </nav>
//   );
// }

// export default NaveBar;


// Navbar.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NaveBar.css'; // Ensure this matches the actual file name

function NaveBar() {
    const [userEmail, setUserEmail] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve user data from localStorage
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.email) {
            setUserEmail(user.email);
        }
    }, []);

    const handleSignOut = () => {
        // Clear user data from localStorage
        localStorage.removeItem('user');
        setUserEmail(null);
        navigate('/login'); // Redirect to the login page after sign out
    };

    return (
        <nav className="navbar">
            <Link to="/main-landing" className="navbar-logo">
                <h1>MovieNow</h1>
            </Link>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/films" className="nav-link">Films</Link>
                <Link to="/lists" className="nav-link">Lists</Link>
                <Link to="/journal" className="nav-link">Journal</Link>
                <Link to='/reviews' className='nav-link'>Reviews</Link>
                {userEmail ? (
                    <>
                        <span className="nav-link user-email">{userEmail}</span>
                        <button onClick={handleSignOut} className="nav-link signout-button">Sign Out</button>
                    </>
                ) : (
                    <Link to="/login" className="nav-link login">Login</Link>
                )}
            </div>
        </nav>
    );
}

export default NaveBar;
