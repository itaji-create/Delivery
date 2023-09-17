import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function PageNavi({ page, next }) {
  const t = 3;
  const f = 4;

  const selected = (number) => {
    const links = document.querySelectorAll('a');
    links.forEach((link) => {
      link.classList.remove('selected');
    });

    const linkAtivo = document.getElementById(`link-${number}`);
    if (linkAtivo) {
      linkAtivo.classList.add('selected');
    }
  };

  useEffect(() => {
    selected(page);
  }, [page]);

  return (
    <div>
      <div className="pagenavi">
        {page === 1 || (
          <a
            className="pn-btn"
            href={ `/customer/products/?page=${page - 1}` }
          >
            « Previous
          </a>
        )}
        <a
          id="link-1"
          className="pn-btn"
          href="/customer/products/?page=1"
        >
          1
        </a>
        <a
          className="pn-btn"
          href={ `/customer/products/?page=${page > t ? page - 1 : 2}` }
          id={ `link-${page > t ? page - 1 : 2}` }
        >
          {page > t ? page - 1 : 2}
        </a>
        <a
          id={ `link-${page > t ? page : t}` }
          className="pn-btn"
          href={ `/customer/products/?page=${page > t ? page : t}` }
        >
          {page > t ? page : t}
        </a>
        {!next && (
          <a
            className="pn-btn"
            id={ `link-${page > t ? page + 1 : f}` }
            href={ `/customer/products/?page=${page > t ? page + 1 : f}` }
          >
            {page > t ? page + 1 : f}
          </a>)}
        {!next && (
          <a className="pn-btn" href={ `/customer/products/?page=${page + 1}` }>
            Next »
          </a>
        )}
      </div>
    </div>
  );
}

PageNavi.propTypes = {
  page: PropTypes.number,
}.isRequired;

export default PageNavi;
