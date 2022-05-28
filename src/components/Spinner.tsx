import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

import {colors} from '../themes';

const Spinner = ({loading}: {loading: boolean}) => (
  <View style={styles.spinnerWrapper}>
    <ActivityIndicator color={colors.black} animating={loading} />
  </View>
);

const styles = StyleSheet.create({
  spinnerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spinner;
