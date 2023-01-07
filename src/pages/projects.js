import React from "react";
import Config from "../config";
import 'react-slideshow-image/dist/styles.css'
import '../App.css'
import Typography from "@mui/material/Typography";
import {Tab, Tabs, Sliders} from "./../components/TabSlides/TabSlides";
import {PageAccordion} from "./../components/Accordion";
import {ListPage} from "./../components/ListPage";

const ProjectsAccordionContent = (props) => {
    return (
        <p>
            <img style={{float: 'Right', padding: 1}} width="100%" src={props.elem.image}
                 alt={props.elem.name}/>
            <LinkIfAvailable link={props.elem.link}/>
            {props.elem.description.map((p) => (
                <p>{p}</p>
            ))}
        </p>
    )
}

const ProjectsAccordionHeader = (props) => {
    return (
        <Typography variant={"h5"}>{props.elem.name}</Typography>
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
        <ListPage
            MobileComponent={<PageAccordion HeaderComponent={ProjectsAccordionHeader} DetailsComponent={ProjectsAccordionContent} arr={Config.PROJECTS}/>}
            NonmobileComponent={<ProjectsSlideShow/>}
            header={"Projects"}
        />
    )
};

export default Projects;
