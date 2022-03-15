import React from 'react';
import PersistentDrawerLeft from '../Sidebar/Sidebar';

type LayoutProps = {
	children?: React.ReactNode;
};


export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<PersistentDrawerLeft>{children}</PersistentDrawerLeft>
		</>
	);
}
