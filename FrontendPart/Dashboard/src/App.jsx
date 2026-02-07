
import data from "./data/evaluated_candidates.json";
import Nav from "./component/Nav";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom"; 

const App = () => {
  return (
    <div className="w-screen h-screen  bg-gray-100">

    
    
      <Nav />
      <div >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard Data={data} />} />


        </Routes>

      </div>





    </div>
  )
}

export default App

