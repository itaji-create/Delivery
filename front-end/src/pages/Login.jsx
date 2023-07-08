import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
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
      setLoginFailed(true);
    }
  };

  return (
    <Container>
      <main className="form-signin w-100 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Delivery App</h1>
          <div className="form-floating">
            <input
              type="email"
              name="email"
              className="form-control"
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
          <div className="form-check text-start my-3">
            { loginFailed ? (
              <p>
                email ou senha incorretos, tente novamente
              </p>
            ) : null }
            <button
              type="submit"
              className="btn btn-primary w-100 py-2"
              disabled={ isDisable }
              onClick={ (event) => handleClick(event) }
            >
              LOGIN
            </button>
            <p>Ainda não possui uma conta?</p>
            <Link to="/register">
              <button className="btn w-100 py-2" type="button">Clique aqui</button>
            </Link>
            <p className="mt-5 mb-3 text-body-secondary">© 2022–2023</p>
          </div>
        </form>
      </main>
    </Container>
  );
}

export default Login;
