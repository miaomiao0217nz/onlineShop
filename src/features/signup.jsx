import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [errors, setErrors] = useState({});
    const [signupStatus, setSignupStatus] = useState('');
    const navigate = useNavigate();

    const getValidateEmailError = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email) ? "" : "Invalid email format";
    };

    const getValidateUsernameError = (username) => {
        const usernameRegex = /^[a-zA-Z0-9_]{6,20}$/;
        return usernameRegex.test(username) ? "" : "Username must be 6-20 characters and include only letters, numbers, and underscores";
    };

    const getValidatePasswordError = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password) ? "" : "Password must be at least 8 characters and include uppercase, lowercase, numbers, and special characters";
    };

    const getComparePasswordsError = (password, passwordCheck) => {
        return password === passwordCheck ? "" : "Passwords do not match";
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setErrors(errors => ({ ...errors, email: getValidateEmailError(e.target.value) }));
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        setErrors(errors => ({ ...errors, username: getValidateUsernameError(e.target.value) }));
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setErrors(errors => ({ ...errors, password: getValidatePasswordError(e.target.value) }));
    };

    const handlePasswordCheckChange = (e) => {
        setPasswordCheck(e.target.value);
        setErrors(errors => ({ ...errors, passwordCheck: getComparePasswordsError(password, e.target.value) }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {
            email: getValidateEmailError(email),
            username: getValidateUsernameError(username),
            password: getValidatePasswordError(password),
            passwordCheck: getComparePasswordsError(password, passwordCheck)
        };
        setErrors(newErrors);

        if (Object.values(newErrors).every(error => error === "")) {
            try {
                const response = await fetch('/api/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        usersName: username,
                        usersEmail: email,
                        usersUname: username,
                        usersPwd: password
                    }),
                });
               
                const data = await response.json();
                
                if (data.usersUname) {
                    setSignupStatus('Signup successful!');
                    navigate(`/login/${data.usersUname}`);
                } else {
                    setSignupStatus(data.message || 'Signup failed.');
                }
            } catch (error) {
                setSignupStatus('An error occurred. Please try again later.');
            }
        }
    };

    return (
        <div className="form_section">
            <div className="signup_form_container">
                <h3>Register now</h3>
                <form onSubmit={handleSubmit} className="signup-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Please enter your name"
                        className="box"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Please enter your email"
                        className="box"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    {errors.email && <span className="error">{errors.email}</span>}

                    <input
                        type="text"
                        name="username"
                        placeholder="Please enter your username"
                        className="box"
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                    {errors.username && <span className="error">{errors.username}</span>}

                    <input
                        type="password"
                        name="pwd"
                        placeholder="Please enter your password"
                        className="box"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    {errors.password && <span className="error">{errors.password}</span>}

                    <input
                        type="password"
                        name="pwdcheck"
                        placeholder="Please confirm your password"
                        className="box"
                        value={passwordCheck}
                        onChange={handlePasswordCheckChange}
                        required
                    />
                    {errors.passwordCheck && <span className="error">{errors.passwordCheck}</span>}

                    <button type="submit" className="box">Sign Up</button>
                    <p className="signup-reminder">Already have an account? <Link to="/login">Login now</Link></p>
                </form>
                {signupStatus && <div className="signup-status">{signupStatus}</div>}
            </div>
        </div>
    );
}


