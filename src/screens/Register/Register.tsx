import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '../../hooks';
import styles from './styles';
import { NavigationProp } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';

interface RegisterProps {
  navigation: NavigationProp<any>;
}

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const RegisterScreen = (props: RegisterProps) => {
  const { Layout, Images, Fonts, Gutters } = useTheme();

  const [email, setEmail] = useState('');
  const [fullname, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailError, setEmailError] = useState(null || '');
  const [passwordError, setPasswordError] = useState(null || '');

  const [value, setValue] = useState(null || '');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Item 01', value: '01' },
    { label: 'Item 02', value: '02' },
    { label: 'Item 03', value: '03' },
  ]);

  const renderItem = (item: {
    label:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | null
      | undefined;
  }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  const handleLogin = () => {
    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Thông tin không được để trống');
    }

    if (!phoneNumber) {
      setPasswordError('Thông tin không được để trống');
    }
    if (email && phoneNumber) {
      props.navigation.navigate('HomeScreen');
    }
  };

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: '#FFFFFF' }]}>
      <View style={{ top: '6%', left: 20 }}>
        <Image
          style={[Layout.rowCenter]}
          source={Images.banner}
          resizeMode={'contain'}
        />
        <View style={{ top: '2%' }}>
          <Text
            style={[
              Fonts.textBold,
              Gutters.regularBMargin,
              styles.textColorPrimary,
            ]}
          >
            Register
          </Text>
        </View>
      </View>
      <View style={[Layout.fullWidth, Layout.fill, Layout.col, { top: '6%' }]}>
        <Text style={[{ marginLeft: 32, marginBottom: 4, fontSize: 16 }]}>
          Họ tên
        </Text>
        <View style={{ marginBottom: 20 }}>
          <View
            style={[
              Layout.fullWidth,
              { alignItems: 'center', paddingHorizontal: 30 },
            ]}
          >
            <TextInput
              style={[styles.inputView]}
              placeholder="Nhập họ tên"
              onChangeText={value => setFullName(value)}
              value={fullname}
            />
          </View>
          {emailError && <Text style={[styles.textError]}>{emailError}</Text>}
        </View>
        <Text style={[{ marginLeft: 32, marginBottom: 4, fontSize: 16 }]}>
          Email
        </Text>
        <View style={{ marginBottom: 20 }}>
          <View
            style={[
              Layout.fullWidth,
              { alignItems: 'center', paddingHorizontal: 30 },
            ]}
          >
            <TextInput
              style={[styles.inputView]}
              placeholder="Nhập email"
              onChangeText={value => setEmail(value)}
              value={email}
            />
          </View>
          {emailError && <Text style={[styles.textError]}>{emailError}</Text>}
        </View>
        <Text style={[{ marginLeft: 32, marginBottom: 4, fontSize: 16 }]}>
          Số điện thoại
        </Text>
        <View style={{ marginBottom: 20 }}>
          <View
            style={[
              Layout.fullWidth,
              { alignItems: 'center', paddingHorizontal: 30 },
            ]}
          >
            <TextInput
              style={[styles.inputView]}
              placeholder="Nhập số điện thoại"
              onChangeText={text => setPhoneNumber(text)}
              value={phoneNumber}
            />
          </View>
          {passwordError && (
            <Text style={[styles.textError]}>{passwordError}</Text>
          )}
        </View>
        <Text style={[{ marginLeft: 32, marginBottom: 4, fontSize: 16 }]}>
          Giáo họ
        </Text>
        <View style={{ marginBottom: 20 }}>
          <View
            style={[
              Layout.fullWidth,
              { alignItems: 'center', paddingHorizontal: 28 },
            ]}
          >
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              autoScroll={true}
              maxHeight={120}
            />
            {/* <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={200}
              labelField="label"
              valueField="value"
              placeholder="Select item"
              searchPlaceholder="Search..."
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
              renderItem={renderItem}
            /> */}
            {/* <TextInput
              style={[styles.inputView]}
              placeholder="Chọn giáo họ"
              onChangeText={text => setPhoneNumber(text)}
              value={phoneNumber}
            /> */}
          </View>
          {passwordError && (
            <Text style={[styles.textError]}>{passwordError}</Text>
          )}
        </View>
        <View style={[{ alignItems: 'center' }]}>
          <TouchableOpacity
            style={[styles.btnLogin]}
            activeOpacity={0.7}
            onPress={handleLogin}
          >
            <Text style={[Fonts.textBold, styles.textColorSecondary]}>
              SEND REQUEST
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
