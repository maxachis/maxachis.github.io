
import React from 'react';
import HomepageSketch from '../components/HomepageSketch';

const Home = () => {

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'Center',
                height: '85vh',
                margin: 'auto',
            }}
        >
            <div className='front-of-sketch'>
                <div className='background-sketch'>
                    <HomepageSketch windowHeight={window.innerHeight}/>
                </div>

            </div>
        </div>
    );
};

export default Home;