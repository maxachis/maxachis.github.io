import React from "react";
import Config from "../config";
import 'react-slideshow-image/dist/styles.css'
import '../App.css'
import Typography from "@mui/material/Typography";
import {TabSlides} from "./../components/TabSlides/TabSlides";
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

const ProjectsSlideshowTitle = ({elem}) => {
    return elem.name
}

const ProjectsSlideshowSlide = ({elem}) => {
    return (
        <div className="slide-container" style={{backgroundImage: "url(" + elem.image +")"}}>
            <div className="slideshow-content">
                <h2>{elem.name}</h2>
                <LinkIfAvailable link={elem.link}/>
                {elem.description.map((p) => (
                    <p>{p}</p>
                ))}
            </div>
        </div>
    )
}

const LinkIfAvailable = ({link}) => {
    return (<a href={link ? link : ""}>{link ? "Link" : ""}</a>)
};

const ProjectsSlideShow = () => {
    return (
        <TabSlides
            TitleComponent={ProjectsSlideshowTitle}
            SlideContent={ProjectsSlideshowSlide}
            arr={Config.PROJECTS}
        />
    )
}


const Projects = () => {
    return (
        <ListPage
            MobileComponent={<PageAccordion
                HeaderComponent={ProjectsAccordionHeader}
                DetailsComponent={ProjectsAccordionContent}
                arr={Config.PROJECTS}/>}
            NonmobileComponent={<ProjectsSlideShow/>}
            header={"Projects"}
        />
    )
};

export default Projects;
