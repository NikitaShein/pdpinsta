import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Avatar = ({initials}: AvatarProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.avatar}>{initials}</Text>
      {/* <Image
        width={30}
        height={30}
        source={{
          uri: 'https://e7.pngegg.com/pngimages/348/800/png-clipart-man-wearing-blue-shirt-illustration-computer-icons-avatar-user-login-avatar-blue-child-thumbnail.png',
        }}
      /> */}
    </View>
  );
};

export default Avatar;

interface AvatarProps {
  initials: string;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
    backgroundColor: 'lightblue',
    borderRadius: 100,
  },

  avatar: {
    fontSize: 20,
  },
});
