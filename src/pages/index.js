
import React from 'react';
import HomepageSketch from '../components/HomepageSketch';

function Comp1() {
    return (
        <p>P1</p>
    )
}

function Comp2({text1, text2}) {
    // console.log(text)
    return (
        <p>{text1} {text2}</p>
    )
}

function Comp3({MyComp, text1, text2}) {
    return (
        <MyComp text1={text1} text2={text2}/>
    )
}

const Home = () => {

    return (
        <div
            style={{
                display: 'flex',
                // justifyContent: 'Left',
                alignItems: 'Center',
                height: '85vh',
                margin: 'auto',
                // width: '50%',
            }}
        >
            <div>
                <Comp1/>
                <Comp2 text1={"P2"} text2={"P3"}/>
                <Comp3 MyComp={Comp2} text1={"P2"} text2={"P3"}/>
                {/*<p>P2</p>*/}
            </div>
            <div className='front-of-sketch'>
                <div className='background-sketch'>
                    <HomepageSketch windowHeight={window.innerHeight}/>
                </div>

            </div>
        </div>
    );
};

export default Home;