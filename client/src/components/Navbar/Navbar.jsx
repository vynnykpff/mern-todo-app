import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBlock from 'react-bootstrap/Navbar';
import { home, login } from '../../shared/constants/routes';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<NavbarBlock bg='dark' data-bs-theme='dark'>
				<Container>
					<NavLink to={home}>
						<NavbarBlock.Brand>MERN Todo App</NavbarBlock.Brand>
					</NavLink>

					<Nav>
						<NavLink to={login} className='text-[#ffffff8c] p-2 font-medium'>
							Login
						</NavLink>
					</Nav>
				</Container>
			</NavbarBlock>
		</>
	);
};

export default Navbar;
