import React from "react";
import Config from "../config";
import Typography from "@mui/material/Typography";
import {PageAccordion} from "./../components/Accordion";

const SkillAccordionContent = (props) => {
    return (
        <>
            <Typography variant={"h6"}>Proficiency: {props.elem.experience_level}</Typography>
            <Typography variant={"h6"}>Years of Experience: {props.elem.years_of_experience}</Typography>
            <p>
                <img style={{float: 'Right', padding: 1}} height={"100"} src={props.elem.logo} alt={props.elem.name}></img>
                {props.elem.description.map((p) => (
                    <p>{p}</p>
                ))}
            </p>
        </>
    )
}

const SkillAccordionHeader = (props) => {
    return (
            <Typography variant={"h5"}>{props.elem.name}</Typography>
    )
}

const Skills = () => {
    return (
        <div
            style={{
                justifyContent: 'Right',
                alignItems: 'Right',
                height: '100vh'
            }}
        >
            <h1>Skills</h1>
            <p>{Config.PAGE_SUMMARY.Skills}</p>
            {<PageAccordion HeaderComponent={SkillAccordionHeader} DetailsComponent={SkillAccordionContent} arr={Config.SKILLS}/>}
        </div>
    );
};

export default Skills;
