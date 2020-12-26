import React ,  { useEffect } from 'react';
import OtherPageHeader from '../components/OtherPageHeader';
import Breadcumb from '../components/Breadcumb';
import ServiceArea from '../components/ServiceArea';
import Tabarea from '../components/Tabarea';
import Footer from '../components/Footer';

function ServicesPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <React.Fragment>
            <OtherPageHeader />
            <Breadcumb pageTitle={"Servces"} />
            <ServiceArea />
            <Tabarea />
            <Footer />
        </React.Fragment>
    )
}

export default ServicesPage
