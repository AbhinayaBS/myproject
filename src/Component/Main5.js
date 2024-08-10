import React from 'react';
import './Main5.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Eye, Heart, Pencil, Star, Book, List } from 'react-bootstrap-icons'; // Import specific icons

const Main5 = () => {
  const features = [
    {
      icon: <Eye />,
      title: 'Keep track of every film you\'ve ever watched',
      description: 'or just start from the day you join'
    },
    {
      icon: <Heart />,
      title: 'Show some love for your favorite films, lists, and reviews',
      description: 'with a "like"'
    },
    {
      icon: <Pencil />,
      title: 'Write and share reviews, and follow friends and other members',
      description: 'to read theirs'
    },
    {
      icon: <Star />,
      title: 'Rate each film on a five-star scale (with halves)',
      description: 'to record and share your reaction'
    },
    {
      icon: <Book />,
      title: 'Keep a diary of your film watching',
      description: 'and upgrade to Pro for comprehensive stats'
    },
    {
      icon: <List />,
      title: 'Compile and share lists of films on any topic',
      description: 'and keep a watchlist of films to see'
    }
  ];

  return (
    <Container className="main5-container">
      <h2>MovieNow lets you...</h2>
      <Row className="main5-grid">
        {features.map((feature, index) => (
          <Col md={4} key={index} className="main5-card-col">
            <Card className="main5-card">
              <Card.Body>
                <div className="main5-icon">{feature.icon}</div>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Main5;
