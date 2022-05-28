import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

import AppNavigatior from './src/navigation';
import {colors} from './src/themes';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={colors.royalBlue} />
      <AppNavigatior />
    </SafeAreaProvider>
  );
};

export default App;
