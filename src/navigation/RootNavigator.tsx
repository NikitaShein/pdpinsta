import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {NavigationScreens, RootStackParamList} from './RootNavigator.types';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {BASIC_COLORS} from '../theme/colors';

import Tabs from './Tabs/Tabs';
import DirectScreen from '../screens/Direct/DirectScreen';
import FilmingScreen from '../screens/FilmingScreen/FilmingScreen';
import RecommendationsFeedScreen from '../screens/RecommendationsFeedScreen/RecommendationsFeedScreen';

const MainStack = createStackNavigator<RootStackParamList>();

const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: BASIC_COLORS.WHITE,
  },
};

const MainNavigator = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <MainStack.Navigator>
        <MainStack.Screen
          name={NavigationScreens.TABS}
          component={Tabs}
          options={{headerShown: false}}
        />
        <MainStack.Screen
          name={NavigationScreens.DIRECT}
          component={DirectScreen}
          options={{headerShown: false}}
        />
        <MainStack.Screen
          name={NavigationScreens.FILMING}
          component={FilmingScreen}
          options={{
            headerShown: false,
            animation: 'slide_from_left',
          }}
        />
        <MainStack.Screen
          name={NavigationScreens.RECOMMENDATIONS_FEED}
          component={RecommendationsFeedScreen}
          options={{
            headerShown: false,
            animation: 'scale_from_center',
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
