import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="/" >
                            <img src= '/cpg_logo.png' alt="CyberProGames logo" width='100' height='100'/>
                        </a>
                    </li>
                    <li>
                        <a href="/games" class="sublogoIcon" >
                            <img src="" alt="" />
                            <span class="nav-item">Games</span>
                        </a>
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