import React, { useState } from 'react';
import './Login.css'; // Importa o arquivo de estilos CSS

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    if (username === 'usuario' && password === 'senha') {
      alert('Login bem-sucedido!');
    } else {
      alert('Usuário ou senha incorretos. Tente novamente.');
    }
  };

return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-container">
        <label htmlFor="username">Usuário:</label>
        <input
          type="text"
          id="username"
          placeholder="Digite seu usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      
      <div className="button-container">
        <button className="button" onClick={handleLogin}>Entrar</button>
</div>    
  <div className="regist-link">
           <div> <a href="/register" className="link">Registrar</a></div>
           <div> <a href="/forgot-password" className="link">Esqueci a Senha</a></div>
  </div>
    </div>
  );  
}

export default Login;
