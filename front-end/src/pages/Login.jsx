import React, { useState } from 'react';
import { requestPost } from '../utils/requests';

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
      const { user } = await requestPost('/user/signIn', { email, password });
      console.log(user);
      const { token } = await requestPost('/user/token', { email, role: user.role });
      user.token = token;

      localStorage.setItem('user', JSON.stringify(user));
      console.log(user);
      if (user.role === 'seller') {
        window.location.href = '/seller/orders';
        return;
      }

      if (user.role === 'administrator') {
        window.location.href = '/admin/home';
        return;
      }

      window.location.href = '/customer/products';
    } catch (error) {
      console.log(error);
      setLoginFailed(true);
    }
  };

  return (
    <div>
      <header id="login-header">
        <h1>Delivery App</h1>
      </header>
      <main className="login-main">
        <form className="form-signin w-50 m-auto mt-5">
          <h2 className="mb-3 fw-bold text-light">Login</h2>
          <div className="input-login-box">
            <div className="form-floating">
              <input
                type="email"
                name="email"
                className="form-control mb-2"
                id="floatingInput"
                onChange={ handleChange }
              />
              <label htmlFor="floatingInput">Endereço de E-mail</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                name="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={ handleChange }
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
          </div>
          <div className="my-3 text-center">
            { loginFailed ? (
              <p>
                email ou senha incorretos, tente novamente
              </p>
            ) : null }
            <button
              type="submit"
              className="btn-outline-custom"
              disabled={ isDisable }
              onClick={ (event) => handleClick(event) }
            >
              ENTRAR
            </button>
            <div>
              <sub className="text-light">Ainda não possui uma conta?</sub>
              <a
                href="/register"
                style={ { color: '#f47521' } }
                className="btn fw-bold"
                type="button"
              >
                CLIQUE AQUI
              </a>
            </div>
            <p className="mt-5 text-body-secondary">© 2022–2023</p>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Login;
