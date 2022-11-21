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
        </div>
    );
};

export default Education;
