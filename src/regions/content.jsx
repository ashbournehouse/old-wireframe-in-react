import React from 'react';
/* import '../assets/stylesheets/content.css'; */

const paragraphStyle={
  fontFamily:'Palatino, Serif',
  fontSize:'1.2em',
  backgroundColor:'transparent',
  color:'#ffffff',
  margin:'0',
  border:'0',
  padding:'1em',
  }

class Content extends React.Component {
  render() {
    return (
      React.createElement('main', {
        id: "content",
        className: "content",
        style: {
          gridArea:'content',
          backgroundColor:'#333333',
          margin:'0',
          border:'0',
          padding:'2em',
          },
        },
        React.createElement('h3', {
          style: {
            fontFamily:'Avant Garde, Tahoma, Arial, Sans-Serif',
            fontSize:'2em',
            backgroundColor:'transparent',
            color:'#cccccc',
            margin:'0',
            border:'0',
            padding:'0.2em',
            }
          },
          "Here is the Main Content"
        ),
        React.createElement('p', {style: paragraphStyle,},
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ',
          'at molestie nulla. Vestibulum consectetur tortor et quam ultricies',
          'finibus vel vitae nisi. Phasellus enim arcu, viverra vel semper non, ',
          'tincidunt sit amet est. Vivamus at ante et nulla varius facilisis vel ',
          'vel lectus. Aliquam sollicitudin, nisl vitae rhoncus malesuada, mi ',
          'lectus efficitur tortor, vestibulum dignissim urna quam id velit. ',
          'Curabitur lorem quam, aliquam sed metus sit amet, venenatis egestas neque. ',
          'Pellentesque habitant morbi tristique senectus et netus et malesuada ',
          'fames ac turpis egestas. Fusce venenatis laoreet tellus in commodo. ',
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, ',
          'per inceptos himenaeos. Aliquam porta, ex sed porta sollicitudin, ante ',
          'erat mattis est, vitae interdum orci elit ac justo. In rhoncus nibh',
          'nec lacus malesuada, ac euismod mi congue. Nunc sit amet arcu aliquet,',
          'bibendum nunc sit amet, rutrum tortor. Proin viverra lacus ac libero ',
          'sagittis suscipit. Nullam sapien diam, ultrices vel lobortis in, ',
          'consectetur ut leo. Nullam euismod blandit est, ac blandit nulla mollis a.',
        ),
        React.createElement('p', {style: paragraphStyle,},
          'Mauris sed nisi id velit suscipit gravida. Mauris turpis magna, ',
          'mattis vitae urna vitae, sagittis varius purus. Vivamus ullamcorper ',
          'maximus ante, in scelerisque nisl fringilla in. Vestibulum ante ',
          'purus, feugiat ut ornare eu, tincidunt vitae est. Morbi gravida ',
          'purus ac augue pulvinar, quis facilisis nunc finibus. Nullam varius ',
          'urna est. Aenean sapien ligula, imperdiet tempor nisl sed, molestie ',
          'pulvinar eros. Vestibulum fringilla ultrices ornare. Integer dictum ',
          'velit ligula, non feugiat mauris pretium vel. Phasellus egestas ex ',
          'ac ornare molestie. Vestibulum ex ipsum, ullamcorper nec auctor eu, ',
          'mattis at felis. Maecenas hendrerit interdum tristique. Fusce ',
          'lobortis felis sed justo aliquet efficitur.'
        ),
        React.createElement('p', {style: paragraphStyle,},
          'Aliquam enim magna, molestie a elementum in, accumsan ac ',
          'eros. Sed vel efficitur orci. Suspendisse et rutrum sem, ',
          'at lacinia diam. Cras vitae ex nisl. Etiam pharetra urna quis ',
          'urna facilisis vehicula. Sed vitae accumsan ipsum. Maecenas eu ',
          'maximus odio. Quisque et sodales ipsum. Proin tincidunt posuere ',
          'nibh, nec finibus lorem pellentesque vitae. Suspendisse eget ',
          'leo fermentum nulla iaculis egestas.'
        ),
        React.createElement('p', {style: paragraphStyle,},
          'Fusce vel arcu eu neque ultricies tempor. Donec iaculis quam ',
          'sit amet dui maximus scelerisque eget gravida diam. Vestibulum ',
          'nisl justo, tempus ac risus quis, gravida laoreet justo. Sed ',
          'hendrerit venenatis diam non pretium. Nulla fermentum odio ',
          'eleifend ex maximus, id condimentum elit placerat. Pellentesque ',
          'habitant morbi tristique senectus et netus et malesuada fames ',
          'ac turpis egestas. Mauris sollicitudin, dolor quis iaculis ',
          'commodo, dolor leo condimentum felis, in condimentum elit nunc ',
          'semper neque. Fusce hendrerit lobortis arcu. Praesent maximus ',
          'dapibus ultrices. ',
        ),
        React.createElement('p', {style: paragraphStyle,},
          'Vivamus neque purus, dapibus ut mollis eu, luctus in elit. ',
          'Etiam pharetra hendrerit tellus sit amet fermentum. Nullam ',
          'aliquet risus lacinia, lobortis justo porttitor, aliquet eros. ',
          'Ut dapibus, ipsum non venenatis pulvinar, est nibh molestie ',
          'ipsum, eget placerat sapien est sit amet risus. Nulla arcu ',
          'nunc, sodales et imperdiet eu, pellentesque nec leo. Maecenas ',
          'rhoncus porttitor pulvinar. Phasellus elementum, arcu eu ',
          'eleifend rutrum, felis ligula tincidunt nisl, non convallis ',
          'lorem felis vitae risus. In eu ornare nunc. Etiam at enim ',
          'tortor. Maecenas molestie lorem nec ornare sollicitudin. ',
          'Aenean condimentum augue rutrum dui posuere tincidunt. ',
          'Proin vitae libero eget lectus lacinia commodo. Donec auctor ',
          'hendrerit bibendum. Vestibulum faucibus orci non dolor ',
          'fringilla egestas. Praesent non interdum augue. Phasellus ',
          'tincidunt quis massa quis interdum. ',
        ),
      )
    )
  }
}

export default Content;
