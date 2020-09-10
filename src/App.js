import React, { Component } from "react";
import Navbar from "./components/nav/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import BigChart from "./components/bigchart/BigChart";
import "./App.css";
import Charts from "./components/small charts/Charts";
import { Row, Col } from "antd";
import CardTasks from "./components/tasks/CardTasks";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Row>
            <Col lg={4} xs={24}>
              <Sidebar />
            </Col>
            <Col lg={20} xs={24}>
              <BigChart />
              <Charts />
              <CardTasks />
            </Col>
          </Row>
        </Router>
      </div>
    );
  }
}

export default App;
