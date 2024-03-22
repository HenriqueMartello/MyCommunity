import React, { useState, useEffect } from 'react';
import { StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ConsultaUsuarios() {
    const [result, setResult] = useState([]);
    const navigation = useNavigation();

    // Consulta de todos usuários no banco de dados | Utilizando GET
    useEffect(() => {
      fetch("http://localhost:5000")
        .then((res) => res.json())
        .then((data) => {
          setResult(data);
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);

    // Excluir Usuário | Utilizando DELETE
    const handleDelete = (id) => {
      if (window.confirm("Tem certeza que deseja excluir estas informações?")) {
        fetch("http://localhost:5000", {
          method: "DELETE",
          body: JSON.stringify({
            IdUsuario: id,
          }),
          headers: { "Content-Type": "application/json" },
        })
        .then(() => {
          // Atualiza a lista de resultados após a exclusão
          setResult(result.filter(item => item.IdUsuario !== parseInt(id)));
        })
        .catch((err) => {
          console.error(err);
        });
      }
    };
  
    // Modificar Usuário | Utilizando PUT
    const handleModify = (id) => {
      navigation.navigate('Cadastro', { id });
    };

    // Componente da Consulta de Usuários
    return (
      <div style={styles.container}>
        <h1>Banco de Dados - Usuários</h1>
        <section>
          {result.map((item, index) => (
            <section key={index}>
              <article>
                <p style={styles.title}>Nome</p>
                <p>{item.nome}</p>
                <p>CPF</p>
                <p>{item.CPF}</p>
                <p>Número Telefônico</p>
                <p>{item.numeroTelefonico}</p>
                <p>Data de Nascimento</p>
                <p>{item.dataNascimento}</p>
                <p>Endereço</p>
                <p>{item.endereco}</p>
                <p>Email</p>
                <p>{item.email}</p>
              </article>
              <div>
                <Button
                  title="Modificar"
                  onPress={() => handleModify(item.IdUsuario)}
                  className="modify_results"
                />
                <Button
                  title="Excluir"
                  color="red"
                  onPress={() => handleDelete(item.IdUsuario)}
                  className="delete_results"
                />
              </div>
            </section>
          ))}
        </section>
      </div>
    );
}

// Estilização dos componentes
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  }
});