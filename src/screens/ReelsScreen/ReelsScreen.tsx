import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ReelsScreen = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Reels Screen</Text>
    </View>
  );
};

export default ReelsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
});
