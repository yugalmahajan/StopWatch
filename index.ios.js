/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Main from './Main';
import LapComponent from './Components/lapComponent';
import tabBar from './tabBar';

AppRegistry.registerComponent('StopWatch', () => tabBar);
