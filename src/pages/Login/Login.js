import React from 'react';
import {  TouchableOpacity, Alert} from 'react-native';
import styled from 'styled-components/native';
import Logo from './logo';


const Container = styled.View`
  flex: 1;  
  justify-content: center;
`;

const TextInput = styled.TextInput`
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
`;

const CustomButton = styled.TouchableOpacity`
  background-color: #02aa6d;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px;
  align-items: center;
  
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

const ContainerConta = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin: 5px;
`

const TextConta = styled.Text`
    color: #497c99;
    font-weight: bold;
    font-size: 17px;
`;

const ContainerCopyrigth = styled.View`
    position: absolute;
    bottom: 10px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const TextCopyrigth = styled.Text`
    color: #497c99;
    font-weight: bold;
    font-size: 14px;
`;




const showAlert = (title, message) => {
  Alert.alert(
    title, 
    message,
    [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => console.log('OK Pressed'), style: 'default'},
    ]
  );

} 

const Login = ({navigation}) => {

  return (
    <Container>
      <Logo />
      <TextInput placeholder="email@email.com" />
      <TextInput placeholder="password" />

      <CustomButton onPress={() => navigation.navigate('Home')}>
        <ButtonText >
            Login
        </ButtonText>
      </CustomButton>
    
      <ContainerConta>
            <TouchableOpacity  onPress={() => navigation.navigate('ForgotPassword')}>
                <TextConta>
                Esqueceu a senha? 
                </TextConta>    
            </TouchableOpacity>  
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <TextConta>
                    Cadastre-se
                </TextConta>
            </TouchableOpacity>  
      </ContainerConta>  
      <ContainerCopyrigth>
        <TextCopyrigth>
            © 2024 NutriVerde. Todos os direitos reservados.
        </TextCopyrigth>
      </ContainerCopyrigth>
    </Container>

  );
};

export default Login;
