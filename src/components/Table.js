import {useFilters, useSortBy, useTable} from "react-table";
import React from "react";

export function Table({ columns, data }) {
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
            <colgroup>
                <col span="1" className={"course-col"}/>
                <col span="1" className={"semester-col"}/>
                <col span="1" className={"grade-col"}/>
            </colgroup>
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