import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CreateContentScreen = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Create Content Screen</Text>
    </View>
  );
};

export default CreateContentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
});
