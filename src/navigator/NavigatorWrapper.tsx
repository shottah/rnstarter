import React from 'react';
import {StyleSheet, View} from 'react-native';
import Navigator from './Navigator';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './service';

export const NavigatorWrapper = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <View style={styles.container}>
        {/* @todo Add the Navigator */}
        <Navigator />
        <View style={styles.locked}>
          {/* @todo Add the Lock screen */}
          {/* @todo Add any blocking prompts */}
        </View>
        <View style={styles.floating}>{/* @todo Add the Alert logic */}</View>
        {/* @todo Add "Shake for Support" */}
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  floating: {
    display: 'none',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
  },
  locked: {
    display: 'none',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
});
