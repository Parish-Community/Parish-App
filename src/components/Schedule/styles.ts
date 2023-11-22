import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  donationContainer: {
    backgroundColor: '#FFFFFF',
    height: 200,
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
  donationContent: {
    padding: '3%',
  },
  textHistory: {
    fontSize: 16,
    lineHeight: 24,
    alignContent: 'center',
    alignItems: 'center',
  },
  baptismItem: {
    paddingHorizontal: '4%',
    backgroundColor: '#FFF9DE',
    height: 110,
    borderRadius: 20,
  },
  textStatusBaptism: {
    fontSize: 16,
    lineHeight: 24,
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    color: '#4D4D4D',
  },
});
export default styles;
