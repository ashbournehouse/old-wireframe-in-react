import React from 'react';
import {randomMuppet} from '../random-muppet.mjs';

/* import '../assets/stylesheets/sidebar-button.css'; */
import '../assets/stylesheets/sidebar-button.css';

class SidebarButton extends React.Component {
  render() {
    const controlName = this.props.control
    return (
      React.createElement('button', {
        id: "sidebar-button",
        className: "sidebar-button",
        onClick: () => {
          console.log(`${controlName} clicked`);
          sessionStorage.setItem("muppet", randomMuppet())
          window.location.reload(true);
          return false;
          },
        },
        controlName,
      )
    )
  }
}

export default SidebarButton;
