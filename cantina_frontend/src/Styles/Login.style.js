import styled from "styled-components"

export const LogInContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const LogInBox = styled.div`
    width: 100%;
    max-width: 450px;
    border-radius: 5px;
    padding: 50px;
    margin-bottom: 40px;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    text-align: center;
    h2 {
        font-weight: 500;
        margin-bottom: 50px;
    }
    span {
        display: block;
        margin-top: 40px;
        color: #888888;
        font-size: 14px;
    }
    a{
        margin-left: 4px;
        color: #2f8bfd;
    }
    @media screen and (max-width: 768px){
        width: 350px;
    }
`

export const Input = styled.input`
    width: 100%;
    outline: none;
    padding: 8px 16px;
    border: 1px solid #e0e6e8;
    border-radius: 4px;
    font-size: 1rem;
    color: #7C7C7C;
    transition: box-shadow 0.2s;
    
    &::placeholder {
        color: #dedede;
    }
    &:focus {
        box-shadow: 0 0 0 2px rgb(169, 172, 255, 0.5); 
    }
`

export const Inputs = styled.div`
    margin-bottom: 24px;
    text-align: left;
    width: 410px;
    label {
        display: inline-block;
        margin-bottom: 0.5rem;
        color: #888888;
    }
    p {
        color: red;
        font-size: 12px;
    }
    @media screen and (max-width: 768px){
        width: 320px;
    }
`

export const Button = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    padding: 0 1rem;
    width: 405px;
    a {
        color: #000;
    }
    @media screen and (max-width: 768px){
        width: 310px;
    }
`

export const ButtonLink = styled.button`
    border-radius: 4px;
    background: #90caf9;
    padding: 10px 22px;
    color: #000;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    width: 410px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #cae9ff;
        color: #010606;
    }
    @media screen and (max-width: 768px){
        width: 350px;
    }
`