import React from 'react';
/* import '../assets/stylesheets/sidebar-button.css'; */
import '../assets/stylesheets/sidebar-button.css';

class SidebarButton extends React.Component {
  render() {
    const controlName = this.props.control
    return (
      React.createElement('div', {
        id: "sidebar-button",
        className: "sidebar-button",
/*        style: {
          height:'2em',
          width:'80%',
          display:'flex',
          flexFlow:'column',
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#cccccc',
          margin:'1px',
          borderTop:'4px solid #dddddd',
          borderRight:'4px solid #bbbbbb',
          borderBottom:'4px solid #bbbbbb',
          borderTop:'4px solid #dddddd',
          padding:'0',
          },
*/
        },
        controlName,
      )
    )
  }
}

export default SidebarButton;
