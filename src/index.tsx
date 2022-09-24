/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {HomeScreen} from './screen';

import * as Menu from './data-fake/menu';
import {FlatList} from 'react-native';

const ContainerScreen = () => {
  // return <HomeScreen />;

  return <FlatList data={Menu} renderItem={} />;
};

export default ContainerScreen;
