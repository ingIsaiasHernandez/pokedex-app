import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import InputName from './components/InputName'
import Pokedex from './components/Pokedex'
import PokedexDetails from './components/PokedexDetails'
import ProtectedRoutes from './components/ProtectedRoutes'
import NotFound from './components/NotFound'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<InputName />} />
        <Route path="/notfound" element={<NotFound />}/>
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />}/>
          <Route path='/pokedex/:id' element={<PokedexDetails />}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
