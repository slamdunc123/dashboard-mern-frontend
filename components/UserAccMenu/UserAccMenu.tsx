import React, { useContext } from 'react';
import {
	Box,
	Tooltip,
	IconButton,
	Menu,
	MenuItem,
	Typography,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AuthContext } from '../../context/authContext';

const UserAccMenu = ({
	anchorElUser,
	handleOpenUserMenu,
	handleCloseUserMenu,
}) => {
	const { user,  login, logout } = useContext(AuthContext);

	const handleOnClick = () => {
		if (user) {
			logout();
		} else login();
		handleCloseUserMenu();
	};
	return (
		<Box sx={{ flexGrow: 0 }}>
			<Tooltip title='Open settings'>
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
					<AccountCircleIcon
						fontSize='large'
						sx={{ color: '#fff' }}
					/>
				</IconButton>
			</Tooltip>
			<Menu
				sx={{ mt: '45px' }}
				id='menu-appbar'
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				<MenuItem onClick={handleOnClick}>
					<Typography textAlign='center'>
						{!user ? 'Log In' : 'Log Out'}
					</Typography>
				</MenuItem>
			</Menu>
		</Box>
	);
};

export default UserAccMenu;
