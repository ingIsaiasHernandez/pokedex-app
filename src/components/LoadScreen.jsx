import React from 'react';
import loading from '../assets/loading.gif'
import loadingText from '../assets/loadingtext.gif'

const LoadScreen = () => {
    return (
        <div className='loading-screen'>
            <img src={loading} alt="" />
            <img src={loadingText} alt="" className='loading-text'/>
        </div>
    );
};

export default LoadScreen;