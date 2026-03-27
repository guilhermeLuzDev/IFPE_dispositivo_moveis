import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const fazerLogin = () => {
    if (!login || !senha) {
      Alert.alert('Erro', 'Preencha o login e a senha!');
      return;
    }
    navigation.navigate('ListaContatos');
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesome name="user-circle-o" size={120} color="black" />
      </View>

      <Text style={styles.label}>Login</Text>
      <TextInput style={styles.input} value={login} onChangeText={setLogin} />
      
      <Text style={styles.label}>Senha</Text>
      <TextInput style={styles.input} secureTextEntry value={senha} onChangeText={setSenha} />
      
      <TouchableOpacity style={[styles.button, styles.btnLogin]} onPress={fazerLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.btnCadastro]} 
        onPress={() => navigation.navigate('CadastroUsuario')}
      >
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, justifyContent: 'center', backgroundColor: '#F5EBE1' },
  iconContainer: { alignItems: 'center', marginBottom: 50 },
  label: { fontSize: 16, marginBottom: 5, color: '#333' },
  input: { borderWidth: 1, borderColor: '#ccc', backgroundColor: '#fff', padding: 10, marginBottom: 20, borderRadius: 5 },
  button: { padding: 15, borderRadius: 5, alignItems: 'center', marginBottom: 10 },
  btnLogin: { backgroundColor: '#1E90FF' },
  btnCadastro: { backgroundColor: '#FF0000' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});