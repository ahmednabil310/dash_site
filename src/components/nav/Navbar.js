import React, { Component } from "react";
import { Layout, Menu, Avatar } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./Nav.css";
import anime from "../../images/anime.jpg";
const { Header } = Layout;
const { SubMenu } = Menu;
export default class Navbar extends Component {
  render() {
    return (
      <Header className="nav">
        <Link to="/">DASHBOARD</Link>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <i className="fas fa-search "></i>
          </Menu.Item>

          <SubMenu
            title={<i className="fas fa-bell"></i>}
            aria-label="notifications"
          >
            <Menu.Item aria-label="notifications" key="2">
              Mike John responded to your email
            </Menu.Item>
            <Menu.Item key="3">You have 5 more tasks</Menu.Item>
            <Menu.Item key="4">You friend Michael is in town</Menu.Item>
            <Menu.Item key="5">Another notifications</Menu.Item>
            <Menu.Item key="6">Another one</Menu.Item>
          </SubMenu>

          <SubMenu title={<Avatar src={anime} alt="avatar" />}>
            <Menu.Item key="7">Profile</Menu.Item>
            <Menu.Item key="8">Settings</Menu.Item>

            <Menu.Item key="4">Log out</Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
    );
  }
}
