import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import ConfigButton from "../Settings/configButton";
import BackButton from "../Settings/backButton";

const ViewContainer = styled.View`
  flex: 1;
  background-color: #f0f0f0;
`;

const Container = styled.View`
  margin: 15px;
`;

const CategoryContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const CategoryButton = styled.TouchableOpacity`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  elevation: 5;
  width: 48%;
`;

const CategoryText = styled.Text`
  font-size: 18px;
  color: #02aa6d;
  text-align: center;
`;

const ProductContainer = styled.View`
  margin-top: 20px;
  padding-bottom: 50px;
`;

const ProductCard = styled.View`
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 4;
  border: 1px solid #ccc;
  width: 100%; // Garantir que o card ocupe toda a largura disponível
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
`;

const ProductTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: black;
  text-align: left;
  margin-bottom: 5px;
  flex: 1;
`;

const ProductPrice = styled.Text`
  font-size: 16px;
  color: #02aa6d;
  text-align: left;
  flex: 1;
`;

const CartButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #02aa6d;
  padding: 15px;
  border-radius: 50px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  elevation: 5;
`;

const CartIcon = styled(Icon)`
  color: white;
  font-size: 24px;
`;

const Home = () => {
  const navigation = useNavigation();

  return (
      <ViewContainer>
        <Container>
        <BackButton onPress={() => navigation.goBack()}/>  
        <ConfigButton />
          {/* Category Buttons */}
          <CategoryContainer>
            <CategoryButton>
              <CategoryText>Produto</CategoryText>
            </CategoryButton>
            <CategoryButton>
              <CategoryText>Loja</CategoryText>
            </CategoryButton>
          </CategoryContainer>

          {/* Products List */}
          <ProductContainer>
            <ProductCard>
              <ProductTitle>Margherita Pizza</ProductTitle>
              <ProductPrice>$12.99</ProductPrice>
            </ProductCard>

            <ProductCard>
              <ProductTitle>Cheeseburger</ProductTitle>
              <ProductPrice>$8.99</ProductPrice>
            </ProductCard>

            <ProductCard>
              <ProductTitle>Sushi Roll</ProductTitle>
              <ProductPrice>$15.99</ProductPrice>
            </ProductCard>
          </ProductContainer>
        </Container>

        {/* Cart Button */}
        <CartButton onPress={() => navigation.navigate("Cart")}>
          <CartIcon name="shopping-cart" />
        </CartButton>
      </ViewContainer>  
  );
};

export default Home;
