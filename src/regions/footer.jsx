import React from 'react';
/* import '../assets/stylesheets/footer.css'; */

class Footer extends React.Component {
  render() {
    return (
      React.createElement('div', {
        id: "footer",
        className: "footer",
        style: {backgroundColor:'#339933'},
        },
        "Andrew Biller --- Ashbourne House Technology --- 2022"
      )
    )
  }
}

export default Footer;
