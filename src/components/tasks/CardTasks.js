import React, { Component } from "react";
import { Row, Col, Button, Checkbox } from "antd";
import "./CardTasks.css";
export default class CardTasks extends Component {
  onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  render() {
    return (
      <>
        <Row>
          <Col md={24} lg={24}>
            <div className="card-container">
              <div className="card-header ">
                <div>
                  <h4>TASKS(5)</h4>
                  <p>Today</p>
                </div>

                <Button
                  className="icon-container"
                  icon={
                    <div>
                      <i className="fas fa-cog"></i>
                      <i className="fas fa-caret-down"></i>
                    </div>
                  }
                />
              </div>

              <div className="card-body ">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check">
                          <label className="form-check-label">
                            <Checkbox onChange={this.onChange}></Checkbox>
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                      </td>
                      <td>
                        <p className="title">Update the Documentation</p>
                        <p className="text-muted">
                          Dwuamish Head, Seattle, WA 8:47 AM
                        </p>
                      </td>
                      <td className="td-actions text-right">
                        <i className="fas fa-pencil-alt fa-2x"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <label className="form-check-label">
                            <Checkbox onChange={this.onChange}></Checkbox>
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                      </td>
                      <td>
                        <p className="title">GDPR Compliance</p>
                        <p className="text-muted">
                          The GDPR is a regulation that requires businesses to
                          protect the personal data and privacy of Europe
                          citizens for transactions that occur within EU member
                          states.
                        </p>
                      </td>
                      <td className="td-actions text-right">
                        <i className="fas fa-pencil-alt fa-2x"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <label className="form-check-label">
                            <Checkbox onChange={this.onChange}></Checkbox>
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                      </td>
                      <td>
                        <p className="title">Solve the issues</p>
                        <p className="text-muted">
                          Fifty percent of all respondents said they would be
                          more likely to shop at a company{" "}
                        </p>
                      </td>
                      <td className="td-actions text-right">
                        <i className="fas fa-pencil-alt fa-2x"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <label className="form-check-label">
                            <Checkbox onChange={this.onChange}></Checkbox>
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                      </td>
                      <td>
                        <p className="title">Release v2.0.0</p>
                        <p className="text-muted">
                          Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM
                        </p>
                      </td>
                      <td className="td-actions text-right">
                        <i className="fas fa-pencil-alt fa-2x"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <label className="form-check-label">
                            <Checkbox onChange={this.onChange}></Checkbox>
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                      </td>
                      <td>
                        <p className="title">Export the processed files</p>
                        <p className="text-muted">
                          The report also shows that consumers will not easily
                          forgive a company once a breach exposing their
                          personal data occurs.{" "}
                        </p>
                      </td>
                      <td className="td-actions text-right">
                        <i className="fas fa-pencil-alt fa-2x"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <label className="form-check-label">
                            <Checkbox onChange={this.onChange}></Checkbox>
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                      </td>
                      <td>
                        <p className="title">Arival at export process</p>
                        <p className="text-muted">
                          Capitol Hill, Seattle, WA 12:34 AM
                        </p>
                      </td>
                      <td className="td-actions text-right">
                        <i className="fas fa-pencil-alt fa-2x"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}
