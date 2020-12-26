import React, { useEffect } from 'react';

import OtherPageHeader from '../components/OtherPageHeader';
import Breadcumb from '../components/Breadcumb';
import OurProjects from '../components/OurProjects';
import Footer from '../components/Footer';

function ProjectPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <React.Fragment>
            <OtherPageHeader />
            <Breadcumb pageTitle={"Project"} />
            <OurProjects />
            <Footer />
        </React.Fragment>
    )
}

export default ProjectPage
