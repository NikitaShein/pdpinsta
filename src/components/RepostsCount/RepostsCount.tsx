import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import Icon from '../Icon/Icon';
import {getRandom} from '../../utils/getRandom';

const RepostsCount = ({onPress}: RepostsCountProps) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Icon name="repost" />
      <Text>{getRandom(900, 1000)}</Text>
    </Pressable>
  );
};

export default RepostsCount;

interface RepostsCountProps {
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
});
