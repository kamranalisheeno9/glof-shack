import React from 'react';
import PlayIcon from '../assets/play.png'
import { Link } from 'react-router-dom';
import '../App.css'
const Video=(props)=> {
    return (
        <div className='vid-background'>
            {/* <div className='vid-img'>
                <img src={props.videoImg} />
            <a href={props.address} target="_blank">
                <div className='play-btn'>
                    <div className='play-icon'>
                        <img src={PlayIcon} />
                    </div>
                    <div className='play-text-2' >
                    Play video
                    </div>
                </div>
        </a>
            </div> */}
        <iframe width="100%"   src={props.address}  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
}

export default Video;