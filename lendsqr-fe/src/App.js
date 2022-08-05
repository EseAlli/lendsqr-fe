import { BrowserRouter , Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./styles/app.scss"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <Login/> }/>
        <Route exact path='/dashboard' element ={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
