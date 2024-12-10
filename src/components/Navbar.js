import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { AuthContext } from '../Authentification';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Admin Dashboard
                </Typography>
                {user ? (
                    <>
                        <Button color="inherit" component={Link} to="/">Dashboard</Button>
                        <Button color="inherit" component={Link} to="/companies">Companies</Button>
                        <Button color="inherit" component={Link} to="/requests">Requests</Button>
                        <Button color="inherit" component={Link} to="/users">Users</Button>
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                    </>
                ) : (
                    <Button color="inherit" component={Link} to="/login">Login</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
