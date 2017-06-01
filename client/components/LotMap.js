import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableHighlight } from "react-native";
import MapView from 'react-native-maps';
import MarkerTypes from 'react-native-maps';

class LotMap extends Component {
  

state = {
    mapRegion: { latitude: 40.361753549, longitude: -74.9504311417, latitudeDelta: 0.0022, longitudeDelta: 0.0021 }
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  render() {
    return (
      <View style={styles.container}>

              <Text style={styles.txtpara}> Lot Map </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },

  mapz: {
    width: 320,
    height: 500,
    borderWidth: 5,
    borderRadius: 40,
    borderColor: "#D0021B"

  },

  txtpara: {
    flex: 1,
    alignItems: 'center',
    color: '#fff',
  },




});


export default LotMap;



