import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUserName } from '../store/slices/userName.slice';
import icon from '../assets/icon.png'

const InputName = () => {

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const clickButton = () => {
        dispatch(changeUserName(inputValue));
        navigate("/pokedex");
    }

    return (
         
        <div className='input-name'>
            <img src={icon} alt="Pokedex icon" className='icon'/>
            <p className='input-name-title'>!Hola entrenador!</p>
            <p className='input-name-text'>Para poder comenzar, dame tu nombre</p>
            <div className='input-name-body'>
            <input type="text"
                    className='input-text-input' 
                    value={inputValue}
                    placeholder="Tu nombre"
                    onChange={e => setInputValue(e.target.value)}
            />
            <button onClick={clickButton} className='input-name-button'>Comenzar</button>
            </div>
            <div className='input-name-footer'>
                <div className='input-name-footer-circle'></div>
                <div className='input-name-footer-circle-mid'></div>
                <div className='input-name-footer-black'></div>
            </div>
        </div>
    );
};

export default InputName;