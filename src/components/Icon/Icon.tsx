import React from 'react';
import {SvgXml} from 'react-native-svg';
import {getSvg} from '../../utils/getSvg';
import {BASIC_COLORS} from '../../theme/colors';
import {ViewStyle} from 'react-native';

const Icon = ({
  name,
  width = 24,
  height = 24,
  color = BASIC_COLORS.BLACK,
  strokeColor,
  strokeWidth,
  style,
  testID,
}: IconProps) => (
  <SvgXml
    testID={testID ? testID : name}
    xml={getSvg(color, name, strokeColor, strokeWidth)}
    width={width}
    height={height}
    style={[{alignSelf: 'center', flexDirection: 'row'}, style]}
  />
);

export default Icon;

interface IconProps {
  name: string;
  width?: number;
  height?: number;
  color?: string;
  strokeColor?: string;
  strokeWidth?: string;
  style?: ViewStyle;
  testID?: string;
}
