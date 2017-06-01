import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { TabNavigation, TabNavigationItem } from '@expo/ex-navigation';
import { Ionicons } from '@expo/vector-icons';
import StreetMap from './StreetMap';
import LotMap from './LotMap';
import MainMap from './MainMap'
import MapView from 'react-native-maps';
import { Router } from '../main';

function getColor(isSelected) {
  return isSelected ? '#ff3030' : '#fff';
}

export default class Homescreen extends Component {
  static route = {
    navigationBar: {
      title: 'right here',
      // tabBarLabel: 'Notifications',
      backgroundColor: '#000',
      // renderTitle: {this._renderTitle},
      // renderTitle: {route.title},
      // renderTitle={isSelected => this._renderTitle('first', isSelected)},
      // 
      // title(params) {
      // return `Greeting for ${params.name}`;
      // },
      // 
      // 
      // 
      // 
    },
  };


  // _goToFirstTab = () => {
  //   this.props.navigation.performAction(({ tabs, stacks }) => {
  //     tabs('tab-navigation').jumpToTab('first');
  //   });
  // };

 //  _goToSecondTab = () => {
 //    this.props.navigation.performAction(({ tabs, stacks }) => {
 //      tabs('tab-navigation').jumpToTab('second');
 //    });
 //  };


 // _goToThirdTab = () => {
 //    this.props.navigation.performAction(({ tabs, stacks }) => {
 //      tabs('tab-navigation').jumpToTab('third');
 //    });
 //  };

  render() {
    return (
      <View style={styles.container}>

        <TabNavigation

          id="tab-navigation"
          navigatorUID="tab-navigation"
          initialTab="first"
          //changes color of tab
          translucent={true}
          tabBarStyle={styles.tabBar}

          >
          
          <TabNavigationItem
            id="first"
            title="here"
            selectedStyle={styles.selectedTab}
            renderTitle={this._renderTitle}


            // renderTitle={isSelected => this._renderTitle('first', isSelected)}


            renderIcon={isSelected => (
              <Ionicons
                name="ios-map-outline"
                size={24}
                color={getColor(isSelected)}
              />
            )}>


            

            <View style={styles.container}>
              <MainMap/>
            </View>

          </TabNavigationItem>
          
          <TabNavigationItem
            id="second"
            title="second"
            selectedStyle={styles.selectedTab}
            renderTitle={this._renderTitle}
            renderIcon={isSelected => (
              
              <Ionicons
                name="ios-car-outline"
                size={24}
                color={getColor(isSelected)}
              />

            )}>

            <View style={styles.container}>
              
              <StreetMap/>

            </View>
          
          </TabNavigationItem>
          
          


              <TabNavigationItem
                id="third"
                title="third"
                selectedStyle={styles.selectedTab}
                renderTitle={this._renderTitle}
                renderIcon={isSelected => (
          
                    <Ionicons
                name="ios-settings-outline"
                size={24}
                color={getColor(isSelected)}
              />
                )}>

                <View style={styles.container}>
              
              <LotMap/>

            </View>

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
        alignItems: 'center',
  },

  row: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#000',
    justifyContent: 'space-between',
  },

  row2: {
    padding: 20,
    backgroundColor: '#000',
    justifyContent: 'space-between',
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
    width: 40,
    height: 40,
    paddingVertical: 4,
    paddingHorizontal: 4,
    backgroundColor: '#0084FF',
    borderRadius: 3,
    marginRight: 8,
  },

  buttonbottom: {
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
    backgroundColor: '#000',
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
    backgroundColor: '#000',

  },

  gif: {
    flex: 1,
    height: null,
    width: null,
    backgroundColor: '#CCC',
  },

  tabBar: {
    backgroundColor: "#000"
  },

  selectedTab: {
    backgroundColor: '#0084FF',
  },

  mapz: {
    width: 320,
    height: 500,
    borderWidth: 5,
    borderRadius: 40,
    borderColor: "#D0021B"

  },




});
