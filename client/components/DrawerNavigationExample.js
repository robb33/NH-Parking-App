import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@expo/ex-navigation';
import { Ionicons } from '@expo/vector-icons';
import { Router } from '../main';

export default class DrawerNavigationExample extends Component {
  _renderHeader = () => {
    return (
      <View style={{ height: 180, width: 300 }}>
        <Image
          source={require('../assets/sparkles.jpg')}
          style={styles.header}
        />
      </View>
    );
  };

  _renderTitle = (text: string, isSelected: boolean) => {
    return (
      <Text
        style={[
          styles.buttonTitleText,
          isSelected ? styles.selectedText : null,
        ]}>
        {text}
      </Text>
    );
  };

  _renderIcon = (name: string, isSelected: boolean) => {
    let extraStyle = { marginTop: 2 };
    if (name === 'md-alert') {
      extraStyle = { ...extraStyle, marginLeft: -3 };
    }
    return (
      <Ionicons
        style={[
          styles.icon,
          isSelected ? styles.selectedText : null,
          extraStyle,
        ]}
        name={name}
        size={24}
      />
    );
  };

  render() {
    return (
      <DrawerNavigation
        drawerPosition="right"
        renderHeader={this._renderHeader}
        drawerWidth={300}
        initialItem="home">
        <DrawerNavigationItem
          id="home"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('Back', isSelected)}
          renderIcon={isSelected => this._renderIcon('md-apps', isSelected)}>
          <StackNavigation
            id="root"
            defaultRouteConfig={{
              navigationBar: {
                backgroundColor: '#0084FF',
                tintColor: '#fff',
              },
            }}
            initialRoute={Router.getRoute('home')}
          />
        </DrawerNavigationItem>
       

        <DrawerNavigationItem
          id="parklota"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('Legion Parking', isSelected)}
          renderIcon={isSelected => this._renderIcon('ios-car-outline', isSelected)}>
          <StackNavigation id="parklota" initialRoute={Router.getRoute('parklota')} />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="parklotb"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('Union Square Parking', isSelected)}
          renderIcon={isSelected => this._renderIcon('ios-car-outline', isSelected)}>
          <StackNavigation id="parklotb" initialRoute={Router.getRoute('parklotb')} />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="parklotc"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('Bank Parking Lot', isSelected)}
          renderIcon={isSelected => this._renderIcon('ios-car-outline', isSelected)}>
          <StackNavigation id="parklotc" initialRoute={Router.getRoute('parklotc')} />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="parklotd"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('Borough Parking Lot', isSelected)}
          renderIcon={isSelected => this._renderIcon('ios-car-outline', isSelected)}>
          <StackNavigation id="parklotd" initialRoute={Router.getRoute('parklotd')} />
        </DrawerNavigationItem>

         <DrawerNavigationItem
          id="another"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('About', isSelected)}
          renderIcon={isSelected => this._renderIcon('ios-help-circle-outline', isSelected)}>
          <StackNavigation id="about" initialRoute={Router.getRoute('about')} />
        </DrawerNavigationItem>

      </DrawerNavigation>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 180,
    width: null,
    resizeMode: 'cover',
  },
  buttonTitleText: {
    color: '#222',
    fontWeight: 'bold',
    marginLeft: 18,
  },
  icon: {
    color: '#999',
  },
  selectedText: {
    color: '#0084FF',
  },
  selectedItemStyle: {
    backgroundColor: '#E8E8E8',
  },
});