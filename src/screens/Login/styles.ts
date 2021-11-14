import { StyleSheet } from 'react-native';
import { COLORS } from '../../Themes/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 7
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    padding: 15,
    width: '100%',
    borderRadius: 15,
    backgroundColor: COLORS.RED,
  },
  buttonText: {
    color: COLORS.WHITE,
    fontFamily: 'Roboto_700Bold',
    fontSize: 20
  },
  buttonOutline: {
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.RED,
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: COLORS.RED,
    fontFamily: 'Roboto_700Bold',
    fontSize: 20
  },
});