//import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Dashboard from "./pages/dashboard/Dashboard"
import Login from "./pages/login/Login"
import FilmTable from './pages/dashboard/starwar/film/FilmTable';
import FilmItem from './pages/dashboard/starwar/film/FilmItem';
import StarshipTable from './pages/dashboard/starwar/starship/StarshipTable';
import StartShipItem from './pages/dashboard/starwar/starship/StarshipItem';
import PeopleTable from './pages/dashboard/starwar/people/PeopleTable';
import PeopleItem from './pages/dashboard/starwar/people/PeopleItem';
import SpeciesTable from './pages/dashboard/starwar/species/SpeciesTable';
import SpeciesItem from './pages/dashboard/starwar/species/SpeciesItem';


function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' index element={<Login/>}/>
        <Route path='dashboard'  element={<Dashboard/>}>
          <Route path='Films' element={<FilmTable/>}/>
          <Route path='Films/:id' element={<FilmItem/>}/>
          <Route path='Starships' element={<StarshipTable/>}/>
          <Route path='Starships/:id' element={<StartShipItem/>}/>
          <Route path='People' element={<PeopleTable/>}/>
          <Route path='People/:id' element={<PeopleItem/>}/>
          <Route path='Species' element={<SpeciesTable/>}/>
          <Route path='Species/:id' element={<SpeciesItem/>}/>
        </Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
