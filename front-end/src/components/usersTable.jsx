import PropTypes from 'prop-types';

function UsersTable(props) {
  const { users } = props;
  console.log(users);
  return (
    <div>
      <h3>Lista de Usuários</h3>
      {users && users.map((user) => (
        <div key="21">user </div>
      )) }
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
