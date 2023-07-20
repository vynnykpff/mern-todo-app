import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBlock from 'react-bootstrap/Navbar';
import {home, login, registration} from '../../shared/constants/routes';
import { NavLink } from 'react-router-dom';
import {useAuth} from "../../hooks/useAuth.js";

const Navbar = () => {
	const {token} = useAuth();

	const handleClick = () => {
		if (!!token) {
			localStorage.removeItem('userData');
		}

	};

	return (
		<>
			<NavbarBlock bg='dark' data-bs-theme='dark'>
				<Container>
					<NavLink to={home}>
						<NavbarBlock.Brand>MERN Todo App</NavbarBlock.Brand>
					</NavLink>

					<Nav>
						<NavLink onClick={handleClick} to={!!token ? registration : login} className='text-[#ffffff8c] p-2 font-medium'>
							{!!token ? 'Logout' : 'Login'}
						</NavLink>
					</Nav>
				</Container>
			</NavbarBlock>
		</>
	);
};

export default Navbar;
