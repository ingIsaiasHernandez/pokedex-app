import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import InputPokemonName from './components/InputPokemonName'
import PokemonDetail from './components/PokemonDetail'
import Pokemons from './components/Pokemons'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          
          <Route path='/' element={<InputPokemonName></InputPokemonName>}></Route>
          <Route path='/pokedex' element={<Pokemons></Pokemons>}></Route>
          <Route path='/pokedex/:id' element={<PokemonDetail></PokemonDetail>}></Route>

        </Routes>
      </HashRouter>

    </div>
  )
}

export default App
