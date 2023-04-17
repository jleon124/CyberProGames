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
                        <Link to="/about" class="sublogoIcon" >
                            <img src="" alt="" />
                            <span class="nav-item">About</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/account" class="sublogoIcon" >
                            <img src="" alt="" />
                            <span class="nav-item">Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" class="sublogoIcon" >
                            <img src="" alt="" />
                            <span class="nav-item">Profile</span>
                        </Link>
                    </li>
                    <li>
                        {user && (
                            <button class="nav-item" onClick={handleClick}>Logout</button>
                        )}

                        {!user && (
                            <Link to="/login">
                                <span class="nav-item">Login</span>
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