import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { all, home, login, register } from './shared/constants/routes';
import { lazy } from 'react';

const AuthPage = lazy(() => import('./pages/AuthPage/AuthPage.jsx'));
const RegisterPage = lazy(() =>
	import('./pages/RegisterPage/RegisterPage.jsx')
);
const NotFoundPage = lazy(() =>
	import('./pages/NotFoundPage/NotFoundPage.jsx')
);

const App = () => {
	return (
		<Routes>
			<Route path={home} element={<Layout />}>
				<Route path={login} element={<AuthPage />} />
				<Route path={register} element={<RegisterPage />} />
				<Route path={all} element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
};

export default App;
