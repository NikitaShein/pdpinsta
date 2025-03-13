import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainNavigator from './src/navigation/RootNavigator';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {setupStore} from './src/store/store';
import {BASIC_COLORS} from './src/theme/colors';

function App(): React.JSX.Element {
  const store = setupStore();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <SafeAreaProvider style={[backgroundStyle]}>
        <SafeAreaView style={styles.safeAreaView} edges={['top']}>
          <MainNavigator />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: BASIC_COLORS.WHITE,
    flex: 1,
  },
});
