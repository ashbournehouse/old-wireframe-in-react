import React from 'react';
import {randomMuppet} from '../random-muppet.mjs';

/* import '../assets/stylesheets/sidebar-button.css'; */
import '../assets/stylesheets/sidebar-button.css';

class SidebarButton extends React.Component {
  render() {
    const controlName = this.props.control;
    var msgPrefix = "";
    var msgColour = "#ffff00";
    return (
      React.createElement('button', {
        id: "sidebar-button",
        className: "sidebar-button",
        onClick: () => {
          console.log(`${controlName} clicked`);
          if (controlName == "Random") {
            sessionStorage.setItem("muppet", randomMuppet());
            msgPrefix = "Random muppet is:";
            msgColour = "#00ff00";
            }
          else {
            sessionStorage.setItem("muppet", controlName);
            msgPrefix = "Muppet is:";
            msgColour = "#ffff00";
            }
          var debugPlace = document.getElementById('debug-string');
          debugPlace.innerText = `${msgPrefix} ${sessionStorage.getItem("muppet")}`;
          debugPlace.style.color = msgColour;
          },
        },
        controlName,
      )
    )
  }
}

export default SidebarButton;
