import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  donationContainer: {
    backgroundColor: '#FFFFFF',
    height: 120,
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
});
export default styles;
