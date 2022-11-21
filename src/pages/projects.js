import React from "react";
import Config from "../config";

const Projects = () => {
    return (
        <div
            style={{
                // display: 'flow',
                justifyContent: 'Right',
                alignItems: 'Right',
                height: '100vh'
            }}
        >
            <div>
                <h1>Projects</h1>
            </div>
            <div>
                <p>{Config.PAGE_SUMMARY.Projects}</p>
            </div>
        </div>
    );
};

export default Projects;
