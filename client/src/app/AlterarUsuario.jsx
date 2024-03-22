import React, { useState, useEffect } from 'react';

export default function AlterarUsuario({ route }) {
    const { id } = route?.params || {}; // Obtém o ID do usuário da navegação
    const [usuario, setUsuario] = useState({
        nome: '',
        CPF: '',
        numeroTelefonico: '',
        dataNascimento: '',
        endereco: '',
        email: ''
    });

    useEffect(() => {
        // Função para buscar os detalhes do usuário pelo ID
        console.log("ID do usuário: ", id)
        if (id) {
            const buscarUsuario = async () => {
                try {
                    const response = await fetch(`http://localhost:5000/${id}`);
                    const data = await response.json();
                    setUsuario(data);
                } catch (error) {
                    console.error(error);
                }
            };

            buscarUsuario(); // Chama a função de busca ao montar o componente
        }
    }, [id]);

    // Função para enviar as alterações do usuário para o backend
    const handleSalvarAlteracoes = async () => {
        try {
            const response = await fetch("http://localhost:5000", {
                method: "PUT",
                body: JSON.stringify(usuario),
                headers: { "Content-Type": "application/json" },
            });
            if (response.ok) {
                // Redireciona para a página de consulta após a alteração
                window.location.href = "/";
            } else {
                console.error('Erro ao salvar as alterações');
            }
        } catch (error) {
            console.error(error);
        }
    };

    // Função para atualizar o estado do usuário ao editar os campos
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario(prevUsuario => ({
            ...prevUsuario,
            [name]: value
        }));
    };

    // Componente da tela de alteração de cadastro
    return (
        <div className="alterar-cadastro">
            <h1>Alterar Cadastro</h1>
            <form>
                <div>
                    <label>Nome:</label>
                    <input type="text" name="nome" value={usuario.nome} onChange={handleChange} />
                </div>
                <div>
                    <label>CPF:</label>
                    <input type="text" name="CPF" value={usuario.CPF} onChange={handleChange} />
                </div>
                <div>
                    <label>Número Telefônico:</label>
                    <input type="text" name="numeroTelefonico" value={usuario.numeroTelefonico} onChange={handleChange} />
                </div>
                <div>
                    <label>Data de Nascimento:</label>
                    <input type="text" name="dataNascimento" value={usuario.dataNascimento} onChange={handleChange} />
                </div>
                <div>
                    <label>Endereço:</label>
                    <input type="text" name="endereco" value={usuario.endereco} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" value={usuario.email} onChange={handleChange} />
                </div>
                <button type="button" onClick={handleSalvarAlteracoes}>Salvar Alterações</button>
            </form>
        </div>
    );
}
