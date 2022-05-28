import React from 'react';
import {View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import styles from './styles';
import {Song} from '../../interfaces';

type SongsDetailParamList = {
  SongsDetail: {songData: Song};
};

type Props = NativeStackScreenProps<SongsDetailParamList, 'SongsDetail'>;

const SongsDetailScreen = ({route}: Props) => {
  const {songData} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.songTitle}>{songData.trackCensoredName}</Text>
      <Image source={{uri: songData.artworkUrl100}} style={styles.songImage} />
      <View style={styles.songDetailsWrapper}>
        <Text style={styles.detailsText}>
          Collection Name : {songData.collectionName}
        </Text>
        <Text style={styles.detailsText}>
          Collection Price : {songData.collectionPrice}
        </Text>
        <Text style={styles.detailsText}>
          Genre Name : {songData.primaryGenreName}
        </Text>
        <Text style={styles.detailsText}>Kind : {songData.kind}</Text>
      </View>
    </SafeAreaView>
  );
};

export default SongsDetailScreen;
