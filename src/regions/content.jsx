import React from 'react';
/* import '../assets/stylesheets/content.css'; */

class Content extends React.Component {
  render() {
    return (
      React.createElement('div', {
        id: "content",
        className: "content",
        style: {backgroundColor:'#333333'},
        },
        "Content"
      )
    )
  }
}

export default Content;
