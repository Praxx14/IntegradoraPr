import React, { Component } from 'react';
import ItemServices from '../Subcomponentes/ItemServices';

class Services extends Component {

    render(){

        return(
            <>

                <section className="quick-info element-animate" data-animate-effect="fadeInLeft">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 bgcolor">
                                <div className="row">
                                    <div className="col-md-4 mb-3">
                                        <div className="media">
                                            <div className="mr-3 icon-wrap"><span
                                                className="icon ion-ios-telephone"></span></div>
                                            <div className="media-body">
                                                <h5>+1 234 5633 342</h5>
                                                <p>Call us 24/7 we will get back to you ASAP</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className="media">
                                            <div className="mr-3 icon-wrap"><span className="icon ion-location"></span>
                                            </div>
                                            <div className="media-body">
                                                <h5>249 Division Rad</h5>
                                                <p>Fake st. New York, New York City, PO 2923 USA</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className="media">
                                            <div className="mr-3 icon-wrap"><span
                                                className="icon ion-android-time"></span></div>
                                            <div className="media-body">
                                                <h5>Daily: 8 am - 10 pm</h5>
                                                <p>Mon-Fri, Sunday <br/> Saturday: Closed</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
    export default Services;
