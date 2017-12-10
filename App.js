import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Deck from './src/components/Deck';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentWillMount() {
    axios.get('https://shrouded-scrubland-99138.herokuapp.com/api/movies')
    .then(response => {
      const data = response.data;
      this.setState({ data });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={this.state.data}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: 15
  }
}
