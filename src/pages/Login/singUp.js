import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Alert } from 'react-native';
import BackButton from '../Settings/backButton';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.Text`
  font-size: 28px;
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

const SignupScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (!username || !email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    // Simular processo de cadastro
    Alert.alert('Sucesso', 'Conta criada com sucesso!');
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}/>  
      <Title>Cadastro</Title>
      <Input
        placeholder="Nome de usuário"
        value={username}
        onChangeText={setUsername}
      />
      <Input
        placeholder="E-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button onPress={handleSignup}>
        <ButtonText>Criar Conta</ButtonText>
      </Button>
    </Container>
  );
};

export default SignupScreen;
