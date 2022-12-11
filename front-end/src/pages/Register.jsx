import React, { useState } from 'react';
// import MyContext from '../context/Context';
import { requestPost } from '../utils/requests';

function Register() {
  //   const { setUser, name, setName } = useContext(MyContext);
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
      console.log(inputName);
      setName(e.target.value);
    }
  };

  const handleClick = async () => {
    try {
      const register = await requestPost('/user/signUp', { name, email, password });
      //   setUser(register);
      localStorage.setItem('user', JSON.stringify(register));
      setInvalidProperties(false);

      window.location.href = '/customer/products';
    } catch (error) {
      console.log(error);
      setInvalidProperties(true);
    }
  };

  return (

    <div>
      <header>
        <h2>Cadastro</h2>
      </header>
      <div>
        <form>
          <label htmlFor="nome">
            Nome
            <input
              type="text"
              className="input-name"
              placeholder="Seu nome"
              onChange={ handleChange }
              name="name"
            />
          </label>

          <label htmlFor="email">
            Email
            <input
              type="text"
              className="input-email"
              placeholder="Digite seu email"
              onChange={ handleChange }
              name="email"
            />
          </label>

          <label htmlFor="senha">
            Senha
            <input
              type="password"
              className="input-password"
              placeholder="Digite sua senha"
              onChange={ handleChange }
              name="password"
            />
          </label>

          { invalidProperties ? (
            <p>
              revise dados e tente novamente
            </p>
          ) : null }

          <button
            type="button"
            disabled={ isDisable }
            onClick={ handleClick }
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
export default Register;
