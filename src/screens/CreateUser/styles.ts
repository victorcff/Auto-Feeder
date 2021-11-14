import { StyleSheet } from 'react-native';
import { COLORS } from '../../Themes/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BLUE,
  },
  user: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  nickname: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  title: {
    fontFamily: "Roboto_700Bold",
    fontSize: 24,
  },
  input: {
    fontFamily: "Roboto_400Regular",
    fontSize: 18,
    backgroundColor: COLORS.BEIGE,
    color: COLORS.BLACK,
    borderRadius: 10,
    width: 300,
    height: 45,
    marginTop: 10,
    paddingLeft: 10,
  },
  button: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.RED,
    width: 280,
    height: 50,
    borderRadius: 30,
  },
  buttonTitle: {
    fontFamily: "Roboto_700Bold",
    fontSize: 18,
  },
});