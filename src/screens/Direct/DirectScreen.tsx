import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSwipe} from '../../hooks/useSwipe';
import {RootStackParamList} from '../../navigation/RootNavigator.types';

const DirectScreen = (): React.JSX.Element => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onSwipeRight = () => {
    navigation.goBack();
  };

  const {onTouchStart, onTouchEnd} = useSwipe(() => {}, onSwipeRight, 6);

  return (
    <View
      style={styles.container}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}>
      <Text>Direct Screen</Text>
    </View>
  );
};

export default DirectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
});
