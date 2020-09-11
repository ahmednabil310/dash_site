import React, { Component } from "react";
import Navbar from "./components/nav/Navbar";
import { HashRouter } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import BigChart from "./components/bigchart/BigChart";
import "./App.css";
import Charts from "./components/small charts/Charts";
import { Row, Col } from "antd";
import CardTasks from "./components/tasks/CardTasks";
import FooterCopy from "./components/footer/FooterCopy";
import Bottombar from "./components/bottombar/Bottombar";
class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Navbar />
          {window.innerWidth < 577 ? (
            <Row gutter={16}>
              <Col lg={4} xs={0}>
                <Sidebar />
              </Col>

              <Col lg={20} xs={24}>
                <BigChart />
                <Charts />
                <CardTasks />
                <FooterCopy />
                <Bottombar />
              </Col>
            </Row>
          ) : (
            <Row gutter={16}>
              <Col lg={4} xs={3}>
                <Sidebar />
              </Col>

              <Col lg={20} xs={21}>
                <BigChart />
                <Charts />
                <CardTasks />
                <FooterCopy />
              </Col>
            </Row>
          )}
        </HashRouter>
      </div>
    );
  }
}

export default App;
