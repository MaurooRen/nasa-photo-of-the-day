import React from 'react'

const Nav = () => {
    return (
        <nav className="Nav">
            <ul>
                <li>
                    <a>Gallery</a>
                </li>
                <li>
                    <a href="https://github.com/MaurooRen/nasa-photo-of-the-day">Source Code</a>
                </li>
                <li>
                    <a href="https://api.nasa.gov/">Browse APIs</a>
                </li>
                <li>
                    <a href="http://maurooren.com/">Develop by</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;