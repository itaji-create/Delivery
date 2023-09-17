/* eslint-disable react/jsx-max-depth */
import React, { useState, useEffect } from 'react';
import { requestGet, requestPost } from '../utils/requests';
import NavBar from '../components/navBar';
import UsersTable from '../components/usersTable';

function Admin() {
  const [users, setUsers] = useState();

  const handleClick = async (event, url) => {
    try {
      const data = {};
      const inputFields = event.target.parentNode.querySelectorAll('input, select');
      inputFields.forEach((e) => {
        data[e.name] = e.value;
      });
      const res = await requestPost(url, data);
      console.log(res);

      window.location.reload();
    } catch ({ response, message }) {
      console.log(response.data);
      alert(`${message} - ${response.data.message}
Please review the data and try again`);
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
      <br />
      <form>
        <h3 className="title">Register User</h3>
        <label htmlFor="nome">
          Name:
          <input
            type="text"
            className="form-control"
            placeholder="Type your name"
            name="name"
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            className="form-control"
            placeholder="Ex: newUser@gmail.com"
            name="email"
          />
        </label>
        <label htmlFor="senha">
          Password:
          <input
            type="password"
            className="form-control"
            placeholder="At least 6 characters"
            name="password"
          />
        </label>
        <label htmlFor="role" className="form-label">
          Role:
          <select
            className="form-select"
            required
            name="role"
          >
            <option value="seller">Seller</option>
            <option value="customer">Customer</option>
          </select>
        </label>
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={ (e) => handleClick(e, '/user/signUp') }
        >
          Register
        </button>
      </form>
      <br />
      <form>
        <h3 style={ { color: 'white', fontWeight: '700' } }>Register Product</h3>
        <label htmlFor="nome">
          Name:
          <input
            type="text"
            className="form-control"
            placeholder="Product's name"
            name="name"
          />
        </label>
        <label htmlFor="email">
          Price:
          <input
            type="number"
            className="form-control"
            placeholder="Ex: 159.66"
            name="price"
          />
        </label>
        <label htmlFor="senha">
          Image URL:
          <input
            type="text"
            className="form-control"
            name="urlImage"
            placeholder="Ex: https://mlstatic.com.jpg"
          />
        </label>
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={ (e) => handleClick(e, '/product/register') }
        >
          Register
        </button>
      </form>
      <br />
      <UsersTable users={ users } />
    </div>
  );
}

export default Admin;
