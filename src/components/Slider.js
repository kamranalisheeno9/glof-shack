import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import HomeIcon from '../assets/home.png'
import BookIcon from '../assets/book.png'
import RatesIcon from '../assets/rates.png'
import TutorialsIcon from '../assets/tutorials.png'
import LessonsIcon from '../assets/lessons.png'
import EventsIcon from '../assets/events.png'
import ResLogo from '../assets/logo2.png'
import { Button, Offcanvas } from 'react-bootstrap';
import MenuIcon from '@mui/icons-material/Menu';

const SiderBarData = [
    {
        title: "Home",
        address: "/",
        icon: HomeIcon
    },
    {
        title: "Book",
        address: "book",
        icon: BookIcon
    },
    {
        title: "Rates",
        address: "rates",
        icon: RatesIcon
    },
    {
        title: "Tutorials",
        address: "tutorials",
        icon: TutorialsIcon
    },
    {
        title: "Lessons",
        address: "lessons",
        icon: LessonsIcon
    },
    {
        title: "Events",
        address: "events",
        icon: EventsIcon
    },
]

const Slider = (props) => {
    const [active, setActive] = useState(0)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

// console.log()
    return (
        <>
            <div className='res-container'>

                <div className='res-logo'>
                    <img src={ResLogo} />
                </div>
                <div className='res-bar'>
                    <div className='menu-btn' onClick={handleShow}>
                        <MenuIcon sx={{ color: "white", fontSize:"34px" }} /> 
                    </div>
                        <div className='bar-title'>
                            {SiderBarData[active].title}
                        </div>

                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>

                            <ul className='sliderList'>
                                {SiderBarData.map((data, key) => {
                                    return (
                                        <Link  onClick={e => setActive(key) || setShow(false) } key={key} to={data.address} >
                                            <li   className={key == active ? "active" : ""}>
                                                <div className='icon'>
                                                    <img src={data.icon} /></div>
                                                <div className='title'>
                                                    {data.title}</div>
                                            </li>
                                        </Link>
                                    )
                                })}


                            </ul>


                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </div>

            <div className='sliderBody'>
                <div className='mainLogo'></div>
                <ul className='sliderList'>
                    {SiderBarData.map((data, key) => {
                        return (
                            <Link onClick={e => setActive(key)} key={key} to={data.address} >
                                <li className={key == active ? "active" : ""}>
                                    <div className='icon'>
                                        <img src={data.icon} /></div>
                                    <div className='title'>
                                        {data.title}</div>
                                </li>
                            </Link>
                        )
                    })}


                </ul>
            </div>
        </>
    );
}

export default Slider;