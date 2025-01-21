import React, { useState } from "react";
import styled from "styled-components/native";
import { Alert, TouchableOpacity, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

// Container principal
const Container = styled.View`
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

// Formulário de Produto
const FormContainer = styled.View`
  margin-bottom: 30px;
  padding: 15px;
  background-color: white;
  border-radius: 10px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 5px;
  elevation: 5;
`;

// Campos de input
const Input = styled.TextInput`
  height: 40px;
  border-color: #ccc;
  border-width: 1px;
  margin-bottom: 15px;
  padding-left: 10px;
  border-radius: 5px;
`;

// Botão para adicionar/editar produto
const Button = styled.TouchableOpacity`
  background-color: #02aa6d;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
`;

const ProductItem = styled.View`
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 5px;
  elevation: 5;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ProductText = styled.Text`
  font-size: 16px;
  color: #333;
  flex: 2;  /* Faz o texto ocupar todo o espaço restante */
`;

const ProductActions = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;  
`;

const ActionButton = styled.TouchableOpacity`
  padding: 5px;
`;

const ActionText = styled.Text`
  font-size: 16px;
  color: #02aa6d;
`;


// Cabeçalho da lista
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 0;
  background-color: #02aa6d;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const HeaderText = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: bold;
  flex: 1;
  text-align: center;
`;

// Tela de CRUD de Produtos
const ProductCrud = () => {
  const [id, setId] = useState(null);
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [estoque, setEstoque] = useState("");
  const [products, setProducts] = useState([]);

  const handleSave = () => {
    if (!nome || !valor || !estoque) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    const newProduct = { id: id ?? new Date().getTime(), nome, valor, estoque };

    if (id) {
      const updatedProducts = products.map((product) =>
        product.id === id ? newProduct : product
      );
      setProducts(updatedProducts);
    } else {
      setProducts([...products, newProduct]);
    }

    // Limpar campos
    setId(null);
    setNome("");
    setValor("");
    setEstoque("");
  };

  const handleEdit = (product) => {
    setId(product.id);
    setNome(product.nome);
    setValor(product.valor);
    setEstoque(product.estoque);
  };

  const handleDelete = (productId) => {
    const filteredProducts = products.filter((product) => product.id !== productId);
    setProducts(filteredProducts);
  };

  return (
    <Container>
      <Title>Estoque</Title>

      {/* Formulário de Cadastro/Atualização */}
      <FormContainer>
        <Input
          placeholder="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <Input
          placeholder="Valor"
          value={valor}
          keyboardType="numeric"
          onChangeText={(text) => setValor(text)}
        />
        <Input
          placeholder="Estoque"
          value={estoque}
          keyboardType="numeric"
          onChangeText={(text) => setEstoque(text)}
        />
        <Button onPress={handleSave}>
          <ButtonText>{id ? "Atualizar Produto" : "Adicionar Produto"}</ButtonText>
        </Button>
      </FormContainer>

      <Header>
        <HeaderText>Produto</HeaderText>
        <HeaderText>Valor</HeaderText>
        <HeaderText>Estoque</HeaderText>
        <HeaderText>Ações</HeaderText>
      </Header>

      {/* Lista de Produtos */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductItem>
            <ProductText>{item.nome}</ProductText>
            <ProductText>R$ {item.valor}</ProductText>
            <ProductText>{item.estoque}</ProductText>
            <ProductActions>
                <ActionButton onPress={() => handleEdit(item)}>
                    {/* <ActionText style ={{color: 'blue'}}>Editar</ActionText> */}
                    <Icon name="edit" size={20} color="blue" />
                </ActionButton>
                <ActionButton onPress={() => handleDelete(item.id)}>
                    {/* <ActionText style ={{color: 'red'}}>Excluir</ActionText> */}
                    <Icon name="trash" size={20} color="red" />
                </ActionButton>
                </ProductActions>
          </ProductItem>
        )}
      />
    </Container>
  );
};

export default ProductCrud;
