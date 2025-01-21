import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login/Login'; 
import Home  from './src/pages/Home/index';
import Settings from './src/pages/Settings/index';
import Cart from './src/pages/Cart';
import Payment from './src/pages/Cart/payment';
import ProductCrud from './src/pages/Settings/product';
import ConfigScreen from './src/pages/Settings/configButton';
import ProfileScreen from './src/pages/Login/profile';
import ChangePasswordScreen from './src/pages/Login/changePasswor';
import ForgotPasswordScreen from './src/pages/Login/forgotPassword';
import SignupScreen from './src/pages/Login/singUp';


const Stack = createStackNavigator();

class App extends Component {
  

  render() {
    return (
      <NavigationContainer>
        
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" 
                        component={Login}
                        options={{headerShown: false}} />
          <Stack.Screen name="Home" 
                        component={Home} 
                        options={{headerShown: false, headerTitle: 'Loja'}}
                        />
          <Stack.Screen name="Settings" 
                        component={Settings} 
                        options={{headerShown: false}} 
                        />    
          <Stack.Screen name="Cart" 
                        component={Cart} 
                        options={{headerShown: false}} 
                        />
          <Stack.Screen name="Payment" 
                        component={Payment} 
                        options={{headerShown: false}}
                         />
          <Stack.Screen name="ProductCrud"
                        component={ProductCrud}
                        options={{headerShown: false}} 
                        />
          <Stack.Screen name="Config" component={ConfigScreen} />
          <Stack.Screen name="Profile" 
                        component={ProfileScreen}
                        options={{headerShown: false}}
                         />
          <Stack.Screen name="ChangePassword"
                        component={ChangePasswordScreen}
                        options={{headerShown: false}} 
                        />

          <Stack.Screen name="ForgotPassword"
                        component={ForgotPasswordScreen}
                        options={{headerShown: false}} 
                        />
          <Stack.Screen name="Signup"
                        component={SignupScreen}
                        options={{headerShown: false}} 
                        />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
