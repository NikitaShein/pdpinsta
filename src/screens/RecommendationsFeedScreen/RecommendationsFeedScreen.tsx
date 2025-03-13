import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../../navigation/RootNavigator.types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSwipe} from '../../hooks/useSwipe';
import Feed from '../../components/Feed/Feed';
import {useFetchAllRecommendationsQuery} from '../../services/RecommendationsService/RecommendationsService';
import {IRecommendation} from '../../services/RecommendationsService/types';
import Post from '../../components/Post/Post';

const RecommendationsFeedScreen = (): React.JSX.Element => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const {data: recommendations} = useFetchAllRecommendationsQuery(100);

  const renderPostsList = ({item}: {item: IRecommendation}) => {
    return <Post data={item} />;
  };

  const onSwipeRight = () => {
    navigation.goBack();
  };

  const {onTouchStart, onTouchEnd} = useSwipe(() => {}, onSwipeRight, 6);

  return (
    <View
      style={styles.container}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}>
      <Feed data={recommendations} renderItem={renderPostsList} />
    </View>
  );
};

export default RecommendationsFeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
