import React from 'react';
import './style.scss';

type Props = {
  currentPage: number,
  countPage: number,
  setCurrentPage: (value: number) => void,
}

const Pagination = ({
  currentPage,
  countPage,
  setCurrentPage,
}: Props) => {
  const getPaginationMenu = () => {
    const result = [];
    let prevCount = currentPage >= 4 ? 4 : currentPage;
    let nextCount = (countPage - currentPage) >= 4 ? 4 : (countPage - currentPage);
    const resultCount = prevCount + nextCount;
    let tmpCounter = 0;
    if (currentPage > 4) result.push(-1);
    for (let i = 0; i <= resultCount; i += 1) {
      if (prevCount !== 0) {
        result.push(currentPage - prevCount);
        prevCount -= 1;
      } else if (prevCount === 0 && tmpCounter === 0) {
        result.push(currentPage);
        tmpCounter = 1;
      } else if (nextCount !== 0) {
        result.push(currentPage + tmpCounter);
        tmpCounter += 1;
        nextCount -= 1;
      } else break;
    }
    if (countPage - currentPage > 4) result.push(-2);
    return result;
  };

  return (
    <div className="paginator">
      {
        getPaginationMenu().map(page => (
          <div
            role="button"
            tabIndex={0}
            onClick={(e) => { e.preventDefault(); setCurrentPage(page); }}
            key={page}
            className={`paginator-item${page === currentPage ? ' active' : ''}`}
          >
            {page === -1 || page === -2 ? '...' : page }
          </div>
        ))
      }
    </div>
  );
};

export default Pagination;
