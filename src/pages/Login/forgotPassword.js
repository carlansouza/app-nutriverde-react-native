import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Alert } from 'react-native';
import BackButton from "../Settings/backButton";


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #02aa6d;
  margin-bottom: 20px;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 10px;
  padding-left: 10px;
  margin-bottom: 15px;
  background-color: white;
`;

const Button = styled.TouchableOpacity`
  background-color: #02aa6d;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
  width: 100%;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
`;

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = () => {
    if (!email) {
      Alert.alert('Erro', 'Por favor, insira um endereço de e-mail.');
      return;
    }
    // Simular envio de link de redefinição
    Alert.alert('Sucesso', 'Link de redefinição de senha enviado para o e-mail.');
    setEmail('');
  };

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()} /> 
      <Title>Esqueceu a Senha?</Title>
      <Input
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <Button onPress={handlePasswordReset}>
        <ButtonText>Enviar Link</ButtonText>
      </Button>
    </Container>
  );
};

export default ForgotPasswordScreen;
