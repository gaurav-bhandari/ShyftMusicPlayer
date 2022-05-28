import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import shyftMusicPlayerApi from '../../api';
import Spinner from '../../components/Spinner';
import {Song} from '../../interfaces';
import styles from './styles';

type Props = NativeStackScreenProps<any, 'SongsList'>;

const SongsListScreen = ({navigation}: Props) => {
  const [songsList, setSongsList] = useState<Array<Song> | null>(null);
  const [isSpinnerActive, setIsSpinnerActive] = useState<boolean>(false);

  const getSongsList = async (searchTerm: string) => {
    try {
      await setIsSpinnerActive(true);
      const response = await shyftMusicPlayerApi.get(
        `/search?term=${searchTerm}`,
      );
      await setIsSpinnerActive(false);
      if (response?.status === 200 && response?.data?.results?.length) {
        setSongsList(response.data.results);
      }
    } catch (err) {
      console.log('Error:', err);
    }
  };

  useEffect(() => {
    getSongsList('Michael Jackson');
  }, []);

  const renderItem = ({item}: {item: Song}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('SongsDetail', {songData: item})}
      style={styles.itemWrapper}>
      <Image source={{uri: item.artworkUrl100}} style={styles.itemImage} />
      <View style={styles.textWrapper}>
        <Text style={styles.itemBigText}>{item.trackCensoredName}</Text>
        <View style={styles.smallTextWrapper}>
          <Text style={styles.itemSmallText}>{item.artistName}</Text>
          <Text style={styles.itemSmallText}>{item.trackPrice}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {!isSpinnerActive && songsList ? (
        <FlatList
          data={songsList}
          renderItem={renderItem}
          //keyExtractor={(item: Song) => item.trackCount.toString()} Since there isn't any unique value in the Songs object therefore i'm using index for now.
          keyExtractor={(_, index: number) => index.toString()}
          showsVerticalScrollIndicator={false}
          onRefresh={() => getSongsList('Michael Jackson')}
          refreshing={isSpinnerActive}
        />
      ) : (
        <Spinner loading={isSpinnerActive} />
      )}
    </SafeAreaView>
  );
};

export default SongsListScreen;
