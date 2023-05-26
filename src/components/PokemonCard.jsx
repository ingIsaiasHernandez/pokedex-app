import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PokemonCard = ({url}) => {

    const [pokemon,setPokemon] =useState({});
    const navigate = useNavigate();
    const [color, setColor] = useState({});
    const randomColor = Math.floor(Math.random() * 7) + 1
    const [index, setIndex] = useState(randomColor)

    const getColor = () => {
        if (randomColor !== 8) {
            setIndex(randomColor);
        }
    }

    useEffect(()=>{
        getColor();
        axios
            .get(url)
            .then(res => {setPokemon(res.data)})
            axios
            .get(`https://pokeapi.co/api/v2/pokemon-color/${index}`)
            .then(res => setColor(res.data));
            
    },[]);

    return (
        <div className='pokemon-card' style={{background: color.name}} onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
                <p className='pokemon-card-id'>#{pokemon.id}</p>
                <img className='pokemon-card-img' src={pokemon.sprites?.other.dream_world.front_default} alt="" />
                
                <div className='pokemon-box'>

                <p className='pokemon-card-name'>{pokemon.name}</p>
                <p className='pokemon-card-subtitle'>Type:</p>
                <p className='pokemon-card-subtitle'>{pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name}</p> 

                    <div className='line'></div>
                        <div className='stats'>
                            <div className='stats-item'>
                                <p className='stats-item-title'>HP</p>
                                <p className='stats-item-value'>{pokemon.stats?.[0].base_stat}</p>
                            </div>
                            <div className='stats-item'>
                                <p className='stats-item-title'>ATAQUE</p>
                                <p className='stats-item-value'>{pokemon.stats?.[1].base_stat}</p>
                            </div>
                            <div className='stats-item'>
                                <p className='stats-item-title'>DEFENSA</p>
                                <p className='stats-item-value'>{pokemon.stats?.[2].base_stat}</p>
                            </div>
                            <div className='stats-item'>
                                <p className='stats-item-title'>VELOCIDAD</p>
                                <p className='stats-item-value'>{pokemon.stats?.[5].base_stat}</p>
                            </div>
                        </div>
                </div>
        </div>
    );
};

export default PokemonCard;