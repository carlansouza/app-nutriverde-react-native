import React, { Component } from "react";
import styled from "styled-components/native";
import Icon5 from 'react-native-vector-icons/FontAwesome5';

// Componente estilizado
const Title = styled.Text`
  font-size: 45px;
  color: #02aa6d;
  text-align: center;
`;

const ContainerLogo = styled.View`
  flex-shrink: 1;
  justify-content: center;
`;

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'NutriVerde',
    };
  }

  render() {
    return (
      <ContainerLogo>
        <Title>
          <Icon5 name="seedling" size={36} color="#02aa6d" />
          {'  '}
          {this.state.text}
        </Title>
      </ContainerLogo>
    );
  }
}

export default Logo;
