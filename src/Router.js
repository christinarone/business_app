import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import cookie from 'cookie';
import AddBusiness from './Containers/AddBusiness';
import BusinessDetails from './Containers/BusinessDetails';
import Login from './Containers/Login';
import Listings from './Containers/Listings';

export const checkAuth = () => {
	const cookies = cookie.parse(document.cookie);
	return cookies['loggedIn'] ? true : false;
};

const ProtectedRoutes = (props) => {
	const {component: Component, ...rest} = props;
	
	return (
	checkAuth() === true ?
	<Component {...rest} /> :
	<Navigate to="/login" />
	)
	
	// return checkAuth() ? <Outlet /> : <Navigate to="/login" />;
};

const Router = () => {
	return (
		<Routes>

			<Route exact path="/" element={<Listings />} />
			<Route path="/business/:id" element={<BusinessDetails />} />
			<Route path="/login" element={<Login />} />
			<Route path="/addBusiness" element={<AddBusiness></AddBusiness>} />
		</Routes>
		// <Route path="/add" element={<ProtectedRoute component={Add}/>} />
	);
};
export default Router;


// const ProtectedRoute = (props) => {
// 	const {component: Component, ...rest} = props;
	
// 	return (
// 	checkAuth() === true ?
// 	<Component {...rest} /> :
// 	<Navigate to="/login" />
// 	)
// 	}