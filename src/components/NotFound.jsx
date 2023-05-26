import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();

    const back = () => {
        navigate("/");
    }

    return (
        <div className='error-screen'>
            <h1>ups algo salió mal. intentalo de nuevo...</h1>
            <button className='error-text' onClick={back}>Regresar</button>
        </div>
    );
};

export default NotFound;