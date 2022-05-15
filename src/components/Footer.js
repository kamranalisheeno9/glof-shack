import React,{useState} from 'react';

const Footer = (props) => {
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
      };
      const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };
      
      window.addEventListener('scroll', toggleVisible);
    
    
    return (
        <>
        <div className='Footer-body'>
            <div className='Footer-text-1' >
                290 Bremner Blvd, Toronto, ON M5V 3L9
            </div>
            <div className='Footer-text-2' >
                Terms & Conditions  |  Privacy  |  Waiver

            </div>

            <div className='Footer-text-3' >
                © 2022 by Golf Shack
            </div>

        </div>
        <div onClick={scrollToTop}  className='back-btn'>
        Back to top
</div>
        </>
    );
}

export default Footer;