import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

type LayoutProps = {
	children?: React.ReactNode;
};


export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Sidebar>{children}</Sidebar>
		</>
	);
}
