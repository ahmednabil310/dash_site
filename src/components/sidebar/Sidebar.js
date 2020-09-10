import React, { Component } from "react";
import "antd/dist/antd.css";
import { Menu, Divider } from "antd";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="logo">
          <NavLink to="/" className="first-word">
            CT
          </NavLink>
          <NavLink to="/">CREATIVE TIM</NavLink>
        </div>
        <Divider className="divider" />
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="1">
            <NavLink to="/">
              <i className="fas fa-chart-pie"></i>
              Dashboard
            </NavLink>
          </Menu.Item>

          <Menu.Item key="2">
            <NavLink to="/">
              <i className="fas fa-atom"></i>
              Icons
            </NavLink>
          </Menu.Item>

          <Menu.Item key="3">
            <NavLink to="/">
              <i className="fas fa-map-marker-alt"></i>
              Maps
            </NavLink>
          </Menu.Item>

          <Menu.Item key="4">
            <NavLink to="/">
              <i className="fas fa-bell"></i>
              Notifications
            </NavLink>
          </Menu.Item>

          <Menu.Item key="5">
            <NavLink to="/">
              <i className="fas fa-user"></i>
              User Profile
            </NavLink>
          </Menu.Item>

          <Menu.Item key="6">
            <NavLink to="/">
              <i className="fas fa-puzzle-piece"></i>
              Table List
            </NavLink>
          </Menu.Item>

          <Menu.Item key="7">
            <NavLink to="/" activeClassName="active">
              <i className="fas fa-align-center"></i>
              Typography
            </NavLink>
          </Menu.Item>

          <Menu.Item key="8">
            <NavLink to="/" activeClassName="active">
              <i className="fas fa-globe-europe"></i>
              Rtl Support
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
