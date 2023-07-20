import {useCallback, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {home} from "../shared/constants/routes.js";

export const useAuth = () => {
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);
	const [isReady, setIsReady] = useState(false);
	const navigate = useNavigate();

	const login = useCallback((jwt, id) => {
		setToken(jwt);
		setUserId(id);
		localStorage.setItem('userData', JSON.stringify({
			userId: id,
			token: jwt,
		}))
		navigate(home);
	}, []);

	const logout = () => {
		setToken(null);
		setUserId(null);
		localStorage.removeItem('userData');
	}

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('userData'));
		if (data && data.token) {
			login(data.token, data.userId);
		}
		setIsReady(true);
	}, [login]);

	return {login, logout, token, userId, isReady};
}