import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { requestPost, setToken } from '../utils/requests';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisable, setDisable] = useState(true);
  const [loginFailed, setLoginFailed] = useState(false);

  const PASSWORD_MIN_LENGTH = 6;
  const emailRegex = /\S+@\S+\.\S+/;
  const emailValidate = emailRegex.test(email);
  const passwordValidate = password.length >= PASSWORD_MIN_LENGTH;

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
    if (emailValidate && passwordValidate) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const { user, token } = await requestPost('/user/signIn', { email, password });
      setToken(token);
      user.token = token;

      localStorage.setItem('user', JSON.stringify(user));

      window.location.href = '/customer/products';
    } catch (error) {
      setLoginFailed(true);
    }
  };

  return (
    <section>
      <h1>Delivery App</h1>
      <label htmlFor="login">
        Login
        <input
          id="login"
          type="text"
          placeholder="Email..."
          name="email"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          id="password"
          type="password"
          placeholder="Senha"
          name="password"
          onChange={ handleChange }
        />
      </label>
      { loginFailed ? (
        <p>
          email ou senha incorretos, tente novamente
        </p>
      ) : null }
      <button
        type="submit"
        disabled={ isDisable }
        onClick={ (event) => handleClick(event) }
      >
        LOGIN
      </button>
      <Link to="/register">
        <button
          type="submit"
        >
          REGISTER
        </button>
      </Link>
    </section>
  );
}

export default Login;
