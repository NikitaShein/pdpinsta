import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PostTitle = ({author}: PostTitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {`${author} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
      </Text>
    </View>
  );
};

export default PostTitle;

interface PostTitleProps {
  author: string;
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  title: {
    marginTop: 5,
    paddingHorizontal: 10,
    fontWeight: 600,
  },
});
