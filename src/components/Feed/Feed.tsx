import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {IRecommendation} from '../../services/RecommendationsService/types';

const Feed = ({data, renderItem, header}: FeedProps) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}-${item}`}
        ListHeaderComponent={header}
      />
    </View>
  );
};

export default Feed;

interface FeedProps {
  data: IRecommendation[] | undefined;
  renderItem: ({item}: {item: IRecommendation}) => React.ReactElement;
  header?: () => React.ReactElement;
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
