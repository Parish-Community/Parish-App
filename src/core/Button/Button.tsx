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
  space?: number;
}

const Button = ({
  loading,
  onPress,
  disabled,
  width,
  height,
  bgColor,
  buttonTitle,
  space,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        {
          width,
          height,
          backgroundColor: disabled ? '#636366' : bgColor,
          marginBottom: space,
        },
      ]}
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
  space: 0,
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 46,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
