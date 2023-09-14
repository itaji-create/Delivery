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
      const {
        newUser,
        token,
      } = await requestPost('/user/signUp', { name, email, password });

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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Cadastro de Usuário</h2>
          <form>
            <div className="form-group">
              <label htmlFor="nome">
                Nome:
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  placeholder="Digite seu nome"
                  onChange={ handleChange }
                  name="name"
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email:
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Digite seu email"
                  onChange={ handleChange }
                  name="email"
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="senha">
                Senha:
                <input
                  type="password"
                  className="form-control"
                  id="senha"
                  placeholder="Digite sua senha"
                  onChange={ handleChange }
                  name="password"
                />
              </label>
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
            { invalidProperties ? (
              <p>
                revise dados e tente novamente
              </p>
            ) : null }
            <button
              type="button"
              className="btn btn-primary btn-block"
              disabled={ isDisable }
              onClick={ handleClick }
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
