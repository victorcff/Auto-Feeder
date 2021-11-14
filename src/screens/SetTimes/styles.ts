import { StyleSheet } from 'react-native';
import { COLORS } from '../../Themes/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: COLORS.BLUE,
  },
  timeBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    flexDirection: 'row',
  },
  input: {
    backgroundColor: COLORS.WHITE,
    fontFamily: 'Roboto_400Regular',
    fontSize: 25,
    color: COLORS.BLACK,
    height: 50,
    width: 50,
    borderRadius: 15,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  title: {
    marginBottom: 10,
    fontFamily: 'Roboto_700Bold',
    fontSize: 30,

  },
  separator: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 30,
  }
});