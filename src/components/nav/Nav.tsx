import React from 'react';
import './nav.scss';
import img from '../../img/list.svg'

const Nav: React.FC<any> = () => {
    return (
        <nav className="nav nav--show">
            <img src={img} alt=""/>
            <ul>
                <li><a href="/"></a>1</li>
                <li><a href="/"></a>2</li>
                <li><a href="/"></a>3</li>
                <li><a href="/"></a>4</li>
            </ul>
        </nav>
    )
}

export default Nav