import Sidebar from '../Sidebar/Sidebar';

export default function Layout({ children }: any) {
	return (
		<>
			<Sidebar>{children}</Sidebar>
		</>
	);
}
