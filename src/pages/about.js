import React from 'react';
import Config from "./../config.js";


const About = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'Left',
                alignItems: 'Left',
                height: '100vh',
                overflow: 'auto'
            }}
        >
            <div>
                <h1>{Config.ABOUT.name}</h1>
                <h4>{Config.ABOUT.description_short}</h4>
            </div>
            <div>
                <img src={Config.ABOUT.profile_pic} alt={"This is me! Hello!"} height={"300"}></img>
            </div>
            <div>
                <p>{Config.ABOUT.description_long}</p>
            </div>
        </div>
    );
};

export default About;
