import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {SignUpContainer, SignUpBox, Input, Inputs, Button, ButtonLink} from '../Styles/Signup.style'
import {useNavigate} from 'react-router'

function Signup() {
    var password = document.getElementById("signup-password"), confirm_password = document.getElementById("signup-confirm");
    const [eroare, setEroare] = useState("");
    const navigate = useNavigate();
    function validatePassword(){
        if(signupForm.password != signupForm.confirm_password) {
            confirm_password.setCustomValidity("Passwords Don't Match");
            return false;
        } else {
            confirm_password.setCustomValidity('');
            return true;
        }
    }

    const [signupForm, setSignupForm] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    });

    async function Register(){
        console.log("s a apelat register");
        const url = 'https://rgrestaurantapi.azurewebsites.net/api/Users/register'
        await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: signupForm.username,
                email: signupForm.email,
                password: signupForm.password,
                isAdmin: false
            }),
          })
          .then(response => response.json())
          .then(eroare => {setEroare(eroare.message); alert(eroare.message);})
          .catch(error => console.log(error));
    }
    return (
        
        <SignUpContainer style={{backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/4/49/Universitatea_Politehnica_Timisoara_-_Rectorat.jpg)`}}>
            <SignUpBox>
                <h2>Sign up</h2>
                <Inputs>
                    <label htmlFor="signup-name">Full Name</label>
                    <Input type="text" placeholder="Full Name" id="signup-name" required minLength={6} onChange={e => setSignupForm({...signupForm, username: e.target.value})}/>
                </Inputs>
                <Inputs>
                    <label htmlFor="signup-email">Email Address</label>
                    <Input type="email" placeholder="name@email.com" id="signup-email" required onChange={e => setSignupForm({...signupForm, email: e.target.value})}/>
                </Inputs>
                <Inputs>
                    <label htmlFor="signup-password">Password</label>
                    <Input type="password" placeholder="Password" id="signup-password" required minLength={6} onChange={e => setSignupForm({...signupForm, password: e.target.value})}/>
                </Inputs>
                <Inputs>
                    <label htmlFor="signup-password">Confirm Password</label>
                    <Input type="password" placeholder="Confirm Password" id="signup-confirm" required onChange={e => setSignupForm({...signupForm, confirm_password: e.target.value})}/>
                </Inputs>
                <Button>   
                        <ButtonLink onClick={async () => {
                            if(validatePassword() === true){ 
                                await Register(); 
                            }if(eroare === "" ){ 
                                navigate("/login")}
                            }}>Sign Up</ButtonLink>
                </Button>
                <span>Already have an account?
                    <Link to="/login">Log In</Link>
                </span>
            </SignUpBox>
        </SignUpContainer>
    )
}

export default Signup