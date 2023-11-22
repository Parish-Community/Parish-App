import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageAvatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 6,
    borderColor: '#D7B300',
  },
  servicesContent: {
    marginTop: '6%',
    flex: 6,
    paddingHorizontal: 16,
    height: 168,
  },
  servicesBtn: {
    top: '16%',
    paddingHorizontal: 16,
    flexDirection: 'column',
    bottom: 18,
    height: 46,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
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
  itemDonation: {
    backgroundColor: 'white',
    height: 60,
    marginVertical: 6,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitleDate: {
    fontSize: 16,
    lineHeight: 20,
    marginLeft: 8,
    fontStyle: 'italic',
  },
});
export default styles;
