import React, { useState,FormEvent, InputHTMLAttributes } from "react";
import { View, Text,Image } from "react-native";
import {useNavigation} from "@react-navigation/native";
import { Input } from 'react-native-elements';
import {Container,ContainerInputs,Button,TextButton} from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';


function Register(){
    const {navigate} = useNavigation();
    
    const [password,setPassword] = useState(false);
   
     
     return (
      <Container>
          <Image  source={require('../../assets/images/register.png')}/>
          <ContainerInputs>
            <Input placeholder="Nome"  />
            <Input placeholder="Email Address"/>
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
            <Input placeholder="Pais"/>
          </ContainerInputs>
          <Button color="#007AFE">
            <TextButton style={{color:"#FFFFFF"}}>Register</TextButton>
          </Button>
     </Container>
    )
}

export default Register;