import React, { useState,useRef,useCallback} from "react";
import { Alert, Image,TextInput} from "react-native";
import {useNavigation} from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import {firebase} from '../../services/firebase'
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup'
import getValidationErrors from "../../utils/getValidationErrors";
import {useAuth} from '../../contexts/auth' 
import {
    Container,
    ImageContainer,
    ContainerInputs,
    ContainerInfo,
    TextRegisterAccount,
    TextNotHaveAccount,
    TextButton,
} from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import Input from '../../components/Input';
import Button from "../../components/Button";


interface SignInFormData {
    email: string;
    password: string;
}

function Login(){
    const navigation = useNavigation();
    const [password,setPassword] = useState(false);
   
    const formRef = useRef<FormHandles>(null);
    const emailInputRef = useRef<TextInput>(null);
    const passwordInputRef = useRef<TextInput>(null);
    
    const {signIn} = useAuth();

    function handleNavigateToRegister(){
        navigation.navigate("Register")
    }


    const handleSingIn = useCallback(
        async (data: SignInFormData) => {
          try {
            formRef.current?.setErrors({});
    
            const schema = Yup.object().shape({
              email: Yup.string()
                .required('E-mail é obrigatório')
                .email('Digite um e-mail válido'),
              password: Yup.string().min(6, 'No mínimo 6 dígitos'),
            });
    
            await schema.validate(data, { abortEarly: false });
            
            await signIn(data.email,data.password);

    
            Alert.alert(
              'Cadastro realizado com sucesso!',
              'Você ja pode fazer login na aplicação.',
            );
          } catch (err) {
            if (err instanceof Yup.ValidationError) {
              const errors = getValidationErrors(err);
              formRef.current?.setErrors(errors);
              return;
            }
            console.log(err.message);
            Alert.alert(
              'Erro na cadastro',
              'Ocorreu um error ao fazer cadastro, tente novamente.',
            );
          }
        },
        [navigation],
      );

    return (
        <Container>
            <ImageContainer>
                <Image  source={require('../../assets/images/login.png')}/>
            </ImageContainer>
            <ContainerInputs>
            <Form ref={formRef} onSubmit={handleSingIn}>
              <Input
                ref={emailInputRef}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current?.focus()}
              />
                <Input
                ref={passwordInputRef}
                secureTextEntry
                name="password"
                icon="lock"
                placeholder="Senha"
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

                <Button  onPress={() => formRef.current?.submitForm()}>
                    Logar
                </Button>
           </Form>
            </ContainerInputs>
          
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