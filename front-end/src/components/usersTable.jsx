import PropTypes from 'prop-types';
import { deleteItem } from '../utils/requests';

function UsersTable(props) {
  const { users } = props;

  const handleClick = async (id, name) => {
    try {
      const confirmacao = confirm(
        `Tem certeza de que deseja excluir o usuário ${name}?`,
      );

      if (confirmacao) {
        await deleteItem('user', id);

        alert(`Usuário ${name} foi excluído.`);
        window.location.reload();
      } else {
        alert('Exclusão cancelada.');
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div>
      <h3 style={ { color: 'white', fontWeight: '700' } }>Users</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Role</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user, index) => (
            <tr key={ user.id }>
              <th scope="row">
                {index + 1}
              </th>
              <th scope="col">{ user.name }</th>
              <th scope="col">{ user.email }</th>
              <th scope="col">{ user.role }</th>
              <th scope="col">
                <button
                  onClick={ () => handleClick(user.id, user.name) }
                  className="btn btn-danger"
                  type="button"
                  name={ user.email }
                >
                  X
                </button>
              </th>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}

UsersTable.propTypes = {
  users: PropTypes.arrayOf({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
};

export default UsersTable;
