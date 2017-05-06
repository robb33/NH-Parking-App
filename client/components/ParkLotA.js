import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableHighlight, StatusBar } from "react-native";
import MapView from 'react-native-maps';
import MarkerTypes from 'react-native-maps';
// import flagBlueImg from './assets/flag-blue.png';

class ParkLotA extends Component {


static route = {
    navigationBar: {
      title: 'Legion Parking',
      tintColor: '#fff',
      backgroundColor: '#000',
    },
  };


state = {
    mapRegion: { latitude: 40.35892, longitude: -74.95005, latitudeDelta: 0.0022, longitudeDelta: 0.0021 }
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  render() {
    return (
      <View style={styles.container}>

              <MapView
                style={styles.mapz}
                // style={{ width: 320, height: 200, borderRadius: 40 }}
                initialRegion={{
                  latitude: 40.35892,
                  longitude: -74.95005,
                  latitudeDelta: 0.0022,
                  longitudeDelta: 0.0022
                }}
                scrollEnabled={false}
              />
              <MapView.Marker
              title="This is a title"
              description="This is a description"
              coordinate={this.state.mapRegion}
            />
              

      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },

  mapz: {
    width: 320,
    height: 500,
    borderWidth: 5,
    borderRadius: 40,
    borderColor: "#D0021B"

  },

});


export default ParkLotA;



