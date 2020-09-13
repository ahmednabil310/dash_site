import React, { Component } from "react";
import "./Footer.css";
import { Row } from "antd";

export default class FooterCopy extends Component {
  render() {
    return (
      <footer id="section" className="footer">
        <Row justify="space-between">
          <ul className="footer-container">
            <li className="nav-item">
              <a
                href="https://demos.creative-tim.com/black-dashboard/examples/dashboard.html"
                className="nav-link"
              >
                Creative Tim
              </a>
            </li>
            <li className="nav-item">
              <a href="https://demos.creative-tim.com/black-dashboard/examples/dashboard.html">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://demos.creative-tim.com/black-dashboard/examples/dashboard.html"
                className="nav-link"
              >
                Blog
              </a>
            </li>
          </ul>

          <div className="copyright">
            All rights reserved to
            <a
              href="https://demos.creative-tim.com/black-dashboard/examples/dashboard.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Creative Tim
            </a>
          </div>
        </Row>
      </footer>
    );
  }
}
