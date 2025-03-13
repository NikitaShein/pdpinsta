import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import SearchScreen from '../../screens/SearchScreen/SearchScreen';
import {
  IconNames,
  NavigationScreens,
  RootStackParamList,
} from '../RootNavigator.types';
import CreateContentScreen from '../../screens/CreateContentScreen/CreateContentScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import ReelsScreen from '../../screens/ReelsScreen/ReelsScreen';
import Icon from '../../components/Icon/Icon';
import {BASIC_COLORS} from '../../theme/colors';

const Tabs = () => {
  const Tab = createBottomTabNavigator<RootStackParamList>();

  const renderHomeIcon = () => (
    <Icon
      name={IconNames.HOME}
      strokeColor={BASIC_COLORS.BLACK}
      color={BASIC_COLORS.BLACK}
    />
  );

  const renderSearchIcon = () => (
    <Icon
      name={IconNames.SEARCH}
      color={BASIC_COLORS.BLACK}
      strokeColor={BASIC_COLORS.BLACK}
    />
  );

  const renderCreateContentIcon = () => (
    <Icon name={IconNames.CREATE_CONTENT} color={BASIC_COLORS.BLACK} />
  );

  const renderReelsIcon = ({focused}: {focused: boolean}) => (
    <Icon
      name={IconNames.REELS}
      strokeColor={focused ? BASIC_COLORS.BLACK : BASIC_COLORS.WHITE}
    />
  );

  const renderProfileIcon = () => <Icon name={IconNames.PROFILE} />;
  return (
    <Tab.Navigator
      backBehavior="history"
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 40,
        },
      }}>
      <Tab.Screen
        name={NavigationScreens.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: renderHomeIcon,
        }}
      />
      <Tab.Screen
        name={NavigationScreens.SEARCH}
        component={SearchScreen}
        options={{
          tabBarIcon: renderSearchIcon,
        }}
      />
      <Tab.Screen
        name={NavigationScreens.CREATE_CONTENT}
        component={CreateContentScreen}
        options={{
          tabBarIcon: renderCreateContentIcon,
        }}
      />

      <Tab.Screen
        name={NavigationScreens.REELS}
        component={ReelsScreen}
        options={{
          tabBarIcon: renderReelsIcon,
        }}
      />

      <Tab.Screen
        name={NavigationScreens.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: renderProfileIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
