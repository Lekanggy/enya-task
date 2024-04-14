//import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Dashboard from "./dashboard/Dashboard"
import Login from "./login/Login"
import Table from './components/Table';
import StarshipTable from './components/StarshipTable';
import PeopleTable from './components/PeopleTable';
import SpeciesTable from './components/SpeciesTable';
import StartShipItem from './components/StarshipItem';
import PeopleItem from './components/PeopleItem';
import SpeciesItem from './components/SpeciesItem';
import FilmItem from './components/FilmItem';

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
