import styled from "styled-components";
import {AccordionDetails, AccordionSummary} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

export function PageAccordion({HeaderComponent, DetailsComponent, arr}) {
    return (
        arr.map((project) => (
            <CustomAccordion>
                <CustomAccordionSummary classes="acc-header" expandIcon={<ExpandMoreIcon/>}>
                    <HeaderComponent elem={project}/>
                </CustomAccordionSummary>
                <CustomAccordionDetails>
                    <DetailsComponent elem={project}/>
                </CustomAccordionDetails>
            </CustomAccordion>
        ))
    )
}

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