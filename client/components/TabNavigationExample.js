import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import { TabNavigation, TabNavigationItem } from '@expo/ex-navigation';
import { Ionicons } from '@expo/vector-icons';
import StreetMap from './StreetMap';
import MapView from 'react-native-maps';

function getColor(isSelected) {
  return isSelected ? '#fff' : '#000';
}

export default class TabNavigationExample extends Component {
  static route = {
    navigationBar: {
      title: 'Tab Navigation',
      backgroundColor: '#000',
    },
  };

state = {
    mapRegion: { latitude: 40.361753549, longitude: -74.9504311417, latitudeDelta: 0.0022, longitudeDelta: 0.0021 }
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };


  _goToFirstTab = () => {
    this.props.navigation.performAction(({ tabs, stacks }) => {
      tabs('tab-navigation').jumpToTab('first');
    });
  };

  _goToSecondTab = () => {
    this.props.navigation.performAction(({ tabs, stacks }) => {
      tabs('tab-navigation').jumpToTab('second');
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TabNavigation
          id="tab-navigation"
          navigatorUID="tab-navigation"
          initialTab="first">
          <TabNavigationItem
            id="first"
            title="First"
            selectedStyle={styles.selectedTab}
            renderTitle={this._renderTitle}
            renderIcon={isSelected => (
              <Ionicons
                name="ios-boat-outline"
                size={24}
                color={getColor(isSelected)}
              />
            )}>
            <View style={styles.row}>
              
              <MapView
                style={{ width: 320, height: 500, borderRadius: 40 }}
                region={this.state.mapRegion}
                onRegionChange={this._handleMapRegionChange}
              />

            </View>
          </TabNavigationItem>
          <TabNavigationItem
            id="second"
            title="Second"
            selectedStyle={styles.selectedTab}
            renderTitle={this._renderTitle}
            renderIcon={isSelected => (
              <Ionicons
                name="ios-bulb-outline"
                size={24}
                color={getColor(isSelected)}
              />
            )}>
            <Image style={styles.gif} source={require('../assets/cat.gif')} />
          </TabNavigationItem>
          <TabNavigationItem
            id="third"
            title="Third"
            selectedStyle={styles.selectedTab}
            renderTitle={this._renderTitle}
            renderIcon={isSelected => (
              <Ionicons
                name="ios-bowtie-outline"
                size={24}
                color={getColor(isSelected)}
              />
            )}>
            <ScrollView>
              <Image
                style={styles.cover}
                source={require('../assets/space.jpg')}
              />
              <View style={styles.article}>
                <View style={styles.row}>
                  <TouchableHighlight
                    style={styles.button}
                    onPress={this._goToFirstTab}>
                    <Text style={styles.buttonText}>FIRST TAB</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={styles.button}
                    onPress={this._goToSecondTab}>
                    <Text style={styles.buttonText}>SECOND TAB</Text>
                  </TouchableHighlight>
                </View>
                <Text style={styles.heading}>
                  The Hitchhiker's Guide to the Galaxy
                </Text>
                <Text style={styles.body}>
                  For instance, on the planet Earth, man had always assumed that he was more intelligent than dolphins because he had achieved so much—the wheel, New York, wars and so on—whilst all the dolphins had ever done was muck about in the water having a good time. But conversely, the dolphins had always believed that they were far more intelligent than man—for precisely the same reasons.
                </Text>
              </View>
            </ScrollView>
          </TabNavigationItem>
        </TabNavigation>
      </View>
    );
  }

  _renderTitle = (isSelected, title) => {
    return (
      <Text style={{ color: getColor(isSelected) }}>
        {title}
      </Text>
    );
  };
}

const IMAGE_SIZE = Dimensions.get('window').width / 2 - 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  row: {
    
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#000',
  },

  image: {
    flex: 0.5,
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    resizeMode: 'cover',
    margin: 4,
    borderRadius: 3,
  },

  cover: {
    flex: 1,
    height: 160,
    width: null,
    resizeMode: 'cover',
  },

  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#0084FF',
    borderRadius: 3,
    marginRight: 8,
  },

  buttonText: {
    fontSize: 13,
    color: '#fff',
  },

  article: {
    padding: 20,
  },

  heading: {
    margin: 4,
    color: '#222',
    fontWeight: 'bold',
    fontSize: 32,
  },

  body: {
    margin: 4,
    color: '#666',
    fontSize: 16,
    lineHeight: 24,
  },

  gif: {
    flex: 1,
    height: null,
    width: null,
    backgroundColor: '#CCC',
  },

  selectedTab: {
    backgroundColor: '#0084FF',
  },
});
