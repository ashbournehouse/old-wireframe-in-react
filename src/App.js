import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/stylesheets/app.css';
import Banner from './regions/banner.jsx';
import Sidebar from './regions/sidebar.jsx';
import Content from './regions/content.jsx';
import Footer from './regions/footer.jsx';


class App extends React.Component {
  render() {
    return (
      React.createElement('div', {},
        <Banner />,
        <Sidebar />,
        <Content />,
        <Footer />
      )
    )
  }
}

export default App;
