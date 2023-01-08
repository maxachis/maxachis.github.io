import React from "react";
import Typography from '@mui/material/Typography';
import Config from "./../config.js";
import {PageAccordion} from "./../components/Accordion";


const JobAccordionContent = ({elem}) => {
    return (
        <p>
            <img className="work-logo"  src={elem.logo} alt="Company Logo"></img>
            {elem.content}
        </p>
    )
}

const JobAccordionHeader = ({elem}) => {
    return (
        <Typography variant={"h5"}>{elem.title} ({elem.start_date} - {elem.end_date})</Typography>
    )
}

const Work = () => {
    return (
        <div
            style={{
                justifyContent: 'Right',
                alignItems: 'Right',
                height: '100vh'
            }}
        >
            <h1>Work</h1>
            <p>{Config.PAGE_SUMMARY.Work}</p>
            <PageAccordion HeaderComponent={JobAccordionHeader} DetailsComponent={JobAccordionContent} arr={Config.WORK}/>
        </div>
    );
};

export default Work;
