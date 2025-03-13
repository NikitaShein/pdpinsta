import React from 'react';
import {StyleSheet, View} from 'react-native';
import LikesCount from '../LikesCount/LikesCount';
import RepostsCount from '../RepostsCount/RepostsCount';
import CommentsCount from '../CommentsCount/CommentsCount';
import IconButton from '../IconButton/IconButton';

const PostInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.countsContainer}>
        <LikesCount onPress={() => {}} />
        <CommentsCount onPress={() => {}} />
        <RepostsCount onPress={() => {}} />
      </View>

      <IconButton onPress={() => {}} iconName="bookmark" />
    </View>
  );
};

export default PostInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },

  countsContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
