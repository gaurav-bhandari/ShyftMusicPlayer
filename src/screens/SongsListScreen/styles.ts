import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 15,
    width: Dimensions.get('window').width - 20,
  },
  itemImage: {
    flex: 1,
    height: 70,
    width: 70,
    resizeMode: 'contain',
    marginRight: 20,
  },
  textWrapper: {
    flex: 4,
  },
  itemBigText: {
    fontSize: 16,
    color: colors.royalBlue,
    marginBottom: 10,
  },
  itemSmallText: {
    fontSize: 14,
    color: colors.royalBlue,
  },
  smallTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
