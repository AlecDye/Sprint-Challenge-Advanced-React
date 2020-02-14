import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
    const [theme, setTheme] = useDarkMode("dark-mode", false);

    const toggleMode = e => {
        e.preventDefault();
        setTheme(!theme);
    }

    return (
        <nav className="nav-bar">
            <div>
                <h1>Women's WorldCup Search Trends</h1>
                <p>June 2019 - July 2019</p>
            </div>
            <div className="dark-mode__toggle">
                <div
                    onClick={toggleMode}
                    className={theme ? 'toggle toggled' : 'toggle'}
                >
                </div>
            </div>
        </nav>
    )
}

export default Navbar;