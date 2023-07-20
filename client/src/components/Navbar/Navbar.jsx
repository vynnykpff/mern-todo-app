import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBlock from 'react-bootstrap/Navbar';
import {home, login, registration} from '../../shared/constants/routes';
import {NavLink} from 'react-router-dom';
import {useAuth} from "../../hooks/useAuth.js";

const Navbar = () => {
	const {token, logout} = useAuth();

	const handleClick = () => {
		localStorage.removeItem('userData');
		logout();
	};

	return (
		<>
			<NavbarBlock bg='dark' data-bs-theme='dark'>
				<Container>
					<NavLink to={home}>
						<NavbarBlock.Brand>MERN Todo App</NavbarBlock.Brand>
					</NavLink>
					<Nav>
						{!!token ?
							<NavLink
								onClick={handleClick}
								to={login}
								className='text-[#ffffff8c] p-2 font-medium'>
								Logout
							</NavLink>
							: <NavLink
								to={registration}
								className='text-[#ffffff8c] p-2 font-medium'>
								Login
							</NavLink>
						}
					</Nav>
				</Container>
			</NavbarBlock>
		</>
	);
};

export default Navbar;
