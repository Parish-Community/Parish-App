import { View, TextInput, StyleSheet, Text } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

interface TextInputProps {
  inputLabel?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function TextInputComponent({
  inputLabel,
  placeholder,
  value,
  onChangeText,
}: TextInputProps) {
  return (
    <View>
      <Text style={[styles.inputLabel]}>{inputLabel}</Text>
      <TextInput
        style={styles.inputView}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

TextInputComponent.defaultProps = {
  inputLabel: '',
  placeholder: '',
};

const styles = StyleSheet.create({
  inputView: {
    width: '100%',
    height: 48,
    backgroundColor: COLORS.bgTextInput,
    borderRadius: 15,
    justifyContent: 'center',
    lineHeight: 18,
    textAlign: 'left',
    paddingLeft: 20,
    marginVertical: 6,
    fontSize: 14,
  },
  inputLabel: {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: '400',
  },
});
