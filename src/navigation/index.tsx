import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SongsListScreen from '../screens/SongsListScreen';
import SongsDetailScreen from '../screens/SongsDetailScreen';
import {colors} from '../themes';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SongsList"
        screenOptions={{
          headerStyle: styles.headerStyle,
          headerTintColor: colors.white,
          headerTitleStyle: styles.headerTitleStyle,
        }}>
        <Stack.Screen
          name="SongsList"
          component={SongsListScreen}
          options={{title: 'SONGS'}}
        />
        <Stack.Screen
          name="SongsDetail"
          component={SongsDetailScreen}
          options={{title: 'SONGS', headerBackTitle: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.royalBlue,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});

export default AppNavigator;
