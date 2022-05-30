import React from 'react'
import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink, Logo} from '../Styles/Navbar.style'
import {useState, useEffect} from 'react'
import {useLocation} from 'react-router'

function Navbar() {

    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    }, [location])

    return (
        <Nav>
            <NavLink to='/'>
                <Logo style={{backgroundImage: `url(https://www.sspolitehnica.ro/wp-content/uploads/2021/07/upt-logo.png)`}}></Logo>
            </NavLink>
            <NavMenu>
                {user?.value.isAdmin === true && (
                    <><NavLink to='/' activeStyle>Acasa</NavLink><NavLink to='/admin-menu' activeStyle>AdaugaMeniu</NavLink><NavLink to='/admin-meal' activeStyle>AdaugaMasa</NavLink></>
                )}
                {(user?.value.isAdmin === false || !user) && (
                <><NavLink to='/' activeStyle>Acasa</NavLink><NavLink to='/menu' activeStyle>Meniu</NavLink><NavLink to='/order' activeStyle>Comanda ta</NavLink></>
                )}        
                {user ?  (
                    <NavBtn>
                        <NavBtnLink to='/' onClick={() => localStorage.removeItem('user')}>Deconecteaza-te</NavBtnLink>
                    </NavBtn> 
                ) : (
                    <NavBtn>
                        <NavBtnLink to='/login'>Conecteaza-te</NavBtnLink>
                    </NavBtn> 
                )}   
            </NavMenu>
        </Nav>
        
    )
}

export default Navbar