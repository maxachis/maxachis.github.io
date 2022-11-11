import { useState } from "react";

const PomBox  = (props) => {
    const heads =[];
    for (let i = 0; i < 15; i++) {
        heads.push(<th>BITCHES</th>)
    };
    const headrow = <tr>{heads}</tr>

    const bitches = [];
    for (let i = 0; i < 15; i++) {
        bitches.push(<td>HELLO BITCHES</td>)
    };
    const bitchrow = <tr>{bitches}</tr>
    const bitchrows = [];
    console.log(props.numBitchRows);
    for (let i = 0; i < props.numBitchRows; i++) {
        bitchrows.push(bitchrow);
    }
    return (
        <table>{headrow}{bitchrows}</table>
    );
};

export default PomBox;