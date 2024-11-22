import React, { useState } from 'react';
import keycloak from '../KeyClock/KeyClock';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const authenticated = await keycloak.login({
            username,
            password,
        });
        if (authenticated) {
            console.log('Token:', keycloak.token);
        }
    };

    return (
        <div>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
