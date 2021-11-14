import { StyleSheet } from 'react-native';
import { COLORS } from '../../Themes/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 75,
    paddingBottom: 20
  },
  title: {
    paddingTop: 20,
    fontSize: 25,
    fontFamily: 'SourceCodePro_700Bold',
    color: '#B91646'
  },
  name: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'SourceCodePro_700Bold',
    color: COLORS.RED,
  }
});
