import React from 'react'
import {BackgroundImg, HomeBox, Button, ButtonLink, Wrapper} from '../Styles/Home.style';
import {useState, useEffect} from 'react'
import {useLocation} from 'react-router'


function Home() {

    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    }, [location])

    return (
        <BackgroundImg style={{backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/4/49/Universitatea_Politehnica_Timisoara_-_Rectorat.jpg)`}}>
            <Wrapper>
                <HomeBox>
                    <h1>Doar la cantina UPT  </h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    {(user?.value.isAdmin === false || !user) && (
                        <Button>
                            <ButtonLink to="/menu">Vezi meniul</ButtonLink>
                        </Button> 
                   )}
                </HomeBox>  
            </Wrapper>
        </BackgroundImg>
        
    )
}

export default Home