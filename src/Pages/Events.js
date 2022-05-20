import React, { useState, useEffect } from 'react';
import SendIcon from '../assets/send.png'
import Footer from '../components/Footer';
import '../App.css'
import { Modal, Button } from 'react-bootstrap';
const Events = () => {


    const [show, setShow] = useState(false);
    const [Fname, setFname] = useState("")
    const [Lname, setLname] = useState("")
    const [Email, setEmail] = useState("")
    const [Message, setMessage] = useState("")
    const [Display, setDisplay] = useState("")
    const [Querry, setQuerry] = useState([])

    const handleClose = () => {
        setShow(false)
        setFname("")
        setLname("")
        setEmail("")
        setMessage("")
    };
    const handleShow = () => setShow(true);

    const AddQuerry = () => {

        const currentQuerry = {
            fname: Fname,
            lname: Lname,
            email: Email,
            message: Message,

        }
        {
            Fname == "" || Lname == "" || Email == "" || Message == "" ?
                handleShow()
                :
                setQuerry([...Querry, currentQuerry])
            handleShow()


        }
    }

    useEffect(() => {
        Fname == "" || Lname == "" || Email == "" || Message == "" ?
            setDisplay("Fill the form !") :
            setDisplay("Form successfully sent.")
    });

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

                                        <input value={Fname} onChange={(e) => setFname(e.target.value)} className='form-input' type="text" id="fname" name="firstname" placeholder="" />
                                    </div>

                                </div>
                                <div className='f-box'>
                                    <div className='form-title'>Last Name</div>
                                    <div className=''>

                                        <input value={Lname} onChange={(e) => setLname(e.target.value)} className='form-input' type="text" id="lname" name="firstname" placeholder="" />
                                    </div>

                                </div>
                            </div>
                            <div className='email'>
                                <div className='form-title'>Email</div>
                                <div className='email'>

                                    <input value={Email} onChange={(e) => setEmail(e.target.value)} className='form-input' type="email" id="email" name="firstname" placeholder="" />
                                </div>

                            </div>
                        </div>
                        <div className=''>
                            <div className='e-l-email-box'>
                                <div className='message'>

                                    <div className='form-title'>Message </div>


                                    <textarea value={Message} onChange={(e) => setMessage(e.target.value)} className='form-input' id="message" name="message" rows="6" cols="50">
                                    </textarea>
                                </div>

                            </div>

                        </div>
                        <div onClick={AddQuerry} className='submit-btn'>
                            <div>
                                <img src={SendIcon} />
                            </div>
                            <div className='send-text' > Send form</div>
                        </div>

                    </div>

                    <Modal show={show} onHide={handleClose} backdrop="static">
                        <Modal.Header closeButton>
                            <Modal.Title> {Display}</Modal.Title>
                        </Modal.Header>

                    </Modal>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Events;