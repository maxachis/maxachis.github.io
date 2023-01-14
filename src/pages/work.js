import React from "react";
import Typography from '@mui/material/Typography';
import Config from "./../config.js";
import {PageAccordion} from "./../components/Accordion";
import {TabSlides} from "./../components/TabSlides/TabSlides";
import {ListPage} from "./../components/ListPage";

const JobAccordionContent = ({elem}) => {
    return (
        <div className={"text-block"}>
            <img className="work-logo"  src={elem.logo} alt="Company Logo"></img>
            <Typography variant={"h6"}>{elem.summary}</Typography>
            {elem.content.map((p) => (
                <p>{p}</p>
            ))}
        </div>
    )
}

const JobAccordionHeader = ({elem}) => {
    return (
        <Typography variant={"h5"}>{elem.title} ({elem.start_date} - {elem.end_date})</Typography>
    )
}

const JobSlideshowTitle = ({elem}) => {
    return (
        <div>
            {elem.title}
            <br/>
            {elem.organization}
            <br/>
            ({elem.start_date} - {elem.end_date})
        </div>
    )
}

const JobSlideshowSlide = ({elem}) => {
    return (
        <div className="slide-container" style={{backgroundImage: "url(" + elem.image +")"}}>
            <JobAccordionContent elem={elem}/>
        </div>
    )
}

const WorkSlideShow = () => {
    return (
        <TabSlides
            TitleComponent={JobSlideshowTitle}
            SlideContent={JobSlideshowSlide}
            arr={Config.WORK}
        />
    )
}

const Work = () => {
    return (
        <ListPage
            MobileComponent={<PageAccordion
                HeaderComponent={JobAccordionHeader}
                DetailsComponent={JobAccordionContent}
                arr={Config.WORK}/>}
            NonmobileComponent={<WorkSlideShow/>}
            header={"Work"}
        />
    );
};

export default Work;
