import React from 'react';
/* import '../assets/stylesheets/footer.css'; */

class Footer extends React.Component {
  render() {
    return (
      React.createElement('footer', {
        id: "footer",
        className: "footer",
        style: {
          gridArea:'footer',
          display:'flex',
          flexFlow:'row',
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#666666',
          textAlign:'center',
          },
        },
        React.createElement('h4', {
          style: {
            fontFamily:'Avant Garde, Tahoma, Arial, Sans-Serif',
            fontSize:'1em',
            backgroundColor:'transparent',
            color:'#cccccc',
            margin:'0',
            padding:'0.2em',
            },
          },
          "Andrew Biller --- Ashbourne House Technology --- 2022",
        )
      )
    )
  }
}

export default Footer;
