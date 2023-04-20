import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLogout } from '../state'

const Header = () => {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src='/cpg_logo.png' alt="CyberProGames logo" width='100' height='100' />
            </Link>
          </li>
          <li>
            <Link to="/about" >
              <div className='nav-item'>About</div>
            </Link>
          </li>
          <li>
            <Link to="/settings" >
              <div className='nav-item'>Settings</div>
            </Link>
          </li>
          <li>
            <Link to="/profile" >
              <div className='nav-item'>Profile</div>
            </Link>
          </li>
          <li>
            {user && (
              <Link to="/" class="nav-item" onClick={() => dispatch(setLogout())}>
                Logout
              </Link>
            )}

            {!user && (
              <Link to="/login" class="nav-item">
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header >
  )
  
}

export default Header