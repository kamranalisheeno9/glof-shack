import React from 'react';
import SendIcon from '../assets/send.png'
import Footer from '../components/Footer';
import '../App.css'
const Events = () => {
    return (
        <div className='Row'>
            <div className='Col1'></div>
            <div className='Col2'>
                <div className='tutorial-box'>

                    <div className='page-bg tutorials-h'>
                        <div className='page-title'>
                            Events
                        </div>

                    </div>
                    <div className='square-box'></div>
                    <div className='main-event-div'></div>
                    <div className='inner-page-title' >Event services</div>
                    <div className='inner-div'>

                        <div className='inner-paragraph'>
                            Hosting an event? Let us know about any questions, comments or concerns you have about our event services.
                        </div>

                    </div>
                        <div className='input-box'>
                            <div className='e-l-email-box'>

                                <div className='f-l-box'>
                                    <div className='f-box'>
                                        <div className='form-title'>First Name</div>
                                        <div className=''>

                                            <input className='form-input' type="text" id="fname" name="firstname" placeholder="" />
                                        </div>

                                    </div>
                                    <div className='f-box'>
                                        <div className='form-title'>Last Name</div>
                                        <div className=''>

                                            <input className='form-input' type="text" id="lname" name="firstname" placeholder="" />
                                        </div>

                                    </div>
                                </div>
                                <div className='email'>
                                    <div className='form-title'>Email</div>
                                    <div className='email'>

                                        <input className='form-input' type="email" id="email" name="firstname" placeholder="" />
                                    </div>

                                </div>
                            </div>
                            <div className=''>
                                    <div className='e-l-email-box'>
                                        <div className='message'>

                                    <div className='form-title'>Message </div>


                                    <textarea className='form-input' defaultValue="" id="message" name="message" rows="6" cols="50">
                            </textarea>
                                        </div>
                                  
                                    </div>

                                </div>
                                <div className='submit-btn'>
                                    <div>
                                        <img src={SendIcon} />
                                    </div>
                                    <div className='send-text'> Send form</div>
                                </div>

                        </div>
                <Footer />
                </div>
            </div>
        </div>
    );
}

export default Events;