import React from "react";
import ReactDOM from "react-dom/client";

class ProfilesList extends React.Component {
  render() {
    return <div> profiles list rendered in react!</div>;
  }
}

const profilesList = ReactDOM.createRoot(
  document.getElementById("profiles-list-container")
);
profilesList.render(<ProfilesList />);
