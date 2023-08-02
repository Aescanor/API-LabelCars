import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import CreateCar from "./components/create-car.component";
import EditCar from "./components/edit-car.component";
import CarList from "./components/car-list.component";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-car"} className="nav-link">
                  Label Car Gestion des véhicules
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-car"} className="nav-link">
                    Ajouter
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/car-list"} className="nav-link">
                    Voir Liste
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col lg={12}>
              <div className="wrapper">
                <Routes>
                  <Route path="/" element={<CreateCar />} />
                  <Route path="/create-car" element={<CreateCar />} />
                  <Route path="/edit-car/:id" element={<EditCar />} />
                  <Route path="/car-list" element={<CarList />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
