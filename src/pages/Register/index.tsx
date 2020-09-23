import React, { FormEvent, InputHTMLAttributes } from "react";
import { View, Text,Image } from "react-native";
import {useNavigation} from "@react-navigation/native";



import {Container} from './styles'

function Register(){
    const {navigate} = useNavigation();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
      const handleChange = (prop:string) => (event:React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
      };
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
      const handleMouseDownPassword = (event:FormEvent) => {
        event.preventDefault();
      };
     return (
        <Container>
            <Image  source={require('../../assets/images/register.png')}/>
            <View >
            </View>
        </Container>
    )
}

export default Register;