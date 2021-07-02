import STYLES from '@src/styles';
import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: getBottomSpace(),
  },
  container: {
    maxHeight: 380 + getBottomSpace(),
    minHeight: getBottomSpace(),
  },
  selectContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: STYLES.borderColor,
    borderRadius: 4,
  },
  inputHaveValue: {
    borderColor: STYLES.light.primary_color,
  },
  haveValue: {
    color: 'black',
  },
  placeholder: {
    color: '#d9d9d9',

    fontSize: 13,
    position: 'absolute',
    paddingHorizontal: 5,
    backgroundColor: 'white',
  },
  errorPlaceholder: {
    color: STYLES.light.error_color,
  },
});

export default styles;
