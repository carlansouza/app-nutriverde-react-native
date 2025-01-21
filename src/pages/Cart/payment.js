import React, { useState } from "react";
import styled from "styled-components/native";
import { Alert} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import ConfigButton from '../Settings/configButton';
import BackButton from '../Settings/backButton';

const Container = styled.View`
  flex: 1;
`;  

// Container principal
const PaymentContainer = styled.ScrollView`
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

// Seção para cada tipo de pagamento
const Section = styled.View`
  margin-bottom: 20px;
`;

// Título das seções
const SectionTitle = styled.Text`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

// Container das opções de pagamento
const PaymentOptionContainer = styled.View`
  margin-top: 10px;
`;

// Estilo do botão de pagamento
const PaymentOptionButton = styled.TouchableOpacity`
  background-color: ${(props) => (props.selected ? '#e6ffe6' : 'white')};
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 4;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// Texto do botão de pagamento
const PaymentOptionText = styled.Text`
  font-size: 18px;
  color: #333;
`;

// Icone do pagamento
const PaymentOptionIcon = styled.View`
  font-size: 24px;
  color: #02aa6d;
`;

// Botão de confirmar pagamento
const PaymentButton = styled.TouchableOpacity`
  background-color: #02aa6d;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
  margin-top: 18px;
`;

const PaymentButtonText = styled.Text`
  color: white;
  font-size: 18px;
`;

// Tela de pagamento
const Payment = ({navigation}) => {
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handlePayment = () => {
    if (!paymentMethod) {
      Alert.alert("Escolha um método de pagamento", "Por favor, escolha entre Dinheiro, Cartão ou Pix.");
      return;
    }

    Alert.alert("Pagamento Confirmado", `Você escolheu pagar com ${paymentMethod}.`);
  };

  return (
    <Container>
    <BackButton onPress={() => navigation.goBack()}/>  
    <ConfigButton />
    <PaymentContainer>
      <Title>Formas de Pagamento</Title>

      <Section>
        <SectionTitle>Pagamento Online</SectionTitle>
        <PaymentOptionContainer>
          <PaymentOptionButton
            selected={paymentMethod === "Pix"}
            onPress={() => setPaymentMethod("Pix")}
          >
            <PaymentOptionText>Pix</PaymentOptionText>
            <PaymentOptionIcon>
              <Icon name="qrcode" size={24} color="#02aa6d" />
            </PaymentOptionIcon>
          </PaymentOptionButton>

        </PaymentOptionContainer>
      </Section>

      <Section>
        <SectionTitle>Pagamento na Entrega</SectionTitle>
        <PaymentOptionContainer>
          <PaymentOptionButton
            selected={paymentMethod === "Dinheiro"}
            onPress={() => setPaymentMethod("Dinheiro")}
          >
            <PaymentOptionText>Dinheiro</PaymentOptionText>
            <PaymentOptionIcon>
              <Icon name="money" size={24} color="#02aa6d" />
            </PaymentOptionIcon>
          </PaymentOptionButton>

          <PaymentOptionButton
            selected={paymentMethod === "Cartao"}
            onPress={() => setPaymentMethod("Cartao")}
          >
            <PaymentOptionText>Cartão</PaymentOptionText>
            <PaymentOptionIcon>
              <Icon name="credit-card" size={24} color="#02aa6d" />
            </PaymentOptionIcon>
          </PaymentOptionButton>
        </PaymentOptionContainer>
      </Section>

      {/* Botão de Confirmação */}
      <PaymentButton onPress={handlePayment}>
        <PaymentButtonText>Confirmar Pagamento</PaymentButtonText>
      </PaymentButton>
    </PaymentContainer>
    </Container>
  );
};

export default Payment;
