//import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Dashboard from "./dashboard/Dashboard"
import Login from "./login/Login"

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' index element={<Login/>}/>
        <Route path='dashboard' index element={<Dashboard/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
