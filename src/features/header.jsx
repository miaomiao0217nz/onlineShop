import React from 'react';
import {Link} from 'react-router-dom';

export  const Header = () => {
    return <nav className='nav-container'>
        <div>
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to="/food">Food</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
    </nav>
}
