import React from "react";
import "./LiveViewCards.css";
import { Card } from "react-bootstrap";

const LiveViewCards = () => {
  return (
    <div
      className="view-cards container-fluid"
      style={{
        backgroundColor: "#F5F5F5",
        paddingTop: "49px",
        paddingBottom: "46px",
      }}
    >
      <Card
        className="card"
        style={{
          borderRadius: "10px",
          width: "272px",
          marginLeft: "107px",
          border: "none",
        }}
      >
        <Card.Body>
          <Card.Title className="card-title">50</Card.Title>
          <Card.Text className="card-bottom" style={{ fontSize: "14px" }}>
            ACTIEVE BESTELLINGEN
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        className="card"
        style={{ borderRadius: "10px", width: "272px", border: "none" }}
      >
        <Card.Body>
          <Card.Title className="card-title">30</Card.Title>
          <Card.Text className="card-bottom">RESTAURANTS</Card.Text>
        </Card.Body>
      </Card>
      <Card
        className="card"
        style={{
          borderRadius: "10px",
          width: "272px",
          marginRight: "107px",
          border: "none",
        }}
      >
        <Card.Body>
          <Card.Title
            className="card-title"
            style={{ fontSize: "48px", fontWeight: "100" }}
          >
            120
          </Card.Title>
          <Card.Text className="card-bottom">GEBRUIKERS</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LiveViewCards;
