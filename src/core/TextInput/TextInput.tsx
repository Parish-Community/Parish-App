import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

interface TextInputProps {
  inputLabel?: string;
  placeholder?: string;
  value: string;
  editable?: boolean;
  selectTextOnFocus?: boolean;
  onChangeText: (text: string) => void;
  onChange?: () => void;
  isDatePicker?: boolean;
}

export default function TextInputComponent({
  inputLabel,
  placeholder,
  value,
  editable,
  selectTextOnFocus,
  onChangeText,
  isDatePicker,
  onChange,
}: TextInputProps) {
  return (
    <View>
      <Text style={[styles.inputLabel]}>{inputLabel}</Text>
      {isDatePicker ? (
        <TouchableOpacity onPress={onChange}>
          <TextInput
            style={styles.inputView}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            editable={editable}
            selectTextOnFocus={selectTextOnFocus}
          >
            <TouchableOpacity onPress={onChange} />
          </TextInput>
        </TouchableOpacity>
      ) : (
        <TextInput
          style={styles.inputView}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          editable={editable}
          selectTextOnFocus={selectTextOnFocus}
        />
      )}
    </View>
  );
}

TextInputComponent.defaultProps = {
  inputLabel: '',
  placeholder: '',
  editable: true,
  selectTextOnFocus: false,
  onChange: () => {},
  isDatePicker: false,
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
