import React, { useState } from "react";
import styled from "styled-components/native";
import ConfigButton from "../Settings/configButton";
import BackButton from "../Settings/backButton";

// Container principal
const CartContainer = styled.View`
  flex: 1;
  background-color: #f0f0f0;
  padding: 0 10px;
`;

// Título da tela
const Title = styled.Text`
  font-size: 32px;
  color: #02aa6d;
  text-align: center;
  margin-bottom: 30px;
`;

// Lista de Itens no Carrinho
const ItemContainer = styled.View`
  flex: 1;
  margin-top: 20px;
`;

// Item do Carrinho
const CartItem = styled.View`
  background-color: white;
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

// Informações do Item
const ItemDetails = styled.View`
  flex-direction: column;
  justify-content: center;
`;

// Texto do nome e preço do item
const ItemTitle = styled.Text`
  font-size: 18px;
  color: #333;
`;

const ItemPrice = styled.Text`
  font-size: 16px;
  color: #02aa6d;
`;

// Botão de Remover Item
const RemoveButton = styled.TouchableOpacity`
  background-color: #f44336;
  padding: 5px 10px;
  border-radius: 5px;
`;

const RemoveButtonText = styled.Text`
  color: white;
  font-size: 14px;
`;

// Área do Total e Checkout
const CheckoutContainer = styled.View`
  margin-top: auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 5px;
  elevation: 5;
  margin-bottom: 20px;
`;

const TotalText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

const CheckoutButton = styled.TouchableOpacity`
  background-color: #02aa6d;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  margin-top: 20px;
`;

const CheckoutButtonText = styled.Text`
  color: white;
  font-size: 18px;
`;

const Cart = ({navigation}) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Margherita Pizza", price: 12.99 },
    { id: 2, title: "Cheeseburger", price: 8.99 },
    { id: 3, title: "Sushi Roll", price: 15.99 },
  ]);

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };



  return (
    <CartContainer>
      <BackButton onPress={() => navigation.goBack()}/>  
      <ConfigButton />
      <Title>Carrinho de Compras</Title>
      <ItemContainer>
        {cartItems.map(item => (
          <CartItem key={item.id}>
            <ItemDetails>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
            </ItemDetails>

            <RemoveButton onPress={() => removeItem(item.id)}>
              <RemoveButtonText>Remove</RemoveButtonText>
            </RemoveButton>
          </CartItem>
        ))}
      </ItemContainer>

      {cartItems.length > 0 ? (
        <CheckoutContainer>
          <TotalText>Total: ${calculateTotal()}</TotalText>
          <CheckoutButton onPress={() => navigation.navigate("Payment")}>
            <CheckoutButtonText 
            >Checkout</CheckoutButtonText>
          </CheckoutButton>
        </CheckoutContainer>
      ) : (
        <TotalText>Seu carrinho esta vazio!</TotalText>
      )}
    </CartContainer>
  );
};

export default Cart;
