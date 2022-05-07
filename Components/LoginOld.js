import { NavigationContainer, Link } from "@react-navigation/native";
import {LogInContainer, LogInBox, Input, Inputs, Button, ButtonLink, Btn} from '../Styles/Login.style'
import { Text,View } from "react-native"
import Label, {Orientation} from "react-native-label";
//import Signup from './Components/Signup'

// const onPressTitle = () => {
//     <Link to={{screen:'Signup'}}></Link>
//   };

function Login() {
    return(
        <LogInContainer style={{backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/4/49/Universitatea_Politehnica_Timisoara_-_Rectorat.jpg)`}}>
            <LogInBox>
                <Text h2>Log in</Text>
                <View>
                    <Inputs>
                        <Text  htmlFor="login-email">Email Adress</Text>
                        <Input type="text" placeholder="name@email.com" id="login-email" required/>
                    </Inputs>
                    <Inputs>
                        <Text htmlFor="login-password">Password</Text>
                        <Input type="password" placeholder="Password" id="login-password" required />
                    </Inputs>
                    <Btn>
                        <ButtonLink>Log in</ButtonLink>
                    </Btn>
                </View>
                <Text>Don't have an account? Sign Up</Text>
            </LogInBox>
        </LogInContainer>
    )
}

export default Login