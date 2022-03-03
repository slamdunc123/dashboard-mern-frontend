import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import UserAccMenu from '../UserAccMenu/UserAccMenu';
import NavMenu from '../NavMenu/NavMenu';
import NavLogo from '../NavLogo/NavLogo';

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
					<NavLogo />
					<NavMenu
						anchorElNav={anchorElNav}
						handleOpenNavMenu={handleOpenNavMenu}
						handleCloseNavMenu={handleCloseNavMenu}
					/>
					<UserAccMenu
						anchorElUser={anchorElUser}
						handleOpenUserMenu={handleOpenUserMenu}
						handleCloseUserMenu={handleCloseUserMenu}
					/>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navbar;
