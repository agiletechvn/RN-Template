import { StyleSheet } from 'react-native';
import STYLES from '@src/styles';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: STYLES.borderColor,
    borderRadius: 4,
    paddingHorizontal: 10,
    height: 55,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  disabled: {
    backgroundColor: '#cfcfcf',
  },
  errorContainer: {
    borderColor: STYLES.light.error_color,
  },
  input: {
    flex: 1,
    height: 55,
    fontSize: 13,
    color: '#000000',
  },
  inputHaveValue: {
    borderColor: STYLES.light.primary_color,
  },
  placeholder: {
    fontFamily: 'Prompt',
    color: '#d9d9d9',
    fontSize: 13,
    position: 'absolute',
    paddingHorizontal: 5,
    backgroundColor: 'white',
  },
  haveValue: {
    color: STYLES.light.primary_color,
  },
  errorPlaceholder: {
    color: STYLES.light.error_color,
  },
});

export default styles;
