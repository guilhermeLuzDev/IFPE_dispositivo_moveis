import React, { useState, useContext } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { ContactContext } from '../ContactContext';

export default function EdicaoContatoScreen({ route, navigation }) {
    
  const { contato } = route.params;
  const { editarContato, deletarContato } = useContext(ContactContext);

  const [nome, setNome] = useState(contato.nome);
  const [email, setEmail] = useState(contato.email);
  const [telefone, setTelefone] = useState(contato.telefone);

  const handleAlterar = () => {
    editarContato(contato.id, { nome, email, telefone });
    Alert.alert('Sucesso', 'Contato atualizado!');
    navigation.goBack();
  };

  const handleExcluir = () => {
    Alert.alert(
      "Excluir Contato",
      "Tem certeza que deseja excluir este contato?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Excluir", 
          style: "destructive",
          onPress: () => {
            deletarContato(contato.id);
            navigation.goBack();
          } 
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ALTERAÇÃO/EXCLUSÃO DE CONTATOS</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />

      <Text style={styles.label}>Telefone</Text>
      <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} keyboardType="phone-pad" />

      <TouchableOpacity style={[styles.button, styles.btnAlterar]} onPress={handleAlterar}>
        <Text style={styles.buttonText}>Alterar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.btnExcluir]} onPress={handleExcluir}>
        <Text style={styles.buttonText}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f0f0f0', justifyContent: 'center' },
  title: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  label: { fontSize: 16, marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', backgroundColor: '#fff', padding: 10, marginBottom: 15, borderRadius: 5 },
  button: { padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 10 },
  btnAlterar: { backgroundColor: '#1E90FF' },
  btnExcluir: { backgroundColor: '#FF0000' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});