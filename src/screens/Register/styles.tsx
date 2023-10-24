import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textColorPrimary: {
    color: '#174940',
    marginTop: 12,
    fontSize: 18,
  },
  textColorSecondary: {
    color: '#D7B300',
    fontSize: 16,
  },
  textError: {
    marginTop: '1%',
    marginLeft: 32,
    color: '#F04438',
    fontSize: 16,
    fontStyle: 'italic',
  },
  textForgotPassword: {
    color: '#386DF5',
    fontSize: 16,
  },
  inputView: {
    width: '100%',
    backgroundColor: '#FFF9DE',
    borderRadius: 10,
    height: 48,
    alignItems: 'center',
    paddingHorizontal: 10,
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
  dropdown: {
    height: 60,
    width: '100%',
    backgroundColor: '#FFF9DE',
    borderRadius: 12,
    padding: 12,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 2,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
export default styles;
