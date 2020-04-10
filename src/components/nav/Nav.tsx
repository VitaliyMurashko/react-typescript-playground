import React, {useState} from 'react';
import './nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        <FontAwesomeIcon icon={faBars} size="2x" onClick={() => setIsOpen(!isOpen)}/>
        <nav className={isOpen ? "nav nav--show" : "nav nav--hide"}>
            <ul>
                <li><a href="/">Calculator</a></li>
                <li><a href="/">2</a></li>
                <li><a href="/">3</a></li>
                <li><a href="/">4</a></li>
            </ul>
        </nav>
        </>
    )
}

export default Nav