import Sidebar from "../Sidebar/Sidebar";

type LayoutProps = {
	children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return <Sidebar>{children}</Sidebar>;
};

export default Layout;
