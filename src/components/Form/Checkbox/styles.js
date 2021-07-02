import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  box: {
    height: 20,
    width: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 4,
    width: 8,
    height: 15,
    borderBottomColor: 'white',
    borderRightColor: 'white',
    borderBottomWidth: 2,
    borderRightWidth: 2,
    transform: [
      {
        rotate: '45deg',
      },
    ],
  },
  label: {
    marginLeft: 10,
  },
});

export default styles;
