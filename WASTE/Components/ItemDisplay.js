import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';


/*＊　ToDo: 嘗試加上有預設值的可客製化問候語 */

export default class Greeting extends Component {
  static defaultProps = {
    // name: 'guest',
  }
  
//   static propTypes = {
//     // name: PropTypes.string,
//     /* if prop is required **/
//     name: PropTypes.string.isRequired,
//   }
  
  render() {
    return (
    <View>
        <Image source={{ uri: this.props.png}}  style={{ width: 200, height: 200 }} />
        <Text>Hello {this.props.name}!</Text>
        <Text>Price: {this.props.price}</Text>
        <Text>Description: {this.props.description}</Text>
    </View>

    );
  }
}
