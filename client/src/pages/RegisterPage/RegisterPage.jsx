import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import {registration} from '../../shared/constants/routes';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {createUser, setUserPayload} from "../../store/user-payload/userPayload.slice.js";

const RegisterPage = () => {
	const state = useSelector(state => state.userPayload)
	const dispatch = useDispatch();

	const handleChange = (e) => {
		dispatch(setUserPayload({...state, [e.target.name]: e.target.value}));
	}

	const handleRegister = async () => {
		dispatch(createUser());
	}

	return (
		<div className='mx-auto text-center w-[550px]'>
			<h3 className='text-3xl font-medium mb-4'>Registration</h3>
			<form className='form form-login' onSubmit={(e) => e.preventDefault()}>
				<div className='row'>
					<label htmlFor='email' className='text-xl mb-2'>
						Email
					</label>
					<InputGroup className='mb-3' hasValidation>
						<InputGroup.Text className='w-10'>@</InputGroup.Text>
						<Form.Control
							type='email'
							name='email'
							autoComplete='user-email'
							required
							onChange={handleChange}
						/>
						<Form.Control.Feedback type='invalid'>
							Please input a email.
						</Form.Control.Feedback>
					</InputGroup>
					<label htmlFor='email' className='text-xl mb-2'>
						Password
					</label>
					<InputGroup hasValidation>
						<InputGroup.Text className='w-10'>#</InputGroup.Text>
						<Form.Control
							type='password'
							name='password'
							autoComplete='current-password'
							required
							onChange={handleChange}
						/>
						<Form.Control.Feedback type='invalid'>
							Please input a password.
						</Form.Control.Feedback>
					</InputGroup>
				</div>
				<div className='flex items-center mt-3 gap-4 justify-center'>
					<Button
						onClick={handleRegister}
						className='bg-blue-500 w-36 text-xl font-medium'
						as='input'
						type='button'
						value='Register'
					/>
					<Link to={registration} className='text-blue-500 text-lg'>
						You have account?
					</Link>
				</div>
			</form>
		</div>
	);
};

export default RegisterPage;
