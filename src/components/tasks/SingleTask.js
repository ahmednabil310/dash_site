import React, { Component } from "react";
import { Checkbox } from "antd";
import "./CardTasks.css";
export default class SingleTask extends Component {
  onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  render() {
    return (
      <tr>
        <td>
          <div className="form-check">
            <Checkbox onChange={this.onChange}></Checkbox>
          </div>
        </td>
        <td>
          <p className="title">{this.props.title}</p>
          <p className="text-muted">{this.props.text}</p>
        </td>
        <td>
          <i className={`fas fa-pencil-alt fa-2x`}></i>
        </td>
      </tr>
    );
  }
}
