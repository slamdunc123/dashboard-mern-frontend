import React, { useContext } from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';

const NavLogo = () => {
	return (
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
	);
};

export default NavLogo;
