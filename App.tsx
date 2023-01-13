// ↓ beloved react ↓
import React from 'react';

// ↓ 3rd party react components ↓
import {
  // ↓ components ↓
  View,
  StatusBar,
  StyleSheet,
  // ↓ types ↓
  // ↓ hooks ↓
  // ↓ apis ↓
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// ↓ 3rd party utils ↓

// ↓ navigation & routes ↓
import * as RNN from '@react-navigation/native';
import MainNavigator from '@navigation/main.navigator';

// ↓ containers ↓

// ↓ screens ↓

// ↓ components ↓

// ↓ utils ↓

// ↓ constants ↓

// ---

const App = (): React.ReactElement => {
  return (
    <SafeAreaProvider>
      <RNN.NavigationContainer>
        <View style={styles.container}>
          <StatusBar translucent barStyle={'dark-content'} />
          <MainNavigator />
        </View>
      </RNN.NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
