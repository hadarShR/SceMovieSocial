import React from 'react'
import styled from "styled-components";
import BackgroundImage from "../assets/pngwing.com.png";

const AboutUs=()=> {
  return (
    <>
      
      <Styledaboutus>
        <h1>About Us</h1>
        <section className="about">
          <div className="row">
            <div className="column">
              <div
                className="about-img"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
              ></div>
            </div>
            <div className="column">
              <div className="tabs"></div>

              <div className="tab-content">
                {/*abouuttt*/}
                <div className="content">
                  <h2>Our Story</h2>
                  <p>
                    Our development team is called the "M.V" team, a team made
                    up of two programmers who study at Sami Shamoon College. Our
                    names are Vova Davidzon and Michael Ilkanayev. We live in
                    israel.
                  </p>
                </div>
                {/*skills content */}

                <div className="content ">
                  <h2>Skills</h2>
                  <p>The skills we had to learn to make this site.</p>
                  <div className="skills-row">
                    <div className="skills-column">
                      <div className="progress-wrap">
                        <h3>Developer</h3>
                        <div className="progress">
                          <div className="progress-bar Developer">
                            <span>80%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="skills-column">
                      <div className="progress-wrap">
                        <h3>react</h3>
                        <div className="progress">
                          <div className="progress-bar React">
                            <span>100%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="skills-column">
                      <div className="progress-wrap">
                        <h3>Designer</h3>
                        <div className="progress">
                          <div className="progress-bar Designer">
                            <span>90%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="skills-column">
                      <div className="progress-wrap">
                        <h3>mvc</h3>
                        <div className="progress">
                          <div className="progress-bar mvc">
                            <span>100%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Styledaboutus>
      
    </>
  )
}

// Styles
const Styledaboutus = styled.div`
  h1 {
    margin-top: 1rem;
    font-size: 70px;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  .about {
    padding: 5rem 3rem 3rem 3rem;
    background: #f8f8f8;
  }
  .row {
    display: flex;
    justify-content: space-around;
  }
  .row .column {
    width: 40%;
  }
  .column .tabs {
    display: flex;
  }
  .single-tab {
    background: white;
    margin-right: 10px;
    cursor: pointer;
  }
  .single-tab h2 {
    display: block;
    padding: 10px 16px;
    border-radius: 4px;
    color: #3c3c3c;
    font-size: 14px;
    font-weight: 600;
  }
  .about-img {
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 90%;
  }
  .content {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  .content h2 {
    font-size: 40px;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 1rem;
  }
  .content p {
    padding-bottom: 1rem;
    font-size: 16px;
    line-height: 1.8;
    font-weight: 400;
    color: #999;
  }
  .single-content h3 {
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  .skills-row {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .skills-column {
    margin-bottom: 30px;
    margin-right: 20px;
  }
  .progress-wrap h3 {
    font-size: 14px !important;
    margin-bottom: 10px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .progress {
    height: 8px;
    background: rgba(0, 0, 0, 0.05);
    overflow: visible;
  }
  .progress-bar {
    width: 80%;
    height: 8px;
    background: #18dcff;
    line-height: 1.2;
    position: relative;
    border-radius: 2px;
  }
  .mvc {
    width: 100%;
  }
  .Designer {
    width: 90%;
  }
  .React {
    width: 100%;
  }
  .Developer {
    width: 80%;
  }
  .progress-bar span {
    position: absolute;
    top: -30px;
    right: 0;
    font-size: 16px;
    font-weight: 400;
    color: #18dcff;
  }
  .exp-column h3 {
    margin-bottom: 10px;
  }
  .exp-column span {
    font-weight: 500;
    color: #18dcff;
  }
  .exp-column p {
    margin-top: 10px;
  }
  @media screen and (max-width: 768px) {
    .about {
      padding: 2rem 1rem 3rem 1rem;
    }
    .row {
      display: flex;
      flex-direction: column;
    }
    .about-img {
      height: 500px;
    }
    .row .column {
      width: 100%;
    }
    .tabs {
      padding-top: 3rem;
    }
    .skills-row {
      grid-template-columns: 1fr;
    }
  }
`;

export default AboutUs
