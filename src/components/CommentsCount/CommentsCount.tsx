import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import Icon from '../Icon/Icon';
import {getRandom} from '../../utils/getRandom';

const CommentsCount = ({onPress}: CommentsCountProps) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Icon name="comment" />
      <Text>{getRandom(100, 200)}</Text>
    </Pressable>
  );
};

export default CommentsCount;

interface CommentsCountProps {
  onPress: () => void;
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
});
