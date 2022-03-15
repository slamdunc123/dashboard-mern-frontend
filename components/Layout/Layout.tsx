import React from 'react';
import SideBarn from '../SideBarn/SideBarn';

type LayoutProps = {
	children?: React.ReactNode;
};


export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<SideBarn>{children}</SideBarn>
		</>
	);
}
