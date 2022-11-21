
import React from 'react';
import Accordion from '@mui/material/Accordion';
import {AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Sketch from 'react-p5'
import HomepageSketch from '../components/HomepageSketch';

const Home = () => {

    return (
        <div
            style={{
                display: 'flex',
                // justifyContent: 'Left',
                alignItems: 'Center',
                // height: '100vh'
                margin: 'auto',
                width: '50%',
            }}
        >
            <div classname='front-of-sketch'>
                <div className='background-sketch'>
                    <HomepageSketch />
                </div>
                {/*<h1>Hello Gentlemen</h1>*/}

            </div>
        </div>
    );
};

export default Home;