import React from 'react';
import Banner from '../../components/Banner';
import ContactUs from '../ContactUs';
import Featured from '../../components/Featured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;