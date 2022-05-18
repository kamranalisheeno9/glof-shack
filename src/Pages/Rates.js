import React from 'react';
import Footer from '../components/Footer';
import LetsPlay from '../components/Letsplay'
import '../App.css'
const Rates = () => {
    return (
        <div className='Row'>
            <div className='Col1'></div>
            <div className='Col2'>

                <div className=''>
                    <div className='page-bg rates-bg'>
                        <div className='page-title '>
                            Tutorials
                        </div>
                    </div>
                    <div className='green-text'>Standard Rate</div>
                    <div className="pkg-box">
                        <div className='dates-text'>
                            October to April
                        </div>
                        <div className='schedule-box'>

                            <div className='dates-title-row'>
                                <div className='title-head'> 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp; &nbsp; 	&nbsp; &nbsp;  	&nbsp; 	&nbsp; 	&nbsp; &nbsp; 	&nbsp; &nbsp; 	&nbsp; &nbsp; 	&nbsp; &nbsp; 	&nbsp; &nbsp; 	&nbsp; &nbsp; 	&nbsp; &nbsp; 	&nbsp; &nbsp; 	&nbsp;  </div>
                                <div className='title-head'>Monday to Friday</div>
                                <div className='title-head'>Weekend</div>
                                <div className='title-head'>Off peak (1AM - 6AM)</div>

                            </div>
                            <div className='dates-value-row'>
                                <div className='title-value'>Per person-hour</div>
                                <div className='title-value'>$28</div>
                                <div className='title-value'>$32</div>
                                <div className='title-value'>$18</div>

                            </div>
                        </div>
                        <div className='responsive-schedule'>
                            <div className='day-name'>
                                Per person-hour
                            </div>
                            <div className='schedule-days'>
                                <div className='each-day'>
                                    <div className='day-name'>
                                        Monday to Friday
                                    </div>
                                    <div className='day-price'>
                                        $28
                                    </div>
                                </div>
                                <div className='each-day'>
                                    <div className='day-name'>
                                        Weekend
                                    </div>
                                    <div className='day-price'>
                                        $28
                                    </div>
                                </div>

                            </div>
                            <div className='schedule-large ' >
                                <div className='schedule-large-box'>

                                <div className='day-name'>
                                    Off peak (1AM - 6AM)
                                </div>
                                <div className='day-price'>
                                    $28
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='green-text'>OFF SEASON RATE</div>

                        <div className='dates-text'>
                            May to September
                        </div>
                        <div className='schedule-box'>

                            <div className='dates-title-row'>
                                <div className='title-head'> 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp; &nbsp; 	&nbsp; &nbsp;  	&nbsp; 	&nbsp; 	&nbsp; &nbsp; 	&nbsp; &nbsp; 	&nbsp; &nbsp; 	&nbsp; &nbsp; 	&nbsp; &nbsp; 	&nbsp; &nbsp; 	&nbsp; &nbsp; 	&nbsp; &nbsp; 	&nbsp;  </div>
                                <div className='title-head'>Monday to Friday</div>
                                <div className='title-head'>Weekend</div>
                                <div className='title-head'>Off peak (1AM - 6AM)</div>

                            </div>
                            <div className='dates-value-row'>
                                <div className='title-value'>Per person-hour</div>
                                <div className='title-value'>$15</div>
                                <div className='title-value'>$20</div>
                                <div className='title-value'>$10</div>

                            </div>
                        </div>
                        <div className='responsive-schedule'>
                            <div className='day-name'>
                                Per person-hour
                            </div>
                            <div className='schedule-days'>
                                <div className='each-day'>
                                    <div className='day-name'>
                                        Monday to Friday
                                    </div>
                                    <div className='day-price'>
                                        $28
                                    </div>
                                </div>
                                <div className='each-day'>
                                    <div className='day-name'>
                                        Weekend
                                    </div>
                                    <div className='day-price'>
                                        $28
                                    </div>
                                </div>

                            </div>
                            <div className='schedule-large ' >
                                <div className='schedule-large-box'>

                                <div className='day-name'>
                                    Off peak (1AM - 6AM)
                                </div>
                                <div className='day-price'>
                                    $28
                                </div>
                                </div>
                            </div>
                        </div>
                        <LetsPlay />
                        <Footer />
                    </div>

                </div>
            </div>

        </div>

    );
}

export default Rates;