import React from 'react';
import {
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {useFetchAllRecommendationsQuery} from '../../services/RecommendationsService/RecommendationsService';
import {IRecommendation} from '../../services/RecommendationsService/types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  NavigationScreens,
  RootStackParamList,
} from '../../navigation/RootNavigator.types';
import {BASIC_COLORS} from '../../theme/colors';

const screenWidth = Dimensions.get('window').width;
const IMAGE_SIZE = screenWidth / 3; // 3 колонки

const SearchScreen = () => {
  const {data: recommendations, isLoading} =
    useFetchAllRecommendationsQuery(100);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const openFeed = () => {
    navigation.navigate(NavigationScreens.RECOMMENDATIONS_FEED);
  };

  const renderItem = ({item}: {item: IRecommendation}) => {
    return (
      <TouchableOpacity activeOpacity={0.7}>
        <Pressable
          onPress={openFeed}
          style={[
            styles.imageWrapper,
            {width: IMAGE_SIZE, height: IMAGE_SIZE},
          ]}>
          <Image
            source={{uri: item.download_url}}
            style={[styles.image, {height: IMAGE_SIZE}]}
          />
        </Pressable>
      </TouchableOpacity>
    );
  };

  return (
    <>
      {isLoading ? (
        <ActivityIndicator
          testID="loading-spinner"
          size="large"
          color={BASIC_COLORS.BLUE}
          style={styles.loader}
        />
      ) : (
        <FlatList
          data={recommendations}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={3}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchScreen;
