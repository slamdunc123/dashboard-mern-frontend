import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Layout = ({ children }: any) => {
	return <Sidebar>{children}</Sidebar>;
};

export default Layout;
