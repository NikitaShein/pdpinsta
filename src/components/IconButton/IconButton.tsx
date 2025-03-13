import React from 'react';
import {Pressable} from 'react-native';
import Icon from '../Icon/Icon';

const IconButton = ({onPress, iconName}: IconButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Icon name={iconName} />
    </Pressable>
  );
};

export default IconButton;

interface IconButtonProps {
  onPress: () => void;
  iconName: string;
}
