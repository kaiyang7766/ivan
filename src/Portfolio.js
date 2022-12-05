import React from 'react';
import './portfolio.scss';

const Portfolio = () =>{
    return (
        <>
        <div id="title" className="slide header">
            <img id="profilepic" src='/img/me.jpg' alt="Cannot view? Oh you just missed my handsome face"></img>
            <h1>Kai Yang</h1>
            <div className="table center">
            <div className="monitor-wrapper center">
              <div className="monitor center">
                <p className="text1 center">Data Enthusiast | Problem Solver | JavaScript Lover</p>
              </div>
            </div>
          </div>
        </div>

        <div id="slide1" className="slide">
            <div className="title">
                <h1>VFT Reader with Machine Learning</h1>
                <p>Singapore Eye Research Institute (SERI) processes thousands of <a href="/img/VFTReport.TIF">VFT Reports</a> everyday. It is crucial to automate the data extraction process. The VFT Reader consists of two main parts:</p>
                <li>pytesseract for paragraph recognition</li>
                <li>Convolutional Neural Network (CNN) for axis graph reading</li>
                <p>The Convolutional Neural Network has been trained with over 200,000 digits and symbols data, and is able to achieve 99.58% accuracy.</p>
                <p>Visit this <a href="https://github.com/kaiyang7766/VFTReader" target="_blank">link</a> to read the full strategies and documentations!</p>
            </div>
            <img id="projectpic" src="/img/SERI_logo.JPEG"/>
            
            {/* <img id="projectpic" src="https://lorempixel.com/640/480/abstract/4/"/> */}
        </div>

        <div id="slide2" className="slide">
            <div className="title">
                <h1>Underground Mobility Sensing Project using multi-sensory data with Machine Learning</h1>
                <p>Location information about commuter activities is vital for planning for travel disruptions and infrastructural development. However, GPS connectivity is lost when underground in our MRT networks.
                The Mobility Sensing Project aims to find innovative and novel ways to conduct location sensing using multi-sensory data collected in smartphones.</p>
                <p>Visit this <a href="https://github.com/kaiyang7766/UndergroundMobilitySensing" target="_blank">link</a> to find out more!</p>
                <p></p>
                <img id="projectpic" src="/img/LTA_logo.png"/>
            </div>
        </div>

        <div id="slide3" className="slide">
            <div className="title">
                <h1>Breadtalk Traceability Online System</h1>
                <p>Food Traceability System has always been a core in Food Safety measurements. In order to facilitate efficient tracking of raw materials back in my internship at BreadTalk, I created an online system using React.js for the production team to record down the daily usage of materials on the comfort of their phones.</p>
                <p><a href="https://github.com/kaiyang7766/breadtalkmockapp" target="_blank">Github code repository</a></p>
                <p><a href="https://focused-ardinghelli-c3b960.netlify.app/" target="_blank">Mock application interface (Only Traceability System is working)</a></p>
            </div>
            <img id="projectpic" src="/img/Breadtalk_logo.jpg"/>
        </div>

        <div id="slide4" className="slide header">
            <h1>Connect with me!</h1>
            <a href="https://github.com/kaiyang7766" target="_blank">
                <img id="connectpic" src="/img/Github_logo_white.png"/>
            </a>
            <a href="https://www.linkedin.com/in/ang-kai-yang/" target="_blank">
                <img id="connectpic" src="/img/LinkedIn_logo_white.png"/>
            </a>
        </div>
        </>
    )
};

export default Portfolio;