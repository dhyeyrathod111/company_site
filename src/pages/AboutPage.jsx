import React from 'react'
import OtherPageHeader from '../components/OtherPageHeader';
import Breadcumb from '../components/Breadcumb';
import WelcomeArea from '../components/WelcomeArea';
import AboutArea from '../components/AboutArea';
import CounterArea from '../components/CounterArea';
import OverviewArea from '../components/OverviewArea';
import ReviewsArea from '../components/ReviewsArea';
import Footer from '../components/Footer';

function AboutPage() {
    return (
        <React.Fragment>
            <OtherPageHeader />
            <Breadcumb />
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
