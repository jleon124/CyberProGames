import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <button onClick={() => navigate("/")} >
                            <img src= '/cpg_logo.png' alt="CyberProGames logo" width='100' height='100'/>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => navigate("/gamelist")} class="sublogoIcon" >
                            <img src="" alt="" />
                            <span class="nav-item">Games</span>
                        </button>
                    </li>
                    <li>
                        <a href="/about" class="sublogoIcon" >
                            <img src="" alt="" />
                            <span class="nav-item">About</span>
                        </a>
                    </li>
                    <li>
                        <a href="/account" class="sublogoIcon" >
                            <img src="" alt="" />
                            <span class="nav-item">Account</span>
                        </a>
                    </li>
                    <li>
                        <a href="/profile" class="sublogoIcon" >
                            <img src="" alt="" />
                            <span class="nav-item">Proflie</span>
                        </a>
                    </li>
                    <li>
                        <a href="/login" class="sublogoIcon" >
                            <img src="" alt="" />
                            <span class="nav-item">Login</span>
                        </a>
                    </li>
                    <li>
                        {/* temp link to a game's page */}
                        <a href="gamepage" class="sublogoIcon" >
                            <img src="" alt="" />
                            <span class="nav-search">Search</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header