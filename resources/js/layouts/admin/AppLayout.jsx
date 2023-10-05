import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import StateContext from "../../context/StateContext";
import Navbar from './Navbar';

const AppLayout = () => {
    const {user, token} = React.useContext(StateContext);
    if( !token ) return <Navigate to='/login' />
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default AppLayout;