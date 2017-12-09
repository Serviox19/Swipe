import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import Card from './Card';

export default class Deck extends Component {

  renderCards() {
    return this.props.data.map(card => {
      return (
        <Card
          key={card._id}
          text={card.text}
          img={card.img}
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
