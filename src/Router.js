import React from "react";
import { Routes, Route } from 'react-router'
import Login from './Components/Login'

const Router = () => (
    <Routes>
        {/* Need to change home to one of my components */}
        <Route path="/" element={<Login />} />

    </Routes>

)

export default Router