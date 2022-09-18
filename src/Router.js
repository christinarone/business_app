import React from "react";
import { Routes, Route } from 'react-router'
import Home from './components/Home'

const Router = () => (
    <Routes>
        <Route path="/" element={<Home />} />

    </Routes>

)

export default Router