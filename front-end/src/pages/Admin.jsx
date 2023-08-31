/* eslint-disable react/jsx-max-depth */
import React, { useState, useEffect } from 'react';
import { requestGet, requestPost } from '../utils/requests';
import NavBar from '../components/navBar';
import UsersTable from '../components/usersTable';

function Admin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState();
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
      const select = document.getElementById('role');
      const { value } = select.options[select.selectedIndex];
      const role = value;
      const {
        newUser,
        token,
      } = await requestPost('/user/signUp', { name, email, password, role });

      console.log({ newUser, token });
      setInvalidProperties(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
      setInvalidProperties(true);
    }
  };

  useEffect(() => {
    requestGet('user/getUsers').then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <NavBar
        titlePage="Manage Users"
      />
      <h1>Admin Page</h1>
      <form>
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
        <label htmlFor="role" className="form-label">
          Role:
          <select
            className="form-select"
            required
            name="role"
            id="role"
            defaultValue={ 1 }
          >
            <option value="seller">Seller</option>
            <option value="customer">Customer</option>
          </select>
        </label>
        <button
          type="button"
          className="btn btn-primary btn-block"
          disabled={ isDisable }
          onClick={ handleClick }
        >
          Cadastrar
        </button>
        { invalidProperties ? (
          <p>
            revise dados e tente novamente
          </p>
        ) : null }
      </form>
      <UsersTable users={ users } />
    </div>
  );
}

export default Admin;
