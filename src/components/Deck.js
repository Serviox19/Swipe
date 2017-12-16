import React, { Component } from 'react';
import {
  View,
  ListView,
  Text,
  Animated,
  PanResponder,
  Dimensions
} from 'react-native';
import { Card, Button } from 'react-native-elements';
import moment from 'moment';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESH = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

export default class Deck extends Component {
  static defaultProps = {
    onSwipeLeft: () => {},
    onSwipeRight: () => {}
  }

  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx });
      },
      onPanResponderRelease: (event, gesture) => {
        this.detectRotate(gesture);
      }
    });
    this.state = { panResponder, position, index: 0 };
  }

  detectRotate(gesture) {
    if (gesture.dx > SWIPE_THRESH) {
      this.animateOut('right');
    } else if (gesture.dx < -SWIPE_THRESH) {
      this.animateOut('left');
    } else {
      this.resetPosition();
    }
  }

  animateOut(direction) {
    //important line of code
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(this.state.position, {
      toValue: { x: x * 2, y: 0 },
      duration: SWIPE_OUT_DURATION
    }).start(() => this.onSwipeComplete(direction));
  }

  onSwipeComplete(direction) {
    const { onSwipeLeft, onSwipeRight, data } = this.props;
    const item = data[this.state.index];

    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
    this.state.position.setValue({ x: 0, y: 0 });
    this.setState({ index: this.state.index + 1 });
  }

  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: { x: 0 }
    }).start();
  }

  getCardStyle() {
    const { position } = this.state;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg']
    })

    return {
      ...position.getLayout(),
      transform: [{ rotate }]
    }
  }

  renderCards() {
    return this.props.data.map((card, i) => {
      if (i < this.state.index) {
        return null;
      }
      if (i === this.state.index) {
        return (
          <Animated.View key={0} style={this.getCardStyle()}>
            <Card
              {...this.state.panResponder.panHandlers}
              image={{ uri: card.poster }}
              imageStyle={{ height: 300 }}
              title={card.title}
              key={card._id}
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
        )
      }
      return (
        <View key={card._id}>
          <Card
            image={{ uri: card.poster }}
            imageStyle={{ height: 300 }}
            title={card.title}
          >
            <Text style={{ marginBottom: 15 }}>{moment(card.release_date).format("MMMM DD YYYY")}</Text>
            <Text style={{ marginBottom: 15 }}>{card.description}</Text>
            <Button
              icon={{ name: 'code' }}
              backgroundColor="#03A9F4"
              title="View Now"
            />
          </Card>
        </View>
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
