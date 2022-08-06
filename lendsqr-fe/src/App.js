import { BrowserRouter , Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./styles/app.scss"
import User from "./pages/User/User";
import UserDetails from "./pages/User/UserDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <Login/> }/>
        <Route exact path='/dashboard' element ={<Dashboard/>}/>
        <Route path='/users' element ={<User/>}/>
        <Route path='/users/id' element={<UserDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
