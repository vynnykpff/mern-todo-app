import {useAuth} from "../../hooks/useAuth.js";
import {Navigate} from "react-router-dom";
import {login} from "../../shared/constants/routes.js";

const MainPage = () => {
	const {token} = useAuth();

	return (
		<>
			{!!token ? <div><h2>Main page</h2></div> : <Navigate to={login}/>}
		</>
	);
};

export default MainPage;