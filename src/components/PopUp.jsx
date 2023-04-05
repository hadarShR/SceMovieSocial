import React, { useEffect, useState } from "react";
import styled from "styled-components";
//import PopUp from './components/PopUp';


const PopUp=({ onClose }) => {


    const [showPopUp, setShowPopUp] = useState(false);
    //const showPopupHandler = () => setShowPopUp(true);
    useEffect(() => {
        const timer = setTimeout(() => {
        setShowPopUp(false);
    }, 1000);
    return () => clearTimeout(timer);
    }, [showPopUp]);
    let PopUp = null;
    if(showPopUp) {
        PopUp = <PopUp />;
    }

    return (
        <>
        <StyledPopUp>
        <div className='popup'>
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          
          <div className='content'>
          <h2>Welcome to SCE-MOVIE-SOCIAL!,</h2> 
          <p>Connect now and you can enjoy detailed and rich content of movies and series.</p>
          <p>And in addition, you will be able to meet other students with a film style like yours.</p> 
          </div>
          <div className='btnContainer'> 
          <button className='btnPrimary'>
              <span className='bold'>YES</span>, take me to Sign In
            </button>
            <button className='btnOutline'>
              <span className='bold'>NO</span>, thanks
            </button>
          </div>
          </div>
        </div>
          
        
          </StyledPopUp>
        </>
    );

};

const StyledPopUp = styled.section`

.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    max-width: 500px;
    width: 100%;
    z-index: 9999;
    text-align: center;
  }
  
  .modalRight {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .closeBtn {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    cursor: pointer;
    color: black;
  }
  
  .content {
    margin: 20px 0;
    color: black;
  }
  
  .btnContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  
  .btnPrimary {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin-right: 10px;
    cursor: pointer;
  }
  
  .btnPrimary:hover {
    background-color: #0069d9;
  }
  
  .btnOutline {
    background-color: transparent;
    color: #007bff;
    border: 1px solid #007bff;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  .btnOutline:hover {
    background-color: #f0f0f0;
  }
  `; 

export default PopUp;
