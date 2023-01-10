import React from "react";
import Config from "../config";
import Typography from "@mui/material/Typography";
import {PageAccordion} from "./../components/Accordion";
import {ListPage} from "./../components/ListPage";
import {TabSlides} from "./../components/TabSlides/TabSlides";

const Skills = () => {
    return (
        <ListPage
            MobileComponent={<PageAccordion
                HeaderComponent={SkillAccordionHeader}
                DetailsComponent={SkillAccordionContent}
                arr={Config.SKILLS}/>}
            NonmobileComponent={<SkillSlideShow/>}
            header={"Skills"}
        />
    );
};

const SkillSlideShow = () => {
    return (
        <TabSlides
            TitleComponent={SkillSlideshowTitle}
            SlideContent={SkillSlideshowSlide}
            arr={Config.SKILLS}
        />
    )
}

const SkillAccordionContent = (props) => {
    return (
        <>
            <Typography variant={"h6"}>Proficiency: {props.elem.experience_level}</Typography>
            <Typography variant={"h6"}>Years of Experience: {props.elem.years_of_experience}</Typography>
            <div>
                {/*<img style={{float: 'Right', padding: 1}} height={"100"} src={props.elem.logo} alt={props.elem.name}></img>*/}
                {props.elem.description.map((p) => (
                    <p>{p}</p>
                ))}
            </div>
        </>
    )
}

const SkillAccordionHeader = (props) => {
    return (
        <div style={{width:'100%'}}>
            <div style={{float: 'Left', padding: 0}}>
                <Typography variant={"h5"}>{props.elem.name}</Typography>
            </div>
            <div style={{float: 'Right', padding: 0}}>
                <img style={{float: 'Right', padding: 0}} height={"40"} src={props.elem.logo} alt={props.elem.name}></img>
            </div>
        </div>

    )
}

const SkillSlideshowTitle = ({elem}) => {
    return elem.name
}

const SkillSlideshowSlide = ({elem}) => {
    return (
        <div className="slide-container" style={{backgroundImage: "url(" + elem.image +")"}}>
            <div className={"text-block"}>
                <Typography variant={"h6"}>Proficiency: {elem.experience_level}</Typography>
                <Typography variant={"h6"}>Years of Experience: {elem.years_of_experience}</Typography>
                <img style={{float: 'Right', padding: 1}} height={"100"} src={elem.logo} alt={elem.name}></img>
                {elem.description.map((p) => (
                    <p>{p}</p>
                ))}
            </div>
        </div>
    )
}



export default Skills;
