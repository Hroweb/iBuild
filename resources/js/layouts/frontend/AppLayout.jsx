import React from "react";
import StateContext from "../../context/StateContext";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const AppLayout = () => {
    /* const { token } = React.useContext(StateContext);
    
    if( token ) return <Navigate to="/" /> */

    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default AppLayout;