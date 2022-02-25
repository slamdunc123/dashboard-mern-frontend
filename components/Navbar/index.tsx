import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import Link from 'next/link';

const pages = [
	{ url: 'tests-page', name: 'tests' },
	{ url: 'data-fetching-options', name: 'dfo' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Link href='/'>
						<a>
							<Typography
								variant='h6'
								noWrap
								component='div'
								sx={{
									mr: 2,
									display: { xs: 'none', md: 'flex' },
								}}
							>
								LOGO
							</Typography>
						</a>
					</Link>

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
							{pages.map((page, index) => (
								<MenuItem
									key={index}
									onClick={handleCloseNavMenu}
								>
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
						{pages.map((page, index) => (
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

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open settings'>
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{ p: 0 }}
							>
								<DragIndicatorIcon fontSize='large' sx={{color: '#fff'}}/>
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
							{settings.map((setting) => (
								<MenuItem
									key={setting}
									onClick={handleCloseUserMenu}
								>
									<Typography textAlign='center'>
										{setting}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navbar;
