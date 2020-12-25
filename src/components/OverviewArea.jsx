import React from 'react'

function OverviewArea() {
    return (
        <div className="overview-area bg-color area-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="overview-wrapper">
                            <h3> randerc technology firm clients web related security services </h3>
                            <p>
                                Our independent consultants, free from the internal demands of traditional firms, can focus on what really matters: delivering lasting impact. Our consultants opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering transformational change for the client, while being part of a strong team of like-minded professionals.
                            </p>
                            <div className="total-count">
                                <div className="single-count left-one">
                                    <span className="count-num">900+</span>
                                    <h4>Global Clients</h4>
                                </div>
                                <div className="single-count right-one">
                                    <span className="count-num">20+</span>
                                    <h4>Global Location</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="overview-image">
                            <img src="/assets/img/about/vd.jpg" alt="overview" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverviewArea
