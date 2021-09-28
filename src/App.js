import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="container">
            <form action="">
                <div className="label-head">
                    <h1>Welcome</h1>
                </div>

                <div className="form-group-input">
                    <input type="text" name="username" placeholder="Username" />
                </div>

                <div className="form-group-input">
                    <input type="password" name="password" placeholder="Password" />
                </div>
                    
                <button className="btn-primary">Sign In</button>
                
                <div className="footer-form">
                    <p>Not have an account?  <a href="#">Sign Up</a></p>
                   
                </div>
            </form>
        </div>
    )
}

export default App;
