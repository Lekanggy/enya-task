//import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Dashboard from "./pages/dashboard/Dashboard"
import Login from "./pages/login/Login"
import Table from './pages/dashboard/film/FilmTable';
import StarshipTable from './pages/dashboard/starship/StarshipTable';
import PeopleTable from './pages/dashboard/people/PeopleTable';
import SpeciesTable from './pages/dashboard/species/SpeciesTable';
import StartShipItem from './pages/dashboard/starship/StarshipItem';
import PeopleItem from './pages/dashboard/people/PeopleItem';
import SpeciesItem from './pages/dashboard/species/SpeciesItem';
import FilmItem from './pages/dashboard/film/FilmItem';

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' index element={<Login/>}/>
        <Route path='dashboard'  element={<Dashboard/>}>
          <Route path='Films' element={<Table/>}/>
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
