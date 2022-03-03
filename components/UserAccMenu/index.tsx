import React from 'react';
import {
	Box,
	Tooltip,
	IconButton,
	Menu,
	MenuItem,
	Typography,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserAccMenu = ({
	anchorElUser,
	handleOpenUserMenu,
	handleCloseUserMenu,
}) => {
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
				<MenuItem onClick={handleCloseUserMenu}>
					<Typography textAlign='center'>{'Log In'}</Typography>
				</MenuItem>
			</Menu>
		</Box>
	);
};

export default UserAccMenu;
