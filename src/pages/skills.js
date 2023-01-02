import React from "react";
import Config from "../config";
import Accordion from "@mui/material/Accordion";
import { styled } from '@mui/material/styles';
import {AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

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

function SkillsAccordion(props) {
    return (
        <div>
            <CustomAccordion>
                <CustomAccordionSummary classes="acc-header" expandIcon={<ExpandMoreIcon />}>
                    <Typography variant={"h5"}>{props.skill.name}</Typography>
                </CustomAccordionSummary>
                <CustomAccordionDetails>
                    <Typography variant={"h6"}>Proficiency: {props.skill.experience_level}</Typography>
                    <Typography variant={"h6"}>Years of Experience: {props.skill.years_of_experience}</Typography>
                    <p>
                        <img style={{float: 'Right', padding: 1}} height={"100"} src={props.skill.logo} alt={props.skill.name}></img>
                        {props.skill.description}
                    </p>
                </CustomAccordionDetails>
            </CustomAccordion>
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
