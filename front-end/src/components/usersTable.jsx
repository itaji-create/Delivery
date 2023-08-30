import PropTypes from 'prop-types';

function UsersTable(props) {
  const { users } = props;
  return (
    <div>
      <h3>Lista de Usuários</h3>
        <div>
          <table>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">E-mail</th>
                <th scope="col">Role</th>
                <th scope="col">Excluir</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="col">{ 'myname' }</th>
                <th scope="col">{ 'username@gmail.com' }</th>
                <th scope="col">{ 'seller' }</th>
                <th scope="col">
                  <button type="button">
                    Excluir
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
}

UsersTable.propTypes = {
  users: PropTypes.arrayOf({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    qtd: PropTypes.number,
    totalPrice: PropTypes.number,
  }).isRequired,
  };

export default UsersTable;
