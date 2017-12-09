import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import { Card, Button } from 'react-native-elements';

export default class Deck extends Component {

  renderCards() {
    return this.props.data.map(card => {
      return (
        <Card
          image={{ uri: card.poster }}
          imageStyle={{ alignSelf: 'stretch' }}
          title={card.title}
          key={card.release_date}
        >
          <Text style={{ marginBottom: 15 }}>{card.release_date}</Text>
          <Text style={{ marginBottom: 15 }}>{card.description}</Text>
          <Button
            icon={{ name: 'code' }}
            backgroundColor="#03A9F4"
            title="View Now"
          />
        </Card>
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

const styles = {
  viewStyle: {

  }
}
