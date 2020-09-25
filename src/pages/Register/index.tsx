import React, { useRef,useCallback} from "react";
import { View, Text,Image,Alert,TextInput } from "react-native";
import {useNavigation} from "@react-navigation/native";
import  Input  from '../../components/Input'
import  Button  from '../../components/Button'
import {Container,ContainerInputs,TextButton} from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import '../../services/firebase'
import {firebase} from '../../services/firebase';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup'
import getValidationErrors from "../../utils/getValidationErrors";


interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  repassword:string;
  pais:string;
}


function Register(){
    const navigation = useNavigation();
    const input = React.createRef();
    
    const formRef = useRef<FormHandles>(null);
    const emailInputRef = useRef<TextInput>(null);
    const passwordInputRef = useRef<TextInput>(null);
    const repasswordInputRef = useRef<TextInput>(null);
    const paisInputRef = useRef<TextInput>(null);

    const handleSignUp = useCallback(
      async (data: SignUpFormData) => {
        try {
          formRef.current?.setErrors({});
  
          const schema = Yup.object().shape({
            name: Yup.string().required('Nome é obrigatório'),
            email: Yup.string()
              .required('E-mail é obrigatório')
              .email('Digite um e-mail válido'),
            password: Yup.string().min(6, 'No mínimo 6 dígitos'),
            repassword: Yup.mixed().test('match','Passwords do not match',function(password){
              return password === this.parent.repassword
            }).required('Password confirm is required')
          });
  
          await schema.validate(data, { abortEarly: false });


          await (firebase.auth().createUserWithEmailAndPassword(data.email,data.password))
          await (firebase.database().ref('/users').push()).set(data)
  
          Alert.alert(
            'Cadastro realizado com sucesso!',
            'Você ja pode fazer login na aplicação.',
          );
          navigation.goBack();
        } catch (err) {
          if (err instanceof Yup.ValidationError) {
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
            return;
          }
  
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
          <Image  source={require('../../assets/images/register.png')}/>
          <ContainerInputs>
           <Form ref={formRef} onSubmit={handleSignUp}>
              <Input
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
              />
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

              <Input
                ref={repasswordInputRef}
                secureTextEntry
                name="repassword"
                icon="lock"
                placeholder="Confirmar Senha"
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <Input
                ref={paisInputRef}
                name="pais"
                icon="map"
                placeholder="Pais"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
            <Button  onPress={() => formRef.current?.submitForm()}>
                Cadastrar
            </Button>
           </Form>
          </ContainerInputs>
            <TextButton style={{color:"#FFFFFF"}}>Register</TextButton>
     </Container>
    )
}

export default Register;