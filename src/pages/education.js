import React, { useMemo } from "react";
import Config from "../config";
import styled from 'styled-components';
import { useTable, useSortBy, useFilters } from 'react-table';
import {Tab, Tabs, Sliders} from "./../components/TabSlides/TabSlides";


function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
        },
        useFilters,
        useSortBy)

    // Render the UI for your table
    return (
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps)}
                                className={
                                    column.isSorted ? column.isSortedDesc ? "sort-desc" : "sort-asc": "sort-default"
                                }

                            >{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>

)
}



const Education = () => {
    return (
        <div className={"education-container"}>
            <h1>Education</h1>
            <p>{Config.PAGE_SUMMARY.Education}</p>
            <EduSlideShow/>
        </div>
    );
};

const EduSlideShow = () => {

    const [focusedIdx, setFocusedIdx] = React.useState(0);
    return (
        <div>
            <Tabs focusedIdx={focusedIdx} onChange={setFocusedIdx}>
                {Config.EDUCATION.map((entry, index) => (
                    <Tab title={entry.Degree}/>
                ))}
            </Tabs>
            <hr/>
            <Sliders focusedIdx={focusedIdx}>
                {Config.EDUCATION.map((entry, index) => (
                    <div className="slide-container">
                        <div className="slideshow-content">
                            <h2>{entry.Degree}</h2>
                        </div>
                        <div className="edu-table-content-container">
                            <div className="table-div">
                                <EduTables data={entry.Classes}/>
                            </div>
                            <div className={"edu-slide-content"}>
                                <p>LOREM IPSuM</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Sliders>
        </div>
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
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

export default Education;
