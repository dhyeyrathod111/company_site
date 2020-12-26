import React from 'react'

function ContactArea() {
    return (
        <div className="contact-area area-padding">
            <div className="container">
                <div className="row">
                    <div className="contact-inner">
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="contact-icon text-center">
                                <div className="single-icon">
                                    <i className="ti-mobile" />
                                    <p>
                                        Call : +0011-564-543<br />
                                        <span>Monday-Friday (10am-18pm)</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="contact-icon text-center">
                                <div className="single-icon">
                                    <i className="ti-email" />
                                    <p>
                                        Email : Ragner3@gmail.com<br />
                                        <span>Web: www.rockstheme.com</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="contact-icon text-center">
                                <div className="single-icon">
                                    <i className="ti-location-pin" />
                                    <p>
                                        Location : Newyork city<br />
                                        <span>23 house/3 Road</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="contact-form">
                            <div className="row">
                                <form id="contactForm" method="POST" className="contact-form">
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <input type="text" id="name" className="form-control" placeholder="Name" required data-error="Please enter your name" />
                                        <div className="help-block with-errors" />
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <input type="email" className="email form-control" id="email" placeholder="Email" required data-error="Please enter your email" />
                                        <div className="help-block with-errors" />
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <input type="text" id="msg_subject" className="form-control" placeholder="Subject" required data-error="Please enter your message subject" />
                                        <div className="help-block with-errors" />
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <textarea id="message" rows={7} placeholder="Massage" className="form-control" required data-error="Write your message" defaultValue={""} />
                                        <div className="help-block with-errors" />
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                                        <button type="submit" id="submit" className="add-btn contact-btn">Send Message</button>
                                        <div id="msgSubmit" className="h3 text-center hidden" />
                                        <div className="clearfix" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactArea
