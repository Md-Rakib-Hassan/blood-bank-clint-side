import React from 'react';
import Sidebar from '../../components/Sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Sidebar><Outlet></Outlet></Sidebar>
            
            
        </div>
    );
};

export default Dashboard;