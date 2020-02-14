import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav data-testid='nav-render' className='navbar'>
            <h1>Women's International Soccer (or Football) Players</h1>
            <div className = 'dark-mode__toggle'>
                <button 
                data-testid='button-render'
                onClick={toggleMode}
                className = {darkMode ? 'toggle toggled' : 'toggle'}/>
            </div>
        </nav>
    );
};

export default Navbar;

