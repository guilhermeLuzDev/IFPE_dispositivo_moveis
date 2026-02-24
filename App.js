import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContactProvider } from './src/ContactContext';

// Importação das telas que vamos criar
import LoginScreen from './src/screens/LoginScreen';
import CadastroUsuarioScreen from './src/screens/CadastroUsuarioScreen';
import ListaContatosScreen from './src/screens/ListaContatosScreen';
import CadastroContatoScreen from './src/screens/CadastroContatoScreen';
import EdicaoContatoScreen from './src/screens/EdicaoContatoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ContactProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="CadastroUsuario" component={CadastroUsuarioScreen} options={{ title: 'Cadastro de Usuários' }} />
          <Stack.Screen name="ListaContatos" component={ListaContatosScreen} options={{ title: 'Lista de Contatos', headerBackVisible: false }} />
          <Stack.Screen name="CadastroContato" component={CadastroContatoScreen} options={{ title: 'Novo Contato' }} />
          <Stack.Screen name="EdicaoContato" component={EdicaoContatoScreen} options={{ title: 'Editar Contato' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContactProvider>
  );
}