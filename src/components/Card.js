import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Card extends Component {
  render() {
    return (
      <View style={styles.view}>
        <View style={styles.container}>
          <Image
            uri={this.props.img}
            style={styles.image}
          />
          <View style={styles.item}>
            <View style={styles.button}>
              <Text>{this.props.text}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  view: {
    height: '55%',
    width: '90%',
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    width: '100%',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#000'
  },
  image: {
    height: '75%'
  },
  item: {
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 2,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderRadius: 2,
    borderColor: '#000'
  },
  button: {
    width: '90%',
    height: 50,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
