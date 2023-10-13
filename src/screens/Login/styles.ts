import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textColorPrimary: {
    color: '#174940',
    marginTop: 12,
  },
  textColorSecondary: {
    color: '#D7B300',
    fontSize: 16,
  },
  textError: {
    marginTop: '1%',
    marginLeft: 32,
    color: '#F04438',
    fontSize: 14,
    fontStyle: 'italic',
  },
  textForgotPassword: {
    color: '#386DF5',
    fontSize: 14,
  },
  inputView: {
    width: '86%',
    backgroundColor: '#FFF9DE',
    borderRadius: 10,
    height: 60,
    padding: 20,
    alignItems: 'center',
  },
  btnLogin: {
    width: '86%',
    backgroundColor: '#174940',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  iconsPassword: {
    position: 'absolute',
    right: '2%',
    marginRight: 36,
    marginTop: 20,
    width: 24,
    height: 24,
  },
});
export default styles;
