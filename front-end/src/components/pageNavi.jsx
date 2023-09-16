import PropTypes from 'prop-types';

function PageNavi({ page }) {
  const t = 3;
  const f = 4;

  return (
    <div>
      <div>
        {page > 1 && (
          <a href={ `/?pg=${page - 1}` }>« Previous</a>
        )}
        <a href="/?pg=1">
          1
        </a>
        <a href={ `/?pg=${page + 1}` }>
          {page > f ? page - 1 : 2}
        </a>
        <a href={ `/?pg${page > f ? page - 1 : t}` }>
          {page > f ? page : t}
        </a>
        <a href={ `/?pg${page > f ? page - 1 : f}` }>
          {page > f ? page + 1 : f}
        </a>
        <a href={ `/?pg=${page - 2}` }>
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
