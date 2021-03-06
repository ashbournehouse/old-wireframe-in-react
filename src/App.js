import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/stylesheets/master.css';
import Banner from './regions/banner.jsx';
import Sidebar from './regions/sidebar.jsx';
import Content from './regions/content.jsx';
import Footer from './regions/footer.jsx';

<script>'./randomMuppet.js'</script>

class App extends React.Component {
  render() {
    return (
      React.createElement('div', {className:'container'},
        <Banner main="Banner Main Heading" sub="Banner Sub-heading"/>,
        <Sidebar />,
        <Content />,
        <Footer />
      )
    )
  }
}

export default App;
