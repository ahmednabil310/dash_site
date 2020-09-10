import React, { Component } from "react";
import { Row, Col } from "antd";
import { Line, Bar } from "react-chartjs-2";
import "./Charts.css";
export default class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: [
          {
            data: [80, 100, 70, 80, 120, 80],
            backgroundColor: ["#D346B1"],
            pointBackgroundColor: "#D346B1",
            fill: false,
            borderColor: "#D346B1",
          },
        ],
      },
      data2: {
        labels: ["USA", "GER", "AUS", "UK", "RO", "BR"],
        datasets: [
          {
            data: [53, 20, 12, 80, 100, 45],
            backgroundColor: [
              "#293352",
              "#293352",
              "#293352",
              "#293352",
              "#293352",
              "#293352",
            ],

            borderColor: [
              "#0083F5",
              "#0083F5",
              "#0083F5",
              "#0083F5",
              "#0083F5",
              "#0083F5",
            ],
            borderWidth: 1,
          },
        ],
      },
      data3: {
        labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
        datasets: [
          {
            data: [90, 27, 60, 12, 80],
            backgroundColor: ["#00f2c3"],
            pointBackgroundColor: "#00f2c3",
            fill: false,
            borderColor: "#00f2c3",
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className="chart">
        <Row>
          <Col xs={24} lg={8}>
            <div className="container-small">
              <div className="card-body">
                <Row justify="space-between">
                  <Col xs={24}>
                    <div className="card-titlee">
                      <p>Total Shipments</p>
                      <h3>
                        <i className="fas fa-bell"></i>
                        763,215
                      </h3>
                    </div>
                  </Col>
                </Row>
              </div>
              <Line
                data={this.state.data}
                options={{ responsive: true, legend: false }}
                // height="160px"
              />
            </div>
          </Col>
          <Col xs={24} lg={8}>
            <div className="container-small">
              <div className="card-body">
                <Row justify="space-between">
                  <Col xs={24}>
                    <div className="card-titlee">
                      <p>Daily Sales</p>
                      <h3>
                        <i className="fas fa-truck"></i>
                        3,500€
                      </h3>
                    </div>
                  </Col>
                </Row>
              </div>
              <Bar
                data={this.state.data2}
                options={{ responsive: true, legend: false }}
                // height="160px"
              />
            </div>
          </Col>
          <Col xs={24} lg={8}>
            <div className="container-small2">
              <div className="card-body">
                <Row justify="space-between">
                  <Col xs={24}>
                    <div className="card-titlee">
                      <p>Completed Tasks</p>
                      <h3>
                        <i className="fas fa-clipboard-check"></i>12,100K
                      </h3>
                    </div>
                  </Col>
                </Row>
              </div>
              <Line
                data={this.state.data3}
                options={{ responsive: true, legend: false }}
                // height="160px"
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
