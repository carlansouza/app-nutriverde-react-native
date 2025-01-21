import React from "react";
import styled from "styled-components/native";
import ConfigButton from "../Settings/configButton";

import { ScrollView } from "react-native";

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Header = styled.View`
  padding: 20px;
  background-color: #02aa6d;
  border-radius: 10px;
  align-items: center;
  margin-bottom: 20px;
`;

const UsernameText = styled.Text`
  font-size: 28px;
  color: white;
  font-weight: bold;
`;

const UserTypeTag = styled.Text`
  margin-top: 10px;
  padding: 5px 10px;
  background-color: ${(props) => (props.userType === "Admin" ? "#ff6347" : "#87ceeb")};
  color: white;
  font-size: 14px;
  border-radius: 20px;
  text-transform: uppercase;
`;

const InfoContainer = styled.View`
  padding: 15px;
  background-color: white;
  border-radius: 10px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 5px;
  elevation: 5;
`;

const InfoText = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
  color: #333;
`;

const CustomContainerProfile = styled.View`
  flex: 1;
  margin-top: 10px;
  background-color: #f5f5f5;
`;

const FieldsetContainer = styled.View`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px 8px;
    margin-bottom: 15px;
`;

const LegendText = styled.Text`
    font-size: 18px;
    color: #02aa6d;
    font-weight: bold;
    margin-bottom: 1px;
    position: absolute;
    top: -14px;
    left: 15px;
    padding: 0 5px;
`;

const Input = styled.TextInput`
    font-size: 18px;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
`;

const Fieldset = ({ legend, children }) => (
    <FieldsetContainer>
        <LegendText>{legend}</LegendText>
        {children}
    </FieldsetContainer>
);

const ProfileScreen = ({ route }) => {
  // Simula os dados de usuário
  const user = {
    name: "Maria Oliveira",
    userType: "Admin", // ou "User"
    email: "maria.oliveira@email.com",
    registeredDate: "12/01/2023",
    adrress: "Rua dos Bobos",
    number: "0",
    district: "Vila do Chaves",
    city: "São Paulo",
    state: "SP",
    zipCode: "00000-000",
    country: "Brasil",
    cpf: "000.000.000-00",
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container>
            <ConfigButton />  
            <Header>
                <UserTypeTag userType={user.userType}>{user.userType}</UserTypeTag>
                <UsernameText>{user.name}</UsernameText>
                <InfoText>Data de Cadastro: {user.registeredDate}</InfoText>
            </Header>

            <CustomContainerProfile>
                <Fieldset legend="Informações Pessoais">
                    <Input placeholder="Nome" value={user.name} />
                    <Input placeholder="E-mail" value={user.email} />
                    <Input placeholder="CPF" value={user.cpf} />
                </Fieldset>

                <Fieldset legend="Endereço">
                    <Input placeholder="Rua" value={user.adrress} />
                    <Input placeholder="Número" value={user.number} />
                    <Input placeholder="Bairro" value={user.district} />
                    <Input placeholder="Cidade" value={user.city} />
                    <Input placeholder="Estado" value={user.state} />
                    <Input placeholder="País" value={user.country} />
                    <Input placeholder="CEP" value={user.zipCode} />
                </Fieldset>
            </CustomContainerProfile>
            
        </Container>
    </ScrollView>
  );
};

export default ProfileScreen;
