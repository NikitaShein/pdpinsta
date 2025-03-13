import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import IconButton from '../IconButton/IconButton';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/Instagram_logo.png')}
        resizeMode="contain"
      />
      <View style={styles.buttonsContainer}>
        <IconButton onPress={() => {}} iconName="like" />
        <IconButton onPress={() => {}} iconName="comment" />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 50,
  },

  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },

  logo: {
    width: 150,
  },
});
