import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import Loader from '../Loader/Loader.jsx';

const Layout = () => {
	return (
		<>
			<Navbar />
			<div className='container my-7'>
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</div>
		</>
	);
};

export default Layout;
