import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Header = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <img src='/cpg_logo.png' alt="CyberProGames logo" width='100' height='100' />
                        </Link>
                    </li>
                    {/* <li>
                        <button onClick={() => navigate("/gamelist")} class="sublogoIcon" >
                            <img src="" alt="" />
                            <span class="nav-item">Games</span>
                        </button>
                    </li> */}
                    <li>
                        <Link to="/about" class="nav-item">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings" class="nav-item">
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" class="nav-item">
                            Profile
                        </Link>
                    </li>
                    <li>
                        {user && (
                            <Link to="/" class="nav-item" onClick={handleClick}>
                                Logout
                            </Link>
                        )}

                        {!user && (
                            <Link to="/login" class="nav-item">
                                Login
                            </Link>
                        )}

                        {/* <Link to="/login" class="sublogoIcon" >
                        <img src="" alt="" />
                        <span class="nav-item">Login</span>
                    </Link> */}
                    </li>
                    {/* <li>
                        <a href="gamepage" class="sublogoIcon" >
                            <img src="" alt="" />
                            <span class="nav-search">Search</span>
                        </a>
                    </li> */}
                </ul>
            </nav>
        </header >
    )
}

export default Header