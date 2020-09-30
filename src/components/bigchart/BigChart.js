import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import "./BigChart.css";
import { Row, Col } from "antd";
export default class BigChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        legend: false,
        responsive: true,
        scales: {
          yAxes: [
            {
              gridLines: {
                display: false,
                drawOnChartArea: false,
              },
              ticks: {
                fontSize: 13,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
                drawOnChartArea: false,
              },
              ticks: {
                fontSize: 13,
              },
            },
          ],
        },
      },
      data: {
        labels: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ],
        datasets: [
          {
            data: [100, 70, 90, 70, 85, 60, 75, 70, 90, 80, 110, 100],
            backgroundColor: ["#D346B1"],
            pointBackgroundColor: "#D346B1",
            fill: false,
            borderColor: "#D346B1",
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className="container-big">
        <div className="card-body">
          <Row justify="space-between">
            <Col xs={12}>
              <div className="card-title">
                <p>Total Shipments</p>
                <h2>Performance</h2>
              </div>
            </Col>
          </Row>
        </div>
        <Line
          data={this.state.data}
          options={{ responsive: true, legend: false }}
          // height="70px"
        />
        <canvas id="myChart"></canvas>
      </div>
    );
  }
}
