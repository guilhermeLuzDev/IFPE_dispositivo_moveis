import React, { useState, useContext } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { ContactContext } from '../ContactContext';

export default function CadastroContatoScreen({ navigation }) {
  const { adicionarContato } = useContext(ContactContext);
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const salvarContato = () => {
    if (!nome || !telefone) {
      Alert.alert('Erro', 'Nome e telefone são obrigatórios!');
      return;
    }
    
    adicionarContato({ nome, email, telefone });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CADASTRO DE CONTATO</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />

      <Text style={styles.label}>Telefone</Text>
      <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} keyboardType="phone-pad" />

      <TouchableOpacity style={styles.button} onPress={salvarContato}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f0f0f0', justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  label: { fontSize: 16, marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', backgroundColor: '#fff', padding: 10, marginBottom: 15, borderRadius: 5 },
  button: { backgroundColor: '#3CB371', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});