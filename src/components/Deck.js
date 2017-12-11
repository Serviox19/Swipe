import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  PanResponder
} from 'react-native';
import { Card, Button } from 'react-native-elements';
import moment from 'moment';

export default class Deck extends Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        console.log(gesture);
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: () => {

      }
    });
    this.state = { panResponder, position };
  }

  renderCards() {
    return this.props.data.map(card => {
      return (
        <Animated.View style={this.state.position.getLayout()}>
          <Card
            {...this.state.panResponder.panHandlers}
            image={{ uri: card.poster }}
            imageStyle={{ height: 300 }}
            title={card.title}
            key={card.release_date}
          >
            <Text style={{ marginBottom: 15 }}>{moment(card.release_date).format("MMMM DD YYYY")}</Text>
            <Text style={{ marginBottom: 15 }}>{card.description}</Text>
            <Button
              icon={{ name: 'code' }}
              backgroundColor="#03A9F4"
              title="View Now"
            />
          </Card>
        </Animated.View>
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

const styles = {}
