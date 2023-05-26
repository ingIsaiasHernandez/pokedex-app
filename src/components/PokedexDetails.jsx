import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import icon from '../assets/icon.png'

const PokedexDetail = () => {

    const { id } = useParams();
    const [pokemon,setPokemon] = useState({});
    const navigate = useNavigate();
    const moves = [];



    useEffect(()=>{
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
            .catch(() => navigate("/notfound"))
    },[])

    const hp = (pokemon.stats?.[0].base_stat * 100) / 150;
    const atack = (pokemon.stats?.[1].base_stat * 100) / 150;
    const defense = (pokemon.stats?.[2].base_stat * 100) / 150;
    const speed = (pokemon.stats?.[5].base_stat * 100) / 150;

    const home = () => {
        navigate("/pokedex")
    }

    return (
        <div className='pokedex'>
            <div className='pokedex-header'>
                <img src={icon} onClick={home} alt="" className='pokedex-icon-header'/>
                <div className='pokedex-header-black'></div>
                <div className='input-name-pokedex-circle'></div>
                <div className='input-name-pokedex-circle-mid'></div>
            </div>
            <div className='pokedex-details-body'>
                <div className='pokemon-details'>
                <div className='pokemon-detail-bar'><img className='pokemon-img' src={pokemon.sprites?.other.dream_world.front_default} alt="" /></div>
                    <p className='pokemon-detail-id'> # {pokemon.id}</p>
                    <h2 className='pokemon-detail-name'>{pokemon.name}</h2>
                    <div className='pokemon-detail-basic-stats'>
                        <p className='basic-stats-title'>Peso</p>
                        <p className='basic-stats-title'>Altura</p>
                        <p className='basic-stats-stat'>{pokemon.weight}</p>
                        <p className='basic-stats-stat'>{pokemon.height}</p>
                    </div>
                    <div className='pokemon-type-skills'>
                        <h3>Tipo</h3>
                        <h3>Habilidades</h3>
                    </div >
                    <div className='pokemon-type-skills-texts'>
                        <p className='type-1'>{pokemon.types?.[0].type.name}</p>
                        <p className='type-2'>{pokemon.types?.[1]?.type.name}</p>
                        <p className='ability'>{pokemon.abilities?.[0].ability.name}</p>
                        <p className='ability'>{pokemon.abilities?.[1].ability.name}</p>
                    </div>
                    <div className='stats-text-title'>
                        <p>Stats</p>
                    </div>
                    <div className='stats-item'>
                         <div className='stats-title'>
                            <p>HP</p>
                            <p>{pokemon.stats?.[0].base_stat} / 150</p>
                        </div>
                        <div className='progress'>
                            <div className='progress-content' style={{width: `${hp}%`}}>
                            </div>
                        </div>
                    </div>
                    <div className='stats-item'>
                        <div className='stats-title'>
                            <p>Ataque</p>
                            <p>{pokemon.stats?.[1].base_stat} / 150</p>
                        </div>
                        <div className='progress'>
                            <div className='progress-content' style={{width: `${atack}%`}}>
                        </div>
                        </div>
                    </div>
                    <div className='stats-item'>
                        <div className='stats-title'>
                            <p>Defensa</p>
                            <p>{pokemon.stats?.[2].base_stat} / 150</p>
                        </div>
                        <div className='progress'>
                            <div className='progress-content' style={{width: `${defense}%`}}>
                        </div>
                        </div>
                    </div>
                    <div className='stats-item'>
                        <div className='stats-title'>
                            <p>Velocidad</p>
                            <p>{pokemon.stats?.[5].base_stat} / 150</p>
                        </div>
                        <div className='progress'>
                            <div className='progress-content' style={{width: `${speed}%`}}>
                        </div>
                        </div>
                    </div>
                </div>
                
                <div className='moves'>
                <h3 className='moves-title'>Movements</h3>
                    {
                        pokemon.moves?.map(move => (
                            <p className='move-item' key={move.move.url}>{move.move.name}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PokedexDetail;