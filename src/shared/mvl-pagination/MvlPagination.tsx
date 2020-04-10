
import React from "react";
import Pagination from "react-bootstrap/Pagination";

function MvlPagination({ page, total, limit, pagesToShow, onChangePage }: any) {

    const pageCount = Math.floor(total / limit);

    const handlePaginationChange = (page: number) => {
        onChangePage(page);
    };
    
    let items = [];
    const lastPage =
    page + pagesToShow - 1 <= pageCount
        ? page + pagesToShow - 1
        : pageCount;
      for (let number = page; number <= lastPage; number++) {
        items.push(
          <Pagination.Item
            key={number}
            active={number === page}
            onClick={() => handlePaginationChange(number)}
          >
            {number}
          </Pagination.Item>
        );
      }
    
    return (
        <Pagination>
          <Pagination.First
            disabled={page === 1}
            onClick={() => handlePaginationChange(1)}
          />
          <Pagination.Prev
            disabled={page === 1}
            onClick={() => handlePaginationChange(page - 1)}
          />
  
          <Pagination.Ellipsis
            disabled={page === 1}
            onClick={() =>
              handlePaginationChange(
                page - pagesToShow > 1 ? page - pagesToShow : 1
              )
            }
          />
          {items}
          <Pagination.Ellipsis
            disabled={page === lastPage}
            onClick={() =>
              handlePaginationChange(
                page + pagesToShow < pageCount
                  ? page + pagesToShow
                  : pageCount
              )
            }
          />
  
          <Pagination.Next
            disabled={page === lastPage}
            onClick={() => handlePaginationChange(page + 1)}
          />
          <Pagination.Last
            disabled={page === lastPage}
            onClick={() => handlePaginationChange(pageCount)}
          />
        </Pagination>
    );
}

export default MvlPagination;
