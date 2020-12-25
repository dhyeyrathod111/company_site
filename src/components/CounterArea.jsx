import React from 'react'

function CounterArea() {
    return (
        <div className="counter-area fix area-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="counter-image">
                            <div className="rotmate-image rotateme">
                                <img src="assets/img/about/circle.png" alt="" />
                            </div>
                            <div className="top-img">
                                <img src="assets/img/about/self.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="fun-text-all">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="fun_text wow fadeInUp" data-wow-delay="0.2s">
                                    <span className="counter-icon"><i className="ti-layers" /></span>
                                    <span className="counter">510</span>
                                    <h4>Total projects</h4>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="fun_text wow fadeInUp" data-wow-delay="0.3s">
                                    <span className="counter-icon"><i className="ti-world" /></span>
                                    <span className="counter">120</span>
                                    <h4>Worldwide</h4>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="fun_text wow fadeInUp" data-wow-delay="0.4s">
                                    <span className="counter-icon"><i className="ti-cup" /></span>
                                    <span className="counter">40</span>
                                    <h4>Awards win</h4>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="fun_text wow fadeInUp" data-wow-delay="0.5s">
                                    <span className="counter-icon"><i className="ti-user" /></span>
                                    <span className="counter">210</span>
                                    <h4>Team member</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterArea
