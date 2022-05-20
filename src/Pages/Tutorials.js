import React from 'react';
import Slider from '../components/Slider'
import '../App.css'
import Video from '../components/Video';
import BookingV from '../assets/vid.png'
import RoomV from '../assets/room.png'
import GameV from '../assets/game.png'
import PlayerV from '../assets/player.png'
import LetsPlyBox from '../components/Letsplay'
import Footer from '../components/Footer'

const TutorialsData = [
  {
    videoImg: BookingV,
    hTitle: "Booking",
    address:"https://www.youtube.com/embed/pSZRiS3NawM"

  },
  {
    videoImg: RoomV,
    hTitle: "Entering the facility",
    address:"https://www.youtube.com/embed/pSZRiS3NawM"

  },
  {
    videoImg: GameV,
    hTitle: "Starting the game",
    address:"https://www.youtube.com/embed/pSZRiS3NawM"

  },
  {
    videoImg: PlayerV,
    hTitle: "Game rules",
    address:"https://www.youtube.com/embed/pSZRiS3NawM"
  },

]


const Tutorials = () => {
  return (
    <div className='Row'>
      <div className='Col1'></div>
      <div className='Col2'>
        <div className='tutorial-box'>
        <div className='page-bg tutorials-h'>
          <div className='page-title '>
            Tutorials
          </div>
        </div>

          {TutorialsData.map((data, key) => {
            return (
              <div key={key}>
                <div className='square-box'></div>
                <div className='inner-page-title' >{data.hTitle}</div>
                <Video videoImg={data.videoImg} address={data.address} />
              </div>

            )
          })}
          <LetsPlyBox />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Tutorials;