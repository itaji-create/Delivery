/* eslint-disable react/jsx-max-depth */
import React, { useState } from 'react';
import { requestPost, setToken } from '../utils/requests';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidProperties, setInvalidProperties] = useState(false);
  const [isDisable, setDisable] = useState(true);

  const PASSWORD_MIN_LENGTH = 6;
  const NAME_MIN_LENGTH = 12;
  const emailRegex = /\S+@\S+\.\S+/;
  const emailValidate = emailRegex.test(email);
  const validateName = name.length >= NAME_MIN_LENGTH;
  const passwordValidate = password.length >= PASSWORD_MIN_LENGTH;

  const handleChange = (e) => {
    const inputName = e.target.name;
    if (emailValidate && passwordValidate && validateName) {
      setDisable(false);
    } else {
      setDisable(true);
    }

    if (inputName === 'email') {
      setEmail(e.target.value);
    }
    if (inputName === 'password') {
      setPassword(e.target.value);
    }
    if (inputName === 'name') {
      setName(e.target.value);
    }
  };

  const handleClick = async () => {
    try {
      const { newUser } = await requestPost('/user/signUp', { name, email, password });
      const { token } = await requestPost('/user/token', { email, role: newUser.role });

      setToken(token);
      newUser.token = token;

      localStorage.setItem('user', JSON.stringify(newUser));
      setInvalidProperties(false);

      window.location.href = '/customer/products';
    } catch (error) {
      console.log(error);
      setInvalidProperties(true);
    }
  };

  return (
    <div>
      <header id="login-header">
        <h1>Delivery App</h1>
      </header>
      <div>
        <form className="form-signin w-50 m-auto mt-5">
        <h2 className="mb-3 fw-bold text-light">Register User</h2>
          <div  className="input-login-box">
            <div>
              <label htmlFor="name">
                Name:
                <input
                  type="text"
                  className="form-control mb-2"
                  id="name"
                  placeholder="Type your name"
                  onChange={ handleChange }
                  name="name"
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="email">
                E-mail:
                <input
                  type="email"
                  className="form-control mb-2"
                  id="email"
                  placeholder="Type you E-mail"
                  onChange={ handleChange }
                  name="email"
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="senha">
                Password:
                <input
                  type="password"
                  className="form-control mb-2"
                  id="senha"
                  placeholder="Type you password"
                  onChange={ handleChange }
                  name="password"
                />
              </label>
            </div>
          </div>
          {/* <div className="form-group">
            <label htmlFor="confirmarSenha">
              Confirmar Senha:
              <input
                type="password"
                className="form-control"
                id="confirmarSenha"
                placeholder="Confirme sua senha"
              />
            </label>
          </div> */}
          <div className="my-3 text-center">
            { invalidProperties ? (
              <p>
                revise dados e tente novamente
              </p>
            ) : null }
            <button
              type="button"
              className="btn-outline-custom btn-block"
              disabled={ isDisable }
              onClick={ handleClick }
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;
