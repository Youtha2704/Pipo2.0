import { Home } from "./screens/Home"
import { Events } from "./screens/Events"
import { Routes, Route, NavLink } from "react-router-dom"
import { Contact } from "./screens/Contact"
import { Galerie } from "./screens/Galerie"
import { SocialLinks } from "./components/SocialLinks"
import { FestiPipos } from "./screens/FestiPipos"

const App = () => {
  return (

    <div className="container mt-5 bg-stone-50">
      <header className="flex justify-between items-center bg-[#3333ff]">
        <img className="w-20" src="logo2.jpeg" alt="logo du site" />
        <nav className="flex justify-end" >
          <NavLink className='ml-3 text-[white]' style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to="/">ACCUEIL</NavLink>
          <NavLink className='ml-3 text-[white]' style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to="/events">EVENEMENTS</NavLink>
          <NavLink className='ml-3 text-[white]' style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to="/contact">CONTACTS</NavLink>
          <NavLink className='ml-3 text-[white]' style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to="/galerie"> GALERIE</NavLink>
          <NavLink className='ml-3 text-[white]' style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to="/festi"> FESTI PIPO</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/festi" element={<FestiPipos />} />

      </Routes>

      <footer className="bg-[#3333ff] w-full h-full overflow-hidden mt-20">
        <SocialLinks />
      </footer>

    </div>
  )
}

export default App