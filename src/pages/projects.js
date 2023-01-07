import React from "react";
import Config from "../config";
import 'react-slideshow-image/dist/styles.css'
import '../App.css'
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import {AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import {Tab, Tabs, Sliders} from "./../components/TabSlides/TabSlides";

const ProjectsAccordionContent = (props) => {
    return (
        <p>
            <img style={{float: 'Right', padding: 1}} width="100%" src={props.project.image}
                 alt={props.project.name}/>
            {props.project.description.map((p) => (
                <p>{p}</p>
            ))}
        </p>
    )
}

const ProjectsAccordion = (prop) => {
    return (
        prop.projects.map((project) => (
            <CustomAccordion>
                <CustomAccordionSummary classes="acc-header" expandIcon={<ExpandMoreIcon/>}>
                    <Typography variant={"h5"}>{project.name}</Typography>
                </CustomAccordionSummary>
                <CustomAccordionDetails>
                    <ProjectsAccordionContent project={project}/>
                </CustomAccordionDetails>
            </CustomAccordion>
        ))
    )
}

const LinkIfAvailable = ({link}) => {
    return (<a href={link ? link : ""}>{link ? "Link" : ""}</a>)
};

const ProjectsSlideShow = () => {

    const [focusedIdx, setFocusedIdx] = React.useState(0);
    return (
        <div>
            <Tabs focusedIdx={focusedIdx} onChange={setFocusedIdx}>
                {Config.PROJECTS.map((entry, index) => (
                    <Tab title={entry.name}/>
                ))}
            </Tabs>
            <hr/>
            <Sliders focusedIdx={focusedIdx}>
                {Config.PROJECTS.map((entry, index) => (
                    <div className="slide-container" style={{backgroundImage: "url(" + entry.image +")"}}>
                        <div className="slideshow-content">
                            <h2>{entry.name}</h2>
                            <LinkIfAvailable link={entry.link}/>
                            {entry.description.map((p) => (
                                <p>{p}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </Sliders>
    </div>
    )
}


const Projects = () => {
    return (
        <div className={"page-container"}>
            <h1 className={"page-header"}>Projects</h1>
            <div className="page-mobile">
                <ProjectsAccordion projects={Config.PROJECTS}/>
            </div>
            <div className="page-nonmobile">
                <ProjectsSlideShow/>
            </div>
        </div>
    )};



const CustomAccordionSummary = styled(AccordionSummary)`
  background-color: #d1dede;
  border: black solid 1px;
  z-index: 0;
`;

const CustomAccordionDetails = styled(AccordionDetails)`
  padding-bottom: 20px;
`

const CustomAccordion = styled(Accordion)`
  z-index: 0;
`;

export default Projects;
