import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ProfileScreen = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
