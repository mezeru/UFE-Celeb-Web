import { Home } from "./components/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Experiences } from "./components/Experiences";
import Login from "./components/login";
import SignUp from "./components/SignUp";
import { Auth } from "./scripts/Auth";
import { Navbar } from "./components/NavBar";
import {UserProfile} from "./components/userProfile";

export function App() {
    return (

    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index path='/' element={<Home />}  />
          <Route path='/services/:id' element={<Auth><Experiences /></Auth>}  />
          <Route path='/login' element={<Login />}  />
          <Route path='/signup' element={<SignUp />}  />
          <Route path='/User/:id' element={<Auth><UserProfile /></Auth>}  />
        </Routes>
      </BrowserRouter>
    </div>

    );
  }