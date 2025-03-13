import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useSwipe} from '../../hooks/useSwipe';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  NavigationScreens,
  RootStackParamList,
} from '../../navigation/RootNavigator.types';
import {useFetchAllRecommendationsQuery} from '../../services/RecommendationsService/RecommendationsService';
import Post from '../../components/Post/Post';
import {IRecommendation} from '../../services/RecommendationsService/types';
import Feed from '../../components/Feed/Feed';
import {BASIC_COLORS} from '../../theme/colors';
import HomeHeader from '../../components/HomeHeader/HomeHeader';

const HomeScreen = (): React.JSX.Element => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onSwipeLeft = () => {
    navigation.navigate(NavigationScreens.DIRECT);
  };

  const onSwipeRight = () => {
    navigation.navigate(NavigationScreens.FILMING);
  };

  const {onTouchStart, onTouchEnd} = useSwipe(onSwipeLeft, onSwipeRight, 6);

  const {data: recommendations, isLoading} =
    useFetchAllRecommendationsQuery(100);

  const renderPostsList = ({item}: {item: IRecommendation}) => {
    return <Post data={item} />;
  };

  const renderHomeHeader = () => {
    return <HomeHeader />;
  };

  return (
    <View
      style={styles.container}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}>
      {isLoading ? (
        <ActivityIndicator
          testID="loading-spinner"
          size="large"
          color={BASIC_COLORS.BLUE}
          style={styles.loader}
        />
      ) : (
        <Feed
          data={recommendations}
          renderItem={renderPostsList}
          header={renderHomeHeader}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
