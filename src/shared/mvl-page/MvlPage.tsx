import React, { useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import MvlPagination from '../mvl-pagination/MvlPagination';

import './MvlPage.scss';

function MvlPage({ results, limit, total, fetchData, page, setPage, loading, title }: any) {
  useEffect(() => {
    fetchData(page);
  }, [fetchData, page]);

  const PAGES_TO_SHOW = 5;

  const dataList =
    results &&
    results.map((item: any, key: any) => {
      return (
        <Col className="CardContainer" sm={3} key={key}>
          <Card className="Card">
            <Card.Img
              className="CardImg"
              variant="top"
              src={item.imgSrc}
            />
            <Card.Body>
              <Card.Title title={item.title} className="text-truncate">{item.title}</Card.Title>
              {/* <Card.Text>
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </Card.Text> */}
            </Card.Body>
          </Card>
        </Col>
      );
    });

  const pagination =
    results && results.length ? (
      <MvlPagination 
        page={page}
        total={total}
        limit={limit}
        pagesToShow={PAGES_TO_SHOW}
        onChangePage={setPage}
        />
    ) : null;

  return (
    <Container fluid="md" className="MvlPage">
      <h2>{title}</h2>

      <Row className="p-2">{dataList}</Row>

      {/* Pagination */}
      <div className="d-flex justify-content-center pt-3">{pagination}</div>
    </Container>
  );
}

export default MvlPage;
