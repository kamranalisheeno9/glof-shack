import React from 'react';
import '../App.css'
import BookIcon from '../assets/bookgreen.png'
import ArrowIcon from '../assets/arrow.png'
import VectorIcon from '../assets/vector.png'
import MainScreen from '../assets/MainScreen.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TvScreen from '../assets/tvscreen.png'
import Video from '../components/Video';
import VideoImg from '../assets/vid.png'
import Footer from '../components/Footer';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



const Home = () => {

    return (
<>

        <div className='Row'>
            <div className='Col1'></div>
            <div className='Col2'>
                <div className='mainScreen'>
                    <img className='main-s-img' src={MainScreen} />
                    <div className='mainText'>
                        <div className='letsPlay'>
                            Let's Play
                        </div>
                        <div className='content'>
                            Golf Shack is a 24/7 fully autonomous golf simulator, bringing year round enjoyment for golfers who want to play virtual rounds or just get better.
                        </div>
                        <div className='pick-play'>
                            <div className='pick-time'>
                                <div className="book-icon" >
                                    <img src={BookIcon} />
                                </div>
                                <div className='play-text'>
                                    Pick an open time
                                </div>

                            </div>
                            <div className='arrow-container'>

                            <div className='arrow-icon'>

                                <img src={ArrowIcon} />
                            </div>
                            <div className='arrow-text'>
                                Show up
                            </div>
                            <div className='arrow-icon'>

                                <img src={ArrowIcon} />
                            </div>
                            <div className='arrow-text'>
                                Play!
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='square-box'></div>
                    <div className='extra-text'>
                        <div className='extra-header' >Elevate your game</div>
                        <div className='extra-paragraph'>
                            Golf Shack has 4 state of the art simulators with a practice putting facility, whihc is perfect for golfers looking to improve or keeping the rust off their game during the off seasons.
                        </div>
                        <div className='pick-time-2'>
                            <div className="book-icon book-icon-2" >
                                <img src={BookIcon} />
                            </div>
                            <div className='pick-text-2'>
                                Pick an open time
                            </div>
                            <div className="vector-icon" >
                                <img src={VectorIcon} />
                            </div>
                        </div>
                    </div>
                    <div className='multi-carousel'>
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            showDots={false}
                            responsive={responsive}
                            arrows={false}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={4000}
                            renderButtonGroupOutside={true}
                        >

                            <div className='tvImg'><img src={TvScreen} /></div>
                            <div className='tvImg'><img src={TvScreen} /></div>
                            <div className='tvImg'><img src={TvScreen} /></div>
                            <div className='tvImg'><img src={TvScreen} /></div>
                            <div className='tvImg'><img src={TvScreen} /></div>
                            <div className='tvImg'><img src={TvScreen} /></div>
                        </Carousel>
                    </div>
                    <div className='square-box'></div>
                    <div className='how-it-works'>
                        How it works
                    </div>

                    <Video videoImg={VideoImg} address="https://vimeo.com/175758449" />
                    <div className='vid-time'>

                    <div className='pick-time-2'>
                            <div className="book-icon book-icon-2" >
                                <img src={BookIcon} />
                            </div>
                            <div className='pick-text-2'>
                                Pick an open time
                            </div>
                            <div className="vector-icon vector-icon-2" >
                                <img src={VectorIcon} />
                            </div>
                        </div>
                    </div>
                <Footer />
                </div>
            </div>
        </div>

    </>
    );
}

export default Home;