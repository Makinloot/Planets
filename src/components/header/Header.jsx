import { Link } from 'react-router-dom'

import './Header.scss'

const Header = ({ currentPlanet }) => {

  return (
    <div className='Header'>
      <Link className={currentPlanet === 'mercury' ? 'active' : ''} to="/mercury">mercury</Link>
      <Link className={currentPlanet === 'venus' ? 'active' : ''} to="/venus">venus</Link>
      <Link className={currentPlanet === 'earth' ? 'active' : ''} to="/earth">earth</Link>
      <Link className={currentPlanet === 'mars' ? 'active' : ''} to="/mars">mars</Link>
      <Link className={currentPlanet === 'jupiter' ? 'active' : ''} to="/jupiter">jupiter</Link>
      <Link className={currentPlanet === 'saturn' ? 'active' : ''} to="/saturn">saturn</Link>
      <Link className={currentPlanet === 'uranus' ? 'active' : ''} to="/uranus">uranus</Link>
      <Link className={currentPlanet === 'neptune' ? 'active' : ''} to="/neptune">neptune</Link>
    </div>
  )
}

export default Header