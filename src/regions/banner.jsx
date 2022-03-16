import React from 'react';
/* import '../assets/stylesheets/header.css'; */

class Banner extends React.Component {
  render() {
    return (
      React.createElement('div',
        {id: "banner",
         className: "banner",
         style: {
          backgroundColor:'#993333',
          height:'180px',
          width:'100%'
          },
        },
        "Banner"
      )
    )
  }
}

export default Banner;
