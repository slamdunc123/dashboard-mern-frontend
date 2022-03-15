import React from 'react';
import Sidebarn from '../SideBarn/SideBarn';

type LayoutProps = {
	children?: React.ReactNode;
};


export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Sidebarn>{children}</Sidebarn>
		</>
	);
}
