import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/detalhes">Detalhes</NavLink>
    </nav>
  )
}

export default NavBar