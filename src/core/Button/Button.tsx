import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

interface ButtonProps {
  onPress: () => void;
  disabled?: boolean;
  width: any;
  height: number;
  bgColor: string;
  loading?: boolean;
  buttonTitle: string;
}

const Button = ({
  loading,
  onPress,
  disabled,
  width,
  height,
  bgColor,
  buttonTitle,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, { width, height, backgroundColor: bgColor }]}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <View style={styles.buttonContainer}>
          <Text style={[styles.buttonText, { color: COLORS.secondary }]}>
            {buttonTitle}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  loading: false,
  disabled: false,
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 48,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
