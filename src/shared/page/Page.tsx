import React, { useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Pagination from "react-bootstrap/Pagination";

function Page({ results, limit, total, fetchData, page, setPage, loading }: any) {
  useEffect(() => {
    fetchData(page);
  }, [fetchData, page]);

  const PAGES_TO_SHOW = 5;

  const pageCount = Math.floor(total / limit);

  const dataList =
    results &&
    results.map((item: any, key: any) => {
      return (
        <Col sm={3} key={key}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={item.imgSrc}
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              {/* <Card.Text>
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </Card.Text> */}
            </Card.Body>
          </Card>
        </Col>
      );
    });

  const handlePaginationChange = (page: number) => {
    setPage(page);
  };

  let items = [];
  const lastPage =
    page + PAGES_TO_SHOW - 1 <= pageCount
      ? page + PAGES_TO_SHOW - 1
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

  const pagination =
    results && results.length ? (
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
              page - PAGES_TO_SHOW > 1 ? page - PAGES_TO_SHOW : 1
            )
          }
        />
        {items}
        <Pagination.Ellipsis
          disabled={page === lastPage}
          onClick={() =>
            handlePaginationChange(
              page + PAGES_TO_SHOW < pageCount
                ? page + PAGES_TO_SHOW
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
    ) : null;

  return (
    <Container fluid="md">
      <Row className="p-2">{dataList}</Row>

      {/* Pagination */}
      <div className="d-flex justify-content-center pt-3">{pagination}</div>
    </Container>
  );
}

export default Page;
