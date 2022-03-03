import React, {useContext} from 'react';
import {
	Box,
	IconButton,
	Menu,
	MenuItem,
	Typography,
	Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AuthContext } from '../../context/authContext';
import Link from 'next/link';

const pages = [
	{ url: 'tests-page', name: 'tests', access: 'private' },
	{ url: 'data-fetching-options', name: 'dfo', access: 'public' },
];

const filteredPages = pages.filter(page => page.access !== 'private')

const NavMenu = ({ anchorElNav, handleOpenNavMenu, handleCloseNavMenu }) => {
    const { user } = useContext(AuthContext);
    
	return (
		<>
			<Box
				sx={{
					flexGrow: 1,
					display: { xs: 'flex', md: 'none' },
				}}
			>
				<IconButton
					size='large'
					aria-label='account of current user'
					aria-controls='menu-appbar'
					aria-haspopup='true'
					onClick={handleOpenNavMenu}
					color='inherit'
				>
					<MenuIcon />
				</IconButton>
				<Menu
					id='menu-appbar'
					anchorEl={anchorElNav}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					keepMounted
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					open={Boolean(anchorElNav)}
					onClose={handleCloseNavMenu}
					sx={{
						display: { xs: 'block', md: 'none' },
					}}
				>
					{(user ? pages : filteredPages).map((page, index) =>  (
						<MenuItem onClick={handleCloseNavMenu} key={index}>
							<Link href={`/${page.url}`}>
								<a>
									<Typography textAlign='center'>
										{page.name}
									</Typography>
								</a>
							</Link>
						</MenuItem>
					))}
				</Menu>
			</Box>
			<Link href='/'>
				<a>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{
							flexGrow: 1,
							display: { xs: 'flex', md: 'none' },
						}}
					>
						LOGO
					</Typography>
				</a>
			</Link>
			<Box
				sx={{
					flexGrow: 1,
					display: { xs: 'none', md: 'flex' },
				}}
			>
				{(user ? pages : filteredPages).map((page, index) => (
					<Link href={`/${page.url}`} key={index}>
						<a>
							<Button
								onClick={handleCloseNavMenu}
								sx={{
									my: 2,
									color: 'white',
									display: 'block',
								}}
							>
								{page.name}
							</Button>
						</a>
					</Link>
				))}
			</Box>
		</>
	);
};

export default NavMenu;
