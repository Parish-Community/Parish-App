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
    height: 50,
    padding: 20,
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
    right: 0,
    marginRight: 36,
    marginTop: 14,
  },
});
export default styles;
