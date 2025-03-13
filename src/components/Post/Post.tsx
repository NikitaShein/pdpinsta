import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import PostHeader from '../PostHeader/PostHeader';
import PostInfo from '../PostInfo/PostInfo';
import PostTitle from '../PostTitle/PostTitle';
import {IRecommendation} from '../../services/RecommendationsService/types';
import {SCREEN_WIDTH} from '../../app/constants';
import PostImage from '../PostImage/PostImage';

const Post = ({data: {download_url, author}}: PostProps) => {
  const [imageHeight, setImageHeight] = useState(0);

  return (
    <View style={[styles.container]}>
      <PostHeader author={author} />
      <PostImage
        uri={download_url}
        imgHeight={imageHeight}
        setImgHeight={setImageHeight}
      />
      <PostInfo />
      <PostTitle author={author} />
    </View>
  );
};

export default Post;

interface PostProps {
  data: IRecommendation;
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    marginVertical: 5,
  },
});
