import React , { useEffect } from 'react'
import OtherPageHeader from '../components/OtherPageHeader';
import Breadcumb from '../components/Breadcumb';
import Footer from '../components/Footer';
import ContactArea from '../components/ContactArea';

function ContactPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <React.Fragment>
            <OtherPageHeader />
            <Breadcumb pageTitle={"Contact us"} />
            <ContactArea />
            <Footer />
        </React.Fragment>
    )
}

export default ContactPage
