import { Home } from "./components/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Experiences } from "./components/Experiences";
import Login from "./components/login";
import SignUp from "./components/SignUp";

export function App() {
    return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />}  />
          <Route path='/services/:id' element={<Experiences />}  />
          <Route path='/login' element={<Login />}  />
          <Route path='/signup' element={<SignUp />}  />
        </Routes>
      </BrowserRouter>
    </div>

    );
  }