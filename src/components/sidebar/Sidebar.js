import React, { Component } from "react";
import "antd/dist/antd.css";
import { Menu, Divider } from "antd";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <section className="sidebar">
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
              <span>Dashboard</span>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="2">
            <NavLink to="/">
              <i className="fas fa-atom"></i>
              <span>Icons</span>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="3">
            <NavLink to="/">
              <i className="fas fa-map-marker-alt"></i>
              <span>Maps</span>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="4">
            <NavLink to="/">
              <i className="fas fa-bell"></i>
              <span>Notifications</span>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="5">
            <NavLink to="/">
              <i className="fas fa-user"></i>
              <span>User Profile</span>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="6">
            <NavLink to="/">
              <i className="fas fa-puzzle-piece"></i>
              <span>Table List</span>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="7">
            <NavLink to="/" activeClassName="active">
              <i className="fas fa-align-center"></i>
              <span>Typography</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </section>
    );
  }
}
