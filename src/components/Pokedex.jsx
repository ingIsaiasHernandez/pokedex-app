import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import icon from '../assets/icon.png'

const Pokedex = () => {

    const userName = useSelector( state => state.userName)
    const [pokemons, setPokemons] = useState([]);
    const [inputSearch, setInputSearch] = useState("");
    const [types, setTypes] = useState([]);
    const navigate = useNavigate();


    const [page, setPage] = useState(1);
    const pokemonsPerPage = 20;
    const lastIndex = page * pokemonsPerPage;
    const firstIndex = lastIndex - pokemonsPerPage;
    const pokemonsPaginated = pokemons.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(pokemons.length / pokemonsPerPage);
    const pages = [];
    const [disabledFirst, setDisabledFirst] = useState(false);
    const [disabledLast, setDisabledLast] = useState(false);
    const disable = () => {
        if(pages === 1){
            setDisabledFirst(true);
        } else if ( pages === totalPages) {
            setDisabledLast(true);
        }
    }

    for(let i = 1; i <= totalPages; i++){
        pages.push(i)
    }


    useEffect(()=>{
        axios
            .get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279')
            .then(res => {setPokemons(res.data.results)
                        })

        axios
            .get('https://pokeapi.co/api/v2/type/')
            .then(res => {setTypes(res.data.results)})

        
    },[])

    const search = () => {
        navigate(`/pokedex/${inputSearch.toLowerCase()}`)
    }

    const filterType = (e) => {
        axios.get(e.target.value)
        .then(res => setPokemons(res.data.pokemon));

      };
    
    const pagination = () => {
        if (page === 1){
            return(
                <div className='pagination'>
                    <button disabled={true} className='num-button red' onClick={() => setPage(1)}> {"<<"} </button>
                    <p className='selected'>{page}</p>
                    <button className='num-button' onClick={() => setPage(page + 1)}> {page + 1}</button>
                    <button className='num-button red' onClick={() => setPage(totalPages)}> {">>"} </button>
                </div>
            )
        } else if(page === totalPages){
            return(
                <div className='pagination'>
                    <button className='num-button red' onClick={() => setPage(1)}> {"<<"} </button>
                    <button className='num-button' onClick={() => setPage(page - 1)}> {page - 1}</button>
                    <p className='selected'>{page}</p>
                    <button disabled={true} className='num-button red' onClick={() => setPage(totalPages)}> {">>"} </button>
                </div>
            )
        } else{
            return(
                <div className='pagination'>
                    <button className='num-button red' onClick={() => setPage(1)}> {"<<"} </button>
                    <button className='num-button' onClick={() => setPage(page - 1)}> {page - 1}</button>
                    <p className='selected'>{page}</p>
                    <button className='num-button' onClick={() => setPage(page + 1)}> {page + 1}</button>
                    <button className='num-button red' onClick={() => setPage(totalPages)}> {">>"} </button>
                </div>
            )
        }
    }

    return (
        <div className='pokedex'>
            <div className='pokedex-header'>
                <img src={icon} alt="" className='pokedex-icon-header'/>
                <div className='pokedex-header-black'></div>
                <div className='input-name-pokedex-circle'></div>
                <div className='input-name-pokedex-circle-mid'></div>
            </div>
            <div className='pokedex-body'>
                <p className='pokedex-title'>Bienvenido {userName}, <span className='pokedex-subtitle'>Aqui podras encontrar tu Pokemón favorito</span></p>
                <div>
                    <input type="text"
                    className='search-input' 
                    placeholder='Search pokemon by id or name'
                    value={inputSearch}
                    onChange={e => setInputSearch(e.target.value)}/>
                    <button className='search-button' onClick={search}>Search</button>

                    <select className='search-select' onChange={filterType} name="" id="">
                        <option value=""  > Todos los tipos</option>
                    {

                        types.map((type) => (
                        <option value={type.url} key={type.url}>
                        {type.name}
                        </option>


                    ))}
                    </select>
                </div>

                <div className='pokedex-cards'>
                {
                pokemonsPaginated.map(pokemon => (
                        <PokemonCard 
                        key={pokemon.url ? pokemon.url : pokemon.pokemon.url} 
                        url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                        />
                ))}
                </div>
                {pagination()}
            </div>
        </div>
    );
};

export default Pokedex;