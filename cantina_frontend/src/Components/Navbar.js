import React from 'react'
import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink, Logo} from '../Styles/Navbar.style'

function Navbar() {

    return (
        <Nav>
            <NavLink to='/'>
                <Logo style={{backgroundImage: `url(https://www.sspolitehnica.ro/wp-content/uploads/2021/07/upt-logo.png)`}}></Logo>
            </NavLink>
            <NavMenu>
                    <NavLink to='/' activeStyle>Home</NavLink>
                    <NavLink to='/menu' activeStyle>Menu</NavLink>
                    <NavBtn>
                        <NavBtnLink to='/login'>Sign In</NavBtnLink>
                    </NavBtn> 
            </NavMenu>
        </Nav>
        
    )
}

export default Navbar