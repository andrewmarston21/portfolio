/**
 * Andrew Marston
 * 
 * TODO: ensure liscencing is A-OK
 * 
 * written with help from the following resources:
 * geeksforgeeks.org
 */

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navbar from "./components/nav";

import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes> {/* please ignore ts */}
          <Route path="/" element={<Home />} /> {/* please ignore ts */}
          <Route path="/about" element={<About />} /> {/* please ignore ts */}
          <Route path="/contact" element={<Contact />} /> {/* please ignore ts */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
