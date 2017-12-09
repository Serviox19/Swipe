import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Deck from './src/components/Deck';

const DATA = [
  {_id: 1, text: 'Card 1', img: ''},
  {_id: 2, text: 'Card 2', img: ''},
  {_id: 3, text: 'Card 3', img: ''}
];

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
}
