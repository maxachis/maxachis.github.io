import React from "react";
import Accordion from '@mui/material/Accordion';
import {AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Config from "./../config.js";

function JobAccordion(props) {
    return (
        <div>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant={"h5"}>{props.job.title} ({props.job.start_date} - {props.job.end_date})</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <p><img style={{float: 'Right', padding: 1}} height={"100"} src={props.job.logo}></img>
                        {props.job.content}
                    </p>
                </AccordionDetails>
            </Accordion>
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
            {Config.WORK.map((job) => (
                    <JobAccordion
                        job={job}
                    // title={`${job.title}, ${job.organization}` }
                    // logo={`${job.logo}`}
                    // content={job.content}
                    />
                ))}
        </div>
    );
};

export default Work;
