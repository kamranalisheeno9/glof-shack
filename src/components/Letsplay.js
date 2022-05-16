import React from 'react';
import '../App.css'
import BookIcon from '../assets/bookgreen.png'

const Letsplay = (props) => {
    return (
        <div className='lets-play-box'>
            <div className='lets-text-box'>
                <div className='lets-ply-text'>Let's play</div>
                <div className='lets-play-btn'>
                    <div className="book-icon" >
                        <img src={BookIcon} />
                    </div>
                    <div className='play-text'>
                        Pick an open time
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Letsplay;