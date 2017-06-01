import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import pak from '@expo/ex-navigation/package.json';





export default class HomeScreen extends Component {
  /**
    * This is where we can define any route configuration for this
    * screen. For example, in addition to the navigationBar title we
    * could add backgroundColor.
    */
  static route = {
    navigationBar: {
      title: 'About',
      tintColor: '#fff',
      backgroundColor: '#000',

    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ExNavigation</Text>
        <Text style={styles.version}>{pak.version}</Text>

        <StatusBar barStyle="default" />
        

        <Text style={styles.body}>  
        Parking is available in New Hope in parking lots convenient to all locations. See the map below for parking lots.
        There is also metered parking on most streets.
        </Text>


        <Text style={styles.body}>xxxxxxxxxx</Text>
          
        <Text style={styles.body}>  
        Parking is available in New Hope in parking lots convenient to all locations. See the map below for parking lots.
        There is also metered parking on most streets.
        </Text>

        <Text style={styles.body}>xxxxxxxxxx</Text>

        <Text style={styles.body}>  
        Parking is available in New Hope in parking lots convenient to all locations. See the map below for parking lots.
        There is also metered parking on most streets.
        </Text>

        <Text style={styles.body}>xxxxxxxxxx</Text>

        <Text style={styles.body}>  
        Parking is available in New Hope in parking lots convenient to all locations. See the map below for parking lots.
        There is also metered parking on most streets.
        </Text>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    margin: 8,
  },
  version: {
    fontSize: 18,
  },

  body: {
    margin: 4,
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
  },

});
