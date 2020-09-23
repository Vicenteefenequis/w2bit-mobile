import React, { useState } from "react";
import { View, Image, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";
import { Input } from 'react-native-elements';
import { RectButton } from "react-native-gesture-handler";

import {
    Container,
    ImageContainer,
    ContainerInputs,
    ContainerInfo,
    TextRegisterAccount,
    TextNotHaveAccount,
    Button,
    TextButton,
} from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';



function Login(){
    const {navigate} = useNavigation();
    const [password,setPassword] = useState(false);

    function handleNavigateToRegister(){

    }


    return (
        <Container>
            <ImageContainer>
                <Image  source={require('../../assets/images/login.png')}/>
            </ImageContainer>
            <ContainerInputs>
                <Input placeholder="Nome"  />
                <Input  placeholder="Password" secureTextEntry={!password} rightIcon={
                password ? 
                <Icon  
                    name='unlock'
                    size={24}
                    color='#485068'
                    onPress={()=> {setPassword(!password)} }
                /> : 
                <Icon name='lock'
                    size={24}
                    color='#485068'
                    onPress={()=> {setPassword(!password)} }
                />
                }/>
            </ContainerInputs>
            <Button color="#007AFE">
                <TextButton style={{color:"#FFFFFF"}}>Login</TextButton>
            </Button>
            <ContainerInfo>
                 <TextNotHaveAccount color="#485068">
                        Não tem conta?  {"  "}
                    </TextNotHaveAccount>   
                <RectButton onPress={handleNavigateToRegister}>
                    <TextRegisterAccount color="#347AF0" > 
                         Registre-se
                    </TextRegisterAccount>
                </RectButton>              
            </ContainerInfo>
        </Container>
    )
}

export default Login;