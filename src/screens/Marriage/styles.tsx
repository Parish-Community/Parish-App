import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  homeOption: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: '50%',
    paddingHorizontal: 8,
    paddingVertical: 12,
    marginRight: 4,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  imageAvatar: {
    width: 140,
    height: 140,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#D7B300',
  },
  btnLoginModal: {
    width: '100%',
    backgroundColor: '#174940',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  textColorSecondary: {
    color: '#D7B300',
    fontSize: 16,
  },
});
export default styles;
