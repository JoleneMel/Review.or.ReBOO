import React from 'react';


export default class NavBar extends React.Component {
    render() {
        return (
            <nav id="menu" className="navbar navbar-expand-sm">
                <a className="navbar-brand" href="#" />
                <ul className="navbar-nav" id="nav">
                <li className="nav-item active">
                <a className="nav-link" href="https://www.youtube.com/watch?v=AfiitLNGMp8"><b>Review or ReBOO!!!</b></a>
                </li>
                </ul>
            </nav>
    );
    }
}