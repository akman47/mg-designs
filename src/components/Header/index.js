import React from 'react';
import { Link } from 'react-router-dom';
import MgLogo from '../../assets/icons/MGlogo.jpeg';

function Header({currentPage, handlePageChange}) {

    const tabs = ['Home', 'About', 'Services', 'Projects', 'Contact'];

    return(
        <header className="flex-row space-between">
            <img className="logo" src={MgLogo}></img>
            <ul className="flex-row align-item-center nav-bar">
                {tabs.map(tab=> (
                    <li className={`nav-list ${currentPage === tab ? 'navActive' : ''}`} key={tab}>
                        <Link to={`/${tab.toLowerCase()}`} onClick={()=> handlePageChange(tab)}>
                            <span>{tab}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </header>
    );
}

export default Header;