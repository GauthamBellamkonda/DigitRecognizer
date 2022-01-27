import React from "react";
import BoundedCanvas from "./components/BoundedCanvas";
import Prediction from "./components/Prediction";
import CanvasBox from "./components/CanvasBox";
import CroppedCanvas from "./components/CroppedCanvas";
import { Container, Col, Stack, Row, Navbar} from "react-bootstrap";
import {FaGithub, FaHeart} from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <Container fluid="md">
    <Navbar className="navbar" style={{
      textAlign: "center",
    }}>
      Digit Recognizer
    </Navbar>
    <Row
    style={{
      margin: '2vw 2vw'
    }}
    >
      <Col>
      <CanvasBox/>
      </Col>
      <Col>
      <Prediction />
      </Col>
    </Row>
    <Row
    style={{
      margin: '2vw 2vw'
    }}
    >
      <Col>
    <BoundedCanvas/>
    </Col>
    <Col>
    <CroppedCanvas/>
    </Col>
    </Row>
    <div className="text-center" 
    style={{
      fontSize:'10px'
    }}>
      <a href="https://github.com/GauthamBellamkonda/DigitRecognizer"
      style={{
        color: 'black',
      }}
      _hover={{
        color: 'black'
      }} ><FaGithub /></a>
      This app is made with <FaHeart color="red"/> using React, React Bootstrap. 
    </div>
    </Container>
  );
}

export default App;
