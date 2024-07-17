// src/layout/Layout.jsx

import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className=' font-poppins' >
            <div className=''>
                
                <Outlet />
               
            </div>
        </div>
    );
};

export default Layout;
// 