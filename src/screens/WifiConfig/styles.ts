import { StyleSheet } from 'react-native';
import { COLORS } from '../../Themes/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLORS.BLUE,
    paddingHorizontal: 15,
  },
  info: {
    flex: 1,
    fontFamily: 'Roboto_700Bold',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  inputBox: {
    flex: 2,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start',
  },
  input: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 24,
    paddingHorizontal: 15,
    marginTop: 10,
    height: 50,
    width: '80%',
    textAlignVertical: 'center',
    color: '#121214',
    backgroundColor: COLORS.GREEN,
    borderRadius: 10,
  },
  button: {
    backgroundColor: COLORS.RED,
    marginVertical: 30,
    height: 50,
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  icon: {
    marginRight: 12,
  }
});