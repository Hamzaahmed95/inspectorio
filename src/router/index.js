import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Home, NotFound,Person } from "../pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="person/:id" element={<Person />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
