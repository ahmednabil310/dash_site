import React, { Component } from "react";
import "./Bottombar.css";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
export default class Bottombar extends Component {
  render() {
    return (
      <section className="bottom-bar container-fluid">
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="1">
            <NavLink to="/">
              <i className="fas fa-chart-pie"></i>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="2">
            <NavLink to="/">
              <i className="fas fa-atom"></i>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="3">
            <NavLink to="/">
              <i className="fas fa-map-marker-alt"></i>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="4">
            <NavLink to="/">
              <i className="fas fa-bell"></i>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="5">
            <NavLink to="/">
              <i className="fas fa-user"></i>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="6">
            <NavLink to="/">
              <i className="fas fa-puzzle-piece"></i>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="7">
            <NavLink to="/" activeClassName="active">
              <i className="fas fa-align-center"></i>
            </NavLink>
          </Menu.Item>
        </Menu>
      </section>
    );
  }
}
