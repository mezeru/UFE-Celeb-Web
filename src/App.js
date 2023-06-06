import { Home } from "./components/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Experiences } from "./components/Experiences";

export function App() {
    return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />}  />
          <Route path='/services/:id' element={<Experiences />}  />
        </Routes>
      </BrowserRouter>
    </div>

    );
  }