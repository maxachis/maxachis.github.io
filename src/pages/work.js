import React from "react";
import Accordion from '@mui/material/Accordion';
import {AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Config from "./../config.js";
import {styled} from "@mui/material/styles";

const CustomAccordionSummary = styled(AccordionSummary)`
  background-color: #d1dede;
  border: black solid 1px;
  z-index: 0;
`;

const CustomAccordion = styled(Accordion)`
  z-index: 0;
`;


function JobAccordion(props) {
    return (
        <div>

            <CustomAccordion>
                <CustomAccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant={"h5"}>{props.job.title} ({props.job.start_date} - {props.job.end_date})</Typography>
                </CustomAccordionSummary>
                <AccordionDetails>
                    <p><img style={{float: 'Right', padding: 1}} height={"100"} src={props.job.logo} alt="Company Logo"></img>
                        {props.job.content}
                    </p>
                </AccordionDetails>
            </CustomAccordion>
        </div>
    )
}

const Work = () => {
    return (
        <div
            style={{
                // display: 'flex',
                justifyContent: 'Right',
                alignItems: 'Right',
                height: '100vh'
            }}
        >
            <h1>Work</h1>
            <p>{Config.PAGE_SUMMARY.Work}</p>
            {Config.WORK.map((job) => (
                    <JobAccordion job={job}/>
                ))}
        </div>
    );
};

export default Work;
