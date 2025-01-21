import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Switch } from 'react-native';
import BackButton from './backButton';

// Container principal
const SettingsContainer = styled.View`
  flex: 1;
  background-color: #f0f0f0;
  padding: 20px;
`;

// Título da tela
const Title = styled.Text`
  font-size: 32px;
  color: #02aa6d;
  text-align: center;
  margin-bottom: 30px;
`;

// Seção de Configurações
const Section = styled.View`
  margin-bottom: 20px;
`;

// Título da seção
const SectionTitle = styled.Text`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

// Item da configuração (com switch ou botão)
const SettingItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 10px;
  elevation: 3;
`;

// Texto do item de configuração
const SettingText = styled.Text`
  font-size: 18px;
  color: #333;
`;

const Button = styled.TouchableOpacity`

`;


const Settings = ({navigation}) => {
  // Estado para controle de configurações
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Função para alternar o estado das configurações
  const toggleNotifications = () => setIsNotificationsEnabled(previousState => !previousState);
  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);

  return (
    <SettingsContainer>
      <BackButton onPress={() => navigation.goBack()} />
      <Title>Configurações</Title>

      <Section>
        <SectionTitle>Preferences</SectionTitle>

        <SettingItem>
          <SettingText>Notifications</SettingText>
          <Switch value={isNotificationsEnabled} onValueChange={toggleNotifications} />
        </SettingItem>

        <SettingItem>
          <SettingText>Dark Mode</SettingText>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </SettingItem>
      </Section>

      <Section>
        <SectionTitle>Account</SectionTitle>

        <Button onPress={() => navigation.navigate('Profile')}>
          <SettingItem>
              <SettingText>Profile</SettingText>          
          </SettingItem>
        </Button>  

        <Button onPress={() => navigation.navigate('ProductCrud')}>
          <SettingItem>
            <SettingText>Stock</SettingText>
          </SettingItem>
        </Button>

        <Button onPress={() => navigation.navigate('ChangePassword')}>
          <SettingItem>
            <SettingText>Change Password</SettingText>
          </SettingItem>
        </Button>

        <Button onPress={() => navigation.navigate('Login')}>
          <SettingItem>
            <SettingText>Logout</SettingText>
          </SettingItem>
        </Button>
      </Section>
    </SettingsContainer>
  );
};

export default Settings;
