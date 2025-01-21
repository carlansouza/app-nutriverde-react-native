// BackButton.js
import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonContainer = styled(TouchableOpacity)`

  position: absolute;
  left: 0px;
  top: 5px;
  padding: 5px;
  z-index: 10;
  elevation: 5;
  
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: #02aa6d;
`;

const BackButton = ({ onPress, label = "Voltar" }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <Icon name="chevron-left" size={24} color="#02aa6d" />
    </ButtonContainer>
  );
};

export default BackButton;
