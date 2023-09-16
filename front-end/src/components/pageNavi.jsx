import PropTypes from 'prop-types';

function PageNavi({ page }) {
  const t = 3;
  const f = 4;

  return (
    <div>
      <div>
        {page === 1 || (
          <a href={ `/customer/products/?page=${page - 1}` }>« Previous</a>
        )}
        <a href="/customer/products/?page=1">
          1
        </a>
        <a href={ `/customer/products/?page=${page > t ? page - 1 : 2}` }>
          {page > t ? page - 1 : 2}
        </a>
        <a href={ `/customer/products/?page=${page > t ? page : t}` }>
          {page > t ? page : t}
        </a>
        <a href={ `/customer/products/?page=${page > t ? page + 1 : f}` }>
          {page > t ? page + 1 : f}
        </a>
        <a href={ `/customer/products/?page=${page + 1}` }>
          Next »
        </a>
      </div>
    </div>
  );
}

PageNavi.propTypes = {
  page: PropTypes.number,
}.isRequired;

export default PageNavi;
