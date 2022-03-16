import React from 'react';
import SidebarButton from './sidebar-button.jsx';

/* import '../assets/stylesheets/sidebar.css'; */

const controlNames = [
  "Control 1",
  "Control 2",
  "Control 3",
  "Control 4",
  "Control 5",
  "Control 6",
  "Control 7",
  ]

class Sidebar extends React.Component {
  render() {
    return (
      React.createElement('div', {
        id: "sidebar",
        className: "sidebar",
        style: {
          gridArea:'sidebar',
          backgroundColor:'#999999',
          display:'flex',
          flexFlow:'column',
          justifyContent:'flex-start',
          alignItems:'center',
          margin:'0',
          border:'0',
          padding:'1em 0 2em 0',
          },
        },
        React.createElement('h4', {
          style: {
            fontFamily:'Avant Garde, Tahoma, Arial, Sans-Serif',
            fontSize:'1.2em',
            backgroundColor:'transparent',
            color:'#000066',
            margin:'0',
            border:'0',
            padding:'0.2em 0.2em 1em 0.2em',
            },
          },
          "Controls",
        ),
        controlNames.map((controlName) => (
          <SidebarButton key={controlName} control={controlName}/>
          )
        )
      )
    )
  }
}

export default Sidebar;
