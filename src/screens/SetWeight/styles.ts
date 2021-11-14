import { StyleSheet } from 'react-native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { COLORS } from '../../Themes/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.BLUE,
  },
  inputContainer: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 34,
  },
  subtitle: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 24,
    marginBottom: 35,
  },
  input: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 30,
    backgroundColor: COLORS.WHITE,
    marginTop: 30,
    height: 60,
    width: '70%',
    borderRadius: 20,
    textAlign: 'center',
  },
  buttonBox: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: getBottomSpace() + 17
  }
});