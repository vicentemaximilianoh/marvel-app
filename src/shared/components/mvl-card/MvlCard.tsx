
import React from "react";
import Card from "react-bootstrap/Card";

import './MvlCard.scss';

const MvlCard = ({imgSrc, title, onClickCard}: any) => {


  return (

    <Card className="Card" onClick={onClickCard}>
    <Card.Img
      className="CardImg"
      variant="top"
      src={imgSrc}
    />
    <Card.Body>
      <Card.Title title={title} className="text-truncate">{title}</Card.Title>
      {/* <Card.Text>
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </Card.Text> */}
    </Card.Body>
  </Card>
  )
}

export default MvlCard;