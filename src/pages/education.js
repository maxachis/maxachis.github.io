import React from "react";
import Config from "../config";

const Education = () => {
    return (
        <div
            style={{
                // display: 'flex',
                justifyContent: 'Right',
                alignItems: 'Right',
                height: '100vh'
            }}
        >
            <h1>Education</h1>
            <p>{Config.PAGE_SUMMARY.Education}</p>
            {Config.EDUCATION.map((education) => (
                <h1>{education.Degree} - {education.University} - {education.GPA}</h1>
            ))}
        </div>
    );
};

export default Education;
