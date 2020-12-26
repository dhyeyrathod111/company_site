import React, { useEffect } from 'react'
import OtherPageHeader from '../components/OtherPageHeader';
import Breadcumb from '../components/Breadcumb';
import WelcomeArea from '../components/WelcomeArea';
import AboutArea from '../components/AboutArea';
import CounterArea from '../components/CounterArea';
import OverviewArea from '../components/OverviewArea';
import Footer from '../components/Footer';

const AboutPage = props => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    
    return (
        <React.Fragment>
            <OtherPageHeader />
            <Breadcumb pageTitle={"About us"} />
            <WelcomeArea />
            <AboutArea />
            <CounterArea />
            <OverviewArea />
            <Footer />
            {/* <ReviewsArea /> */}
        </React.Fragment>
    )
}

export default AboutPage
