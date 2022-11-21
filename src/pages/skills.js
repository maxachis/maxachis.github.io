import React from "react";
import Config from "../config";
import Accordion from "@mui/material/Accordion";
import {AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

function SkillsAccordion(props) {
    return (
        <div>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant={"h5"}>{props.skill.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant={"h6"}>Proficiency: {props.skill.experience_level}</Typography>
                    <Typography variant={"h6"}>Years of Experience: {props.skill.years_of_experience}</Typography>
                    <p><img style={{float: 'Right', padding: 1}} height={"100"} src={props.skill.logo} alt={props.skill.name}></img>
                        {props.skill.description}
                    </p>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}


const Skills = () => {
    return (
        <div
            style={{
                // display: 'flex',
                justifyContent: 'Right',
                alignItems: 'Right',
                height: '100vh'
            }}
        >
            <h1>Skills</h1>
            <p>{Config.PAGE_SUMMARY.Skills}</p>
            {Config.SKILLS.map((skill) => (
                <SkillsAccordion skill={skill}/>
            ))}
        </div>
    );
};

export default Skills;
