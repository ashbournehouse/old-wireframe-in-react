import React from 'react';
/* import '../assets/stylesheets/sidebar.css'; */

class Sidebar extends React.Component {
  render() {
    return (
      React.createElement('div', {
        id: "sidebar",
        className: "sidebar",
        style: {backgroundColor:'#999933'},
        },
        "Sidebar"
      )
    )
  }
}

export default Sidebar;
