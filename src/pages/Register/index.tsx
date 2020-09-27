import React, { useRef, useCallback, useState, useEffect } from "react";
import { Image, Alert, TextInput, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Container, ContainerInputs, TextButton, PickerContainer } from './styles'
import { firebase } from '../../services/firebase';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup'
import { Picker } from '@react-native-community/picker'
import getValidationErrors from "../../utils/getValidationErrors";
import api from '../../services/api'


interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  repassword: string;
}

interface ResponseData {
  name: string;
  alpha2code: string;
}

function Register() {
  const navigation = useNavigation();
  const input = React.createRef();

  const [buttonEnabled, setButtonEnabled] = useState(true);

  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const repasswordInputRef = useRef<TextInput>(null);
  const paisPickerRef = useRef<Picker>(null);
  const [selectedValue, setSelectedValue] = useState<string | number>();
  const [pais, setPais] = useState<ResponseData[]>([]);

  useEffect(() => {
    async function apiRapidPais() {
      var responseApiRapid = await api.get("/help/countries");
      setPais(responseApiRapid.data)
    }
    apiRapidPais();

  }, [])


  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        setButtonEnabled(false);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
          repassword: Yup.mixed().test('match', 'Passwords do not match', function (password) {
            return password === this.parent.repassword
          }).required('Password confirm is required')
        });



        await schema.validate(data, { abortEarly: false });


        try {

          const response = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
          const dadosSendForDatabase = {
            email: data.email,
            nome: data.name,
            pais: selectedValue
          }
          console.log(dadosSendForDatabase)
          await (firebase.database().ref(`/users/${response.user?.uid}`)).set(dadosSendForDatabase)
        } catch (error) {
          console.log(error.message)
        }


        Alert.alert(
          'Cadastro realizado com sucesso!',
          'Você ja pode fazer login na aplicação.',
        );
        setButtonEnabled(true)
        navigation.navigate('Login');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        console.log(err)

        Alert.alert(
          'Erro na cadastro',
          'Ocorreu um error ao fazer cadastro, tente novamente.',
        );
      }
    },
    [navigation, selectedValue],
  );
  return (
    <Container>
      <Image source={require('../../assets/images/register.png')} />
      <ContainerInputs>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 20 }}
        >
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

            <PickerContainer>
              <Picker
                ref={paisPickerRef}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="Selecione o País..." value="" />
                {pais.map(country => (
                  <Picker.Item key={country.alpha2code} label={country.name} value={country.name} />
                ))}
              </Picker>
            </PickerContainer>

            <Button onPress={() => formRef.current?.submitForm()} enabled={buttonEnabled}>
              Cadastrar
            </Button>
          </Form>
        </ScrollView>
      </ContainerInputs>
      <TextButton style={{ color: "#FFFFFF" }}>Register</TextButton>
    </Container>
  )
}
export default Register;