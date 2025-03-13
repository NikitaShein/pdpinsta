import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Avatar from '../Avatar/Avatar';
import IconButton from '../IconButton/IconButton';
import {getInitials} from '../../utils/getInitials';

const PostHeader = ({author}: PostHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.authorContainer}>
        <Avatar initials={getInitials(author)} />
        <Text>{author}</Text>
      </View>

      <IconButton onPress={() => {}} iconName="dots" />
    </View>
  );
};

export default PostHeader;

interface PostHeaderProps {
  author: string;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },

  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
