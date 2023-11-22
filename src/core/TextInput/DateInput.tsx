import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import DatePicker from 'react-native-datepicker';
import { COLORS } from '../constants';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';

interface TextInputProps {
  inputLabel?: string;
  placeholder?: string;
  value: string;
  editable?: boolean;
  selectTextOnFocus?: boolean;
  onChangeText: (text: string) => void;
}

export default function DateInputComponent({
  inputLabel,
  placeholder,
  value,
  editable,
  selectTextOnFocus,
  onChangeText,
}: TextInputProps) {
  return (
    <View>
      <Text style={styles.inputLabel}>{inputLabel}</Text>
      {/* <DatePicker
        style={styles.inputView}
        date={value}
        mode="date"
        placeholder={placeholder}
        format="YYYY-MM-DD"
        minDate="1970-01-01"
        maxDate="2030-12-31"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateInput: {
            borderWidth: 0,
          },
          dateText: {
            fontSize: 14,
            color: COLORS.textInput,
          },
          placeholderText: {
            fontSize: 14,
            color: COLORS.placeholder,
          },
        }}
        onDateChange={date => {
          onChangeText(date);
        }}
      /> */}
      <RNDateTimePicker mode="time" value={new Date()} />
    </View>
  );
}

DateInputComponent.defaultProps = {
  inputLabel: '',
  placeholder: '',
  editable: true,
  selectTextOnFocus: false,
};

const styles = StyleSheet.create({
  inputView: {
    width: '100%',
    height: 48,
    backgroundColor: COLORS.bgTextInput,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
    marginVertical: 6,
  },
  inputLabel: {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: '400',
  },
});
