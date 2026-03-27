import React, { createContext, useState } from 'react';

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contatos, setContatos] = useState([
    { id: '1', nome: 'Marcos Andrade', telefone: '81 988553424', email: 'mand@gmail.com' },
    { id: '2', nome: 'Patrícia Tavares', telefone: '81 998765332', email: 'paty@gmail.com' },
    { id: '3', nome: 'Rodrigo Antunes', telefone: '81 987765525', email: 'rodrigo@gmail.com' },
  ]);

  const adicionarContato = (novoContato) => {
    setContatos([...contatos, { id: Date.now().toString(), ...novoContato }]);
  };

  const editarContato = (id, dadosAtualizados) => {
    setContatos(contatos.map(contato => contato.id === id ? { ...contato, ...dadosAtualizados } : contato));
  };

  const deletarContato = (id) => {
    setContatos(contatos.filter(contato => contato.id !== id));
  };

  return (
    <ContactContext.Provider value={{ contatos, adicionarContato, editarContato, deletarContato }}>
      {children}
    </ContactContext.Provider>
  );
};