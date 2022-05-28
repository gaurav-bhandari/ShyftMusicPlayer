import {StyleSheet} from 'react-native';
import {colors} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  songImage: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  songTitle: {
    fontSize: 18,
    color: colors.royalBlue,
    marginBottom: 15,
  },
  songDetailsWrapper: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 50,
  },
  detailsText: {
    fontSize: 16,
    color: colors.black,
    marginBottom: 10,
  },
});
