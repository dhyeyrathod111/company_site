import React from 'react';
import { Link } from 'react-router-dom';

function Breadcumb() {
    return (
        <div className="page-area">
            <div className="breadcumb-overlay" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="breadcrumb text-center">
                            <div className="section-headline white-headline text-center">
                                <h3>About us</h3>
                            </div>
                            <ul>
                                <li className="home-bread"><Link to={'/'}>Home</Link></li>
                                <li>About us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcumb
