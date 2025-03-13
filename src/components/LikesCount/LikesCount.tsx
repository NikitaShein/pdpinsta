import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import Icon from '../Icon/Icon';
import {getRandom} from '../../utils/getRandom';

const LikesCount = ({onPress}: LikesCountProps) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Icon name="like" />
      <Text>{getRandom(1, 100)}</Text>
    </Pressable>
  );
};

export default LikesCount;

interface LikesCountProps {
  onPress: () => void;
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
});
