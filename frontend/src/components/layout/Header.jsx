//src/components/layout/Header.jsx 

/* 
** App Title / Logo
** Global Search (product, orders, customers) 
** Notification (Low Stock alerts)
** Dark Mode Toggle(Option)
** User Info Dropdown 
** Logout 
** Role Badge (Admin / Manager / Staff) 
*/

import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Menu, MenuItem } from '@mui/material';
import { Notifications as NotificationsIcon, AccountCircle } from '@mui/icons-material';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Inventory Management
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit" onClick={handleMenu}>
                    <AccountCircle />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

