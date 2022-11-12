
import React from 'react';
import Accordion from '@mui/material/Accordion';
import {AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';


const Home = () => {
    return (
        <div
            style={{
                // display: 'flex',
                justifyContent: 'Left',
                alignItems: 'Left',
                height: '100vh'
            }}
        >
            <h1>Hello Gentlemen</h1>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant={"h5"}>BEEP BOOP</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    BEEP BOOP BIP BOP
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Home;