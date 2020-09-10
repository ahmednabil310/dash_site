import React, { Component } from "react";
import { Button } from "antd";
import SingleTask from "./SingleTask";
import "./CardTasks.css";
export default class CardTasks extends Component {
  render() {
    return (
      <>
        <div className="card-container">
          <div className="card-header ">
            <div>
              <h4>TASKS(5)</h4>
              <p>Today</p>
            </div>
            <Button
              aria-label="settings-icon"
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
                <SingleTask
                  title="GDPR Compliance"
                  text=" The GDPR is a regulation that requires businesses to
                      protect the personal data and privacy of Europe citizens
                      for transactions that occur within EU member states."
                />

                <SingleTask
                  title="Solve the issues"
                  text=" Fifty percent of all respondents said they would be more
                      likely to shop at a company"
                />

                <SingleTask
                  title="Release v2.0.0"
                  text="Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM"
                />

                <SingleTask
                  title="Export the processed files"
                  text="The report also shows that consumers will not easily
                      forgive a company once a breach exposing their personal
                      data occurs."
                />

                <SingleTask
                  title="Arival at export process"
                  text=" Capitol Hill, Seattle, WA 12:34 AM"
                />
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
