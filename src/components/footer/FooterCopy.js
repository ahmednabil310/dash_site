import React, { Component } from "react";
import "./Footer.css";
import { Row } from "antd";

export default class FooterCopy extends Component {
  render() {
    return (
      <footer className="footer">
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
            <li>
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
            ©<script>document.write(new Date().getFullYear())</script>20202018
            made with <i className="fas fa-heart"></i> by
            <a
              href="https://demos.creative-tim.com/black-dashboard/examples/dashboard.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Creative Tim
            </a>
            for a better web.
          </div>
        </Row>
      </footer>
    );
  }
}
