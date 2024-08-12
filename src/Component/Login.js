// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Login.css';

// function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(''); // State for error message
//   const navigate = useNavigate(); 

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:9001/login', { email, password });
//       console.log('Login successful:', response.data);
//       navigate('/'); // Navigate to the landing page on successful login
//     } catch (error) {
//       // Check if error response is available and set the error message
//       if (error.response) {
//         setErrorMessage(error.response.data || 'Login failed'); // Display server error message
//       } else {
//         setErrorMessage('An error occurred'); // Display general error message
//       }
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2 className="login-title">Login</h2>
//       <form className="login-form" onSubmit={handleSubmit}>
//         <div className="input-container">
//           <i className="fas fa-envelope input-icon"></i>
//           <input
//             className="login-input"
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div className="input-container password-container">
//           <i className="fas fa-lock input-icon"></i>
//           <input
//             className="login-input"
//             type={showPassword ? 'text' : 'password'}
//             id="password"
//             name="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button
//             type="button"
//             className="show-password-btn"
//             onClick={() => setShowPassword(!showPassword)}
//           >
//             <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
//           </button>
//         </div>

//         {errorMessage && (
//           <div className="error-message">{errorMessage}</div> // Display error message
//         )}

//         <button type="submit" className="login-submit-btn">Login</button>
//       </form>

//       <div className="login-footer">
//         <a href="#forgot-password" className="login-link">Forgot Password?</a>
//         <p className="login-footer-text">
//           Don't have an account? <Link to="/signup" className="login-link">Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;


/////Orginal da  DONT CONFUSE
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Login.css';

// function LoginPage() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [errorMessage, setErrorMessage] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post('http://localhost:9001/login', { email, password });
//             const userData = response.data;
//             console.log('Login successful:', userData);

//             // Store user data in localStorage
//             localStorage.setItem('user', JSON.stringify(userData));

//             // Navigate to the home page
//             navigate('/home');
//         } catch (error) {
//             if (error.response) {
//                 setErrorMessage(error.response.data || 'Login failed');
//             } else {
//                 setErrorMessage('An error occurred');
//             }
//         }
//     };

//     return (
//         <div className="login-container">
//             <h2 className="login-title">Login</h2>
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <div className="input-container">
//                     <i className="fas fa-envelope input-icon"></i>
//                     <input
//                         className="login-input"
//                         type="email"
//                         id="email"
//                         name="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>

//                 <div className="input-container password-container">
//                     <i className="fas fa-lock input-icon"></i>
//                     <input
//                         className="login-input"
//                         type={showPassword ? 'text' : 'password'}
//                         id="password"
//                         name="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                     <button
//                         type="button"
//                         className="show-password-btn"
//                         onClick={() => setShowPassword(!showPassword)}
//                     >
//                         <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
//                     </button>
//                 </div>

//                 {errorMessage && <div className="error-message">{errorMessage}</div>}

//                 <button type="submit" className="login-submit-btn"><Link to="/" ></Link>Login</button>
//             </form>

//             <div className="login-footer">
//                 <a href="#forgot-password" className="login-link">Forgot Password?</a>
//                 <p className="login-footer-text">
//                     Don't have an account? <Link to="/signup" className="login-link">Sign Up</Link>
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default LoginPage;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:9001/login', { email, password });
            const userData = response.data;
            console.log('Login successful:', userData);

            // Store user data in localStorage
            localStorage.setItem('user', JSON.stringify(userData));

            // Navigate to the home page or dashboard
            navigate('/landing'); // Change to the appropriate route if needed
        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data || 'Login failed');
            } else {
                setErrorMessage('An error occurred');
            }
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="input-container">
                    <i className="fas fa-envelope input-icon"></i>
                    <input
                        className="login-input"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="input-container password-container">
                    <i className="fas fa-lock input-icon"></i>
                    <input
                        className="login-input"
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="button"
                        className="show-password-btn"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                    </button>
                </div>

                {errorMessage && <div className="error-message">{errorMessage}</div>}

                <button type="submit" className="login-submit-btn">Login</button>
            </form>

            <div className="login-footer">
                <a href="#forgot-password" className="login-link">Forgot Password?</a>
                <p className="login-footer-text">
                    Don't have an account? <Link to="/signup" className="login-link">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;


