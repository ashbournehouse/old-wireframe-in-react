import React from 'react';
import {randomMuppet} from '../random-muppet.mjs';

import bannerimage from '../assets/images/banner-image-ajb.jpg';
/* import '../assets/stylesheets/header.css'; */

class Banner extends React.Component {
  render() {
    return (
      React.createElement('header',
        {id:'banner',
         className:'banner',
         style: {
          gridArea:'banner',
          display:'flex',
          flexFlow:'row',
          justifyContent:'flex-start',
          alignItems:'center',
          backgroundColor:'#993333',
          margin:'0',
          border:'0',
          padding:'0',
          },
        },
        React.createElement('div', {
          id:'banner-image',
          className:'banner-image',
          style: {

            }
          },
          React.createElement('img', {
            src:(bannerimage),
            alt:"Can't find the picture",
            height:'148px',
            width:'202px',
            },
            null
          ),
        ),
        React.createElement('div', {
          id:'banner-text',
          className:'banner-text',
          style: {
            width:'100%',
            display:'flex',
            flexFlow:'column',
            justifyContent:'center',
            alignItems:'center',
            }
          },
          React.createElement('h1', {
            id:'banner-main-heading',
            className:'banner-sub-heading',
            style: {
              fontFamily:'Avant Garde, Tahoma, Arial, Sans-Serif',
              fontSize:'3.2em',
              backgroundColor:'transparent',
              color:'#cccccc',
              margin:'0',
              padding:'0.2em',
              },
            },
            "Banner Main Heading"
          ),
          React.createElement('h2', {
            id:'banner-main-heading',
            className:'banner-sub-heading',
            style: {
              fontFamily:'Avant Garde, Tahoma, Arial, Sans-Serif',
              fontSize:'1.6em',
              backgroundColor:'transparent',
              color:'#cccccc',
              margin:'0',
              padding:'0.2em',
              },
            },
            "Banner Sub-heading"
          ),
          React.createElement('div', {
            id:'debug-strip',
            className:'debug-strip',
            style: {
              width:'100%',
              height:'24px',
              backgroundColor:'#000000',
              margin:'0',
              border:'0',
              padding:'0',
              },
            },
            React.createElement('p', {
              style: {
                height:'16px',
                fontFamily:'Avant Garde, Tahoma, Arial, Sans-Serif',
                fontSize:'0.8em',
                backgroundColor:'transparent',
                color:'#ffff00',
                margin:'0 0 0 2px',
                padding:'0.2em 0.2em 0.2em 1em',
                },
              },
              "Random muppet is: ", sessionStorage.getItem("muppet"),

            ),
          ),
        )
      )
    )
  }
}

export default Banner;
