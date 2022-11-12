import React from 'react';
// import pic from "../../public/assets/profile_pic.png"

const About = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'Left',
                alignItems: 'Left',
                height: '100vh'
            }}
        >
            <h1>Jason Portfolio</h1>
            {/*<img src={pic} alt={"This is me! Hello!"} height={"300"}></img>*/}
            <p>Professional Portfoliologist</p>
        </div>
    );
};

export default About;
