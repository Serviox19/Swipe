import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { Card } from 'react-native-elements';

export default class Deck extends Component {

  renderCards() {
    return this.props.data.map(card => {
      return (
        <Card
          key={card._id}
          title={card.text}
          image={{ uri: card.img }}
        />
      );
    });
  }

  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
    )
  }
}

const styes = {

}
