import styled from 'styled-components'
import { NavLink as Link} from 'react-router-dom'

export const Nav = styled.nav`  
    background: #01135d;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1450px) / 2);
    z-index: 100;
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
&.active {
    color: #7C7C7C
    .h4{
        color: white;
    }
}
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    @media screen and (max-width: 760px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    padding: 0 1rem;
    @media screen and (max-width: 760px){
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #90caf9;
    padding: 10px 22px;
    color: #000;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #cae9ff;
        color: #010606;
    }
`

export const Logo = styled.div`
    width: 200px;
    height: 150px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`