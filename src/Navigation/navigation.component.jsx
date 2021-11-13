import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/homepage/homepage.compponent";

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}>
            </Route>
        </Routes>
    );
};

export default Navigation