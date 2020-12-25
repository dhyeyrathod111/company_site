import React from 'react';
import HeaderHomePage from '../components/HeaderHomePage';
import HomePageSlider from '../components/HomePageSlider';
import ServiceArea from '../components/ServiceArea';
import AboutArea from '../components/AboutArea';
import CounterArea from '../components/CounterArea';
import BannerArea from '../components/BannerArea';
import Tabarea from '../components/Tabarea';
import DigitalServicesArea from '../components/DigitalServicesArea';
import BlogArea from '../components/BlogArea';
import Footer from '../components/Footer';

const Homepage = props => {
    return (
        <React.Fragment>
            <HeaderHomePage />
            <HomePageSlider />
            <ServiceArea />
            <AboutArea />
            <CounterArea />
            <BannerArea />
            <Tabarea />
            <DigitalServicesArea />
            <BlogArea />
            <Footer />
        </React.Fragment>
    )
}

export default Homepage;
