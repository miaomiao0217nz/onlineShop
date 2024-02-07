import React, { useState } from 'react';
import { Link ,useNavigate,useParams } from 'react-router-dom';


export const Login = () => {
    const {usersUname} = useParams();    
    const [userUname, setUserUname] = useState(usersUname);
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ usersUname:userUname,usersPwd: password }),
            });
            const data = await response.json();

            if (data.success) {
                setLoginStatus('Login successful!');
                navigate('/food'); 
            } else {
                setLoginStatus(data.message || 'Login failed.');
            }
        } catch (error) {
            setLoginStatus('An error occurred. Please try again later.');
        }
    };
    return (
        <div className="login_form">
            <div className="login_form_container">
                <h3>Login now</h3>
                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        type="text"
                        name="username"
                        placeholder="please enter your username"
                        className='loginbox'
                        value={userUname}
                        onChange={(e) => setUserUname(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        name="pwd"
                        placeholder="please enter your password"
                        className='loginbox'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className='loginbox'>Log In</button>
                    <p className="login-reminder">No account yet? <Link to="/signup">Sign up now</Link></p>
                </form>
            </div>
        </div>
    );
}
