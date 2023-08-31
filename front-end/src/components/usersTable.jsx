import PropTypes from 'prop-types';

function UsersTable(props) {
  const { users } = props;
  return (
    <div>
      <h2>Users:</h2>
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
                <button className="btn btn-danger" type="button">
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
