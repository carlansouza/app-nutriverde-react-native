import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Alert } from 'react-native';

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

const ChangePasswordScreen = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert('Erro', 'A nova senha e a confirmação não correspondem.');
      return;
    }
    // Simular envio de senha alterada
    Alert.alert('Sucesso', 'Senha alterada com sucesso!');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <Container>
      <Title>Alterar Senha</Title>
      <Input
        placeholder="Senha Atual"
        secureTextEntry
        value={currentPassword}
        onChangeText={setCurrentPassword}
      />
      <Input
        placeholder="Nova Senha"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <Input
        placeholder="Confirmar Nova Senha"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button onPress={handlePasswordChange}>
        <ButtonText>Alterar Senha</ButtonText>
      </Button>
    </Container>
  );
};

export default ChangePasswordScreen;
