export const isAuthenticated = (username, password) => {
    // Aqui você pode verificar os usuários e senhas permitidos
    const users = [
        { username: 'COLAB1', password: 'senha1' },
        { username: 'COLAB2', password: 'senha2' },
        { username: 'COLAB3', password: 'senha3' },
        { username: 'COLAB', password: '2024' }  // Novo usuário COLAB com senha 2024
    ];

    // Verifica se há algum usuário que corresponde às credenciais fornecidas
    return users.some(user => user.username === username && user.password === password);
};

export const logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
};
