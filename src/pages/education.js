import React, { useMemo } from "react";
import Config from "../config";
import styled from 'styled-components';
import {Tab, Tabs, Sliders, TabSlides} from "./../components/TabSlides/TabSlides";
import {Table} from "./../components/Table"
import {PageAccordion} from "./../components/Accordion";
import {ListPage} from "./../components/ListPage";

const Education = () => {
    return (
        <ListPage
            MobileComponent={<PageAccordion
                HeaderComponent={EduSlideshowTitle}
                DetailsComponent={EduAccordionTabSlides}
                arr={Config.EDUCATION}/>}
            NonmobileComponent={<EduSlideShow/>}
            header={"Education"}
        />
    );
};

const EduSlideshowTitle = ({elem}) => {
    return elem.Degree + " (GPA: " + elem.GPA + ")"
}

const EduTable = ({elem}) => {
    return (
        <div className="table-container">
            <div className="table-div table-fix-head">
                <EduTables data={elem.Classes}/>
            </div>
        </div>
    )
}

const EduSlideContent = ({elem}) => {
    return (
        <div className={"edu-slide-content"}>
            <div className={"text-block"}>
                {elem.Description.map((p) => (
                    <p>{p}</p>
                ))}
            </div>
        </div>
    )
}

const EduAccordionTabSlides = ({elem}) => {
    const [focusedIdx, setFocusedIdx] = React.useState(0);

    return (
        <div className={"edu-tabslides-container"}>
            <Tabs focusedIdx={focusedIdx} onChange={setFocusedIdx}>
                <Tab title={"Courses"}/>
                <Tab title={"Overview"}/>
            </Tabs>
            <hr/>
            <Sliders focusedIdx={focusedIdx}>
                <div className={"slide-container"}>
                    <EduTable elem={elem}/>
                </div>
                <div className={"slide-container"}>
                    <EduSlideContent elem={elem}/>
                </div>
            </Sliders>
        </div>
    )

}

const EduSlideshowSlide = ({elem}) => {
    return (
        <div className="slide-container">
            <div className="education-slide-header">
                <h2>{elem.Degree} - GPA: {elem.GPA}</h2>
            </div>
            <div className="edu-table-content-container">
                <EduTable elem={elem}/>
                <EduSlideContent elem={elem}/>
            </div>
        </div>
    )
}

const EduSlideShow = () => {
    return (
        <TabSlides
            TitleComponent={EduSlideshowTitle}
            SlideContent={EduSlideshowSlide}
            arr={Config.EDUCATION}
        />
    )
}

const GradeSortFactory = () => {
    const GRADE = {"C-": 1, "C": 2, "C+": 3, "B-": 4, "B": 5, "B+": 6, "A-": 7, "A": 8, "A+": 9, "S": 10}
    const sortFunc = (a, b) => {
        return GRADE[a.values.Grade] < GRADE[b.values.Grade] ? -1: 1;
    }
    return sortFunc;
}

const TermSortFactory = () => {
    const TERM = {"Spring": 0, "Summer": 1, "Fall": 2}
    const sortFunc = (a, b) => {
        let [aYear, aTerm] = a.values.Semester.split(" ");
        let [bYear, bTerm] = b.values.Semester.split(" ");
        const aVal = parseInt(aYear) + parseInt(TERM[aTerm])
        const bVal = parseInt(bYear) + parseInt(TERM[bTerm])
        return aVal < bVal ? -1 : 1;
    };
    return sortFunc;
}

const EduTables = (props) => {
    var columnHeads = []
    for (const [key, ] of Object.entries(props.data[0])) {
        columnHeads.push({
            Header: key,
            accessor: key,
        });
    }

    const termSort = useMemo(TermSortFactory);
    const gradeSort = useMemo(GradeSortFactory);
    columnHeads.map(column => {
        if (column.Header === 'Semester') column.sortType = termSort;
        if (column.Header === 'Grade') column.sortType = gradeSort;
    });
    const columns = React.useMemo(
        () => columnHeads,
        []
    )
    return (
        <Styles>
            <Table columns={columns} data={props.data} />
        </Styles>
    )
}


const Styles = styled.div`
  padding: 0 1rem 0 1rem;

  table {
    border-spacing: 0;
    border-collapse: separate;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    
    tr {
      border: 1px solid black;
      border-collapse: separate
    }
    
    thead {
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      border-collapse: separate;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-collapse: separate;

      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

export default Education;
