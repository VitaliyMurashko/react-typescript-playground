import React, {useState} from 'react';
import './nav.scss';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        <FontAwesomeIcon icon={faBars} size="2x" onClick={() => setIsOpen(!isOpen)}/>
        <nav className={isOpen ? "nav nav--show" : "nav nav--hide"}>
            <ul>
                <li><Link to="/calculator">Calculator</Link></li>
                <li><Link to="/keyboard">Keyboard</Link></li>
                <li><Link to="/GitHub-card">GutHub card</Link></li>
                <li><Link to="/Tic-tac-toe">Tic tac toe</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Nav