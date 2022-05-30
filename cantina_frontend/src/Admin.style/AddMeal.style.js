import styled from 'styled-components';

export const Background = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 50px;
`

export const FormContainer = styled.div`
    width: 100%;
    max-width: 450px;
    border-radius: 10px;
    padding: 50px;
    padding-bottom: 75px;
    margin-bottom: 40px;
    background-color: #fff;
    box-shadow: 0px 3px 15px #01135d;
    color: #01135d;
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
        color: #023e8a;
    }
    p {
        color: red;
        font-size: 12px;
    }
    @media screen and (max-width: 768px){
        width: 320px;
    }
`

export const Button = styled.button`
    border-radius: 4px;
    background: #01135d;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    width: 410px;
    margin-top: 25px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #023e8a;
        color: #fff;
    }
    @media screen and (max-width: 768px){
        width: 350px;
    }
`

export const MessageInputs = styled.div`
    margin-bottom: 15px;
    text-align: left;
    width: 410px;
    label {
        display: inline-block;
        margin-bottom: 0.5rem;
        color: #023e8a;
    }
    
    p{
        color: red;
        font-size: 12px;
    }
    @media screen and (max-width: 768px){
        width: 320px;
    }
`

export const MessageInput = styled.textarea`
    width: 100%;
    outline: none;
    height: 90px;
    padding: 8px 16px;
    border: 1px solid #e0e6e8;
    border-radius: 4px;
    font-size: 1rem;
    color: #7C7C7C;
    transition: box-shadow 0.2s;
    resize: none;
    
    &::placeholder {
        color: #dedede;
        font-family: 'Arial';
    }
    &:focus {
        box-shadow: 0 0 0 2px rgb(169, 172, 255, 0.5); 
    }
`
