import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';  // Exemplo usando Ionicons

const Container = styled.View`
  margin-bottom: 20px;
  padding: 15px;
`;

const ConfigButtonContainer = styled.View`
  position: absolute;
  right: 0px;
  top: 5px;
  padding: 5px;
  z-index: 10;
  elevation: 5;
`;

const ConfigButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Settings');  // Nome da tela de configuração
  };

  return (
      <Container>
        <ConfigButtonContainer>
          <TouchableOpacity onPress={handlePress}>
            <Icon name="settings" size={30} color="#02aa6d" />
          </TouchableOpacity>
        </ConfigButtonContainer>
      </Container>
  );
};

export default ConfigButton;
