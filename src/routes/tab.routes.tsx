import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {VideosScreen} from '../screens/Videos';
import {DownloadsScreen} from '../screens/Downloads';

const {Navigator, Screen} = createMaterialTopTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: '#6741D9',
        indicatorStyle: {backgroundColor: '#6741D9'},
      }}>
      <Screen name="Videos" component={VideosScreen} />
      <Screen name="Downloads" component={DownloadsScreen} />
    </Navigator>
  );
}
