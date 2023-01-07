import React from 'react';

function Forms() {
  return (
    <div>
      <div>
        <label htmlFor="vendedor">
          P.Vendedora Responsável
          <select
            name="vendedor"
            id="vendedor"
            onClick={ (e) => console.log(e.target.value) }
          >
            <option value="1">victor</option>
            <option value="2">joão</option>
            <option value="3">itaji</option>
          </select>
        </label>
        <label htmlFor="endereço">
          Endereço
          <input
            type="text"
          />
        </label>
        <label htmlFor="endereço">
          Número
          <input
            type="text"
          />
        </label>
        <button
          type="submit"
        >
          Finalizar pedido
        </button>
      </div>
    </div>
  );
}

export default Forms;
