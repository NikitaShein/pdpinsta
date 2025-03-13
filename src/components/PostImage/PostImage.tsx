import React, {useEffect} from 'react';

import {Image} from 'react-native';
import {SCREEN_WIDTH} from '../../app/constants';

const PostImage = ({uri, imgHeight, setImgHeight}: PostImageProps) => {
  useEffect(() => {
    Image.getSize(uri, (width, height) => {
      const scaleFactor = SCREEN_WIDTH / width;
      setImgHeight(height * scaleFactor);
    });
  }, [uri, setImgHeight]);

  return <Image height={imgHeight} source={{uri}} />;
};

export default PostImage;

interface PostImageProps {
  uri: string;
  imgHeight: number;
  setImgHeight: (value: number) => void;
}
