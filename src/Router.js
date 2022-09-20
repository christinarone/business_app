// import React from "react";
// import { Routes, Route } from 'react-router'
// import Login from './Components/Login'

// const Router = () => (
//     <Routes>
//         {/* Need to change home to one of my components */}
//         <Route path="/" element={<Login />} />

//     </Routes>

// )

// export default Router

import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router';
import cookie from 'cookie';
import AddBusiness from './Containers/AddBusiness';
import BusinessDetails from './Containers/BusinessDetails';
import Login from './Containers/Login';
import Listings from './Containers/Listings';

export const checkAuth = () => {
	const cookies = cookie.parse(document.cookie);
	return cookies['loggedIn'] ? true : false;
};

const ProtectedRoutes = () => {
	return checkAuth() ? <Outlet /> : <Navigate to="/login" />;
};

const Router = () => {
	return (
		<Routes>
			<Route element={<ProtectedRoutes />}>
				<Route path="/addBusiness" element={<AddBusiness />}></Route>
			</Route>
			<Route exact path="/" element={<Listings />} />
			<Route path="/business/:id" element={<BusinessDetails />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
};
export default Router;