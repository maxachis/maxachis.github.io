import React from 'react';
import Config from "./../config.js";
import { useMediaQuery } from 'react-responsive'

const aboutStyle = {
    backgroundImage: "url(" + Config.ABOUT.profile_pic + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
    maxWidth: "800px",
    margin: "auto"
}

const AboutContainer = ({children}) => {
    const isMobile = useMediaQuery({maxWidth: 768});
    if (isMobile) {
        return (
            <div>
                <img className="about-pic-mobile" src={Config.ABOUT.profile_pic}/>
                {children}
            </div>
        )
    } else {
        return (
            <div className="about-container" style={aboutStyle}>
                {children}
            </div>
        )
    }

}

const About = () => {
    return (
            <AboutContainer>
                <div className="about-content-pad"></div>
                <div className="about-content">
                    <h1>{Config.ABOUT.name}</h1>
                    <h4>{Config.ABOUT.description_short}</h4>
                    <div>
                        {Config.ABOUT.description_long.map((paragraph) => (
                            <p>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </AboutContainer>
    );
};

export default About;
