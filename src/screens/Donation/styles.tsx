import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  itemDonation: {
    backgroundColor: 'white',
    height: 60,
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
  textColorSecondary: {
    color: '#D7B300',
    fontSize: 16,
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
});

export default styles;
