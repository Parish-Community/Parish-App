import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../../hooks';
import { NavigationProp } from '@react-navigation/native';
import TextInputComponent from '@/core/TextInput/TextInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import ProgressSteps from '@joaosousa/react-native-progress-steps';
// import { Content, Title } from '@/components';
import { Button, Spacer } from '@/core';
// import {
//   Fade,
//   Placeholder,
//   PlaceholderLine,
//   PlaceholderMedia,
// } from 'rn-placeholder';

interface MarriageScreenProps {
  navigation: NavigationProp<any>;
}

const MarriageScreen = (props: MarriageScreenProps) => {
  const { Layout, Images, Fonts } = useTheme();
  const [currentStep, setCurrentStep] = useState(true);
  const [isFetching, setFetching] = useState(false);
  const [formDataFirst, setFormDataFirst] = useState({
    fullName: '',
    birthDate: '',
    religion: '',
    fatherName: '',
    motherName: '',
    email: '',
    phoneNumber: '',
    address: '',
    fullName_02: '',
    birthDate_02: '',
    religion_02: '',
    fatherName_02: '',
    motherName_02: '',
    email_02: '',
    phoneNumber_02: '',
    address_02: '',
  });

  const handleChangeText = (field: any, text: any) => {
    setFormDataFirst({ ...formDataFirst, [field]: text });
  };

  const handleNextStep = (time = 1000) => {
    setFetching(true);
    setTimeout(() => {
      setFetching(false);
      setCurrentStep(false);
    }, time);
  };

  const handlePrevStep = () => {
    setCurrentStep(true);
  };

  return (
    <SafeAreaView
      style={[Layout.fill, Layout.fullWidth, { backgroundColor: '#FAFAFC' }]}
    >
      <View
        style={[
          Layout.fullWidth,
          Layout.row,
          { height: 50, backgroundColor: '#174940' },
        ]}
      >
        <TouchableOpacity
          style={[Layout.colHCenter, { left: '14%' }]}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Image source={Images.icons.arrowRightBack} resizeMode={'contain'} />
        </TouchableOpacity>
        <View style={[Layout.rowCenter, { left: '26%' }]}>
          <Text style={[Fonts.textBold, Fonts.textLight]}>
            Đăng ký giáo lý hôn nhân
          </Text>
        </View>
      </View>
      {currentStep ? (
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={[Layout.fill, { paddingHorizontal: 16 }]}
        >
          <View style={[{ marginTop: 20 }]}>
            <Text style={[Fonts.textBold]}>Điền thông tin cá nhân</Text>
            <View>
              <View style={[{ marginBottom: 8 }]}>
                <TextInputComponent
                  inputLabel="Họ tên"
                  value={formDataFirst.fullName}
                  onChangeText={text => handleChangeText('fullName', text)}
                />
              </View>
              <View style={[{ marginBottom: 8 }]}>
                <TextInputComponent
                  inputLabel="Ngày sinh"
                  value={formDataFirst.birthDate}
                  onChangeText={text => handleChangeText('birthDate', text)}
                />
              </View>
              <View style={[{ marginBottom: 8 }]}>
                <TextInputComponent
                  inputLabel="Giáo họ"
                  value={formDataFirst.religion}
                  onChangeText={text => handleChangeText('religion', text)}
                />
              </View>
              <View style={[{ marginBottom: 8 }]}>
                <TextInputComponent
                  inputLabel="Họ tên bố"
                  value={formDataFirst.fatherName}
                  onChangeText={text => handleChangeText('fatherName', text)}
                />
              </View>
              <View style={[{ marginBottom: 8 }]}>
                <TextInputComponent
                  inputLabel="Họ tên mẹ"
                  value={formDataFirst.motherName}
                  onChangeText={text => handleChangeText('motherName', text)}
                />
              </View>
              <View style={[{ marginBottom: 8 }]}>
                <TextInputComponent
                  inputLabel="Email"
                  value={formDataFirst.email}
                  onChangeText={text => handleChangeText('email', text)}
                />
              </View>
              <View style={[{ marginBottom: 8 }]}>
                <TextInputComponent
                  inputLabel="Số điện thoại"
                  value={formDataFirst.phoneNumber}
                  onChangeText={text => handleChangeText('phoneNumber', text)}
                />
              </View>
              <View style={[{ marginBottom: 8 }]}>
                <TextInputComponent
                  inputLabel="Địa chỉ"
                  value={formDataFirst.address}
                  onChangeText={text => handleChangeText('address', text)}
                />
              </View>
            </View>
          </View>
          <Spacer space="10" />
          <View style={[{ flexDirection: 'row' }]}>
            <Button
              onPress={() => handleNextStep(400)}
              height={48}
              width={'100%'}
              bgColor={'#174940'}
              buttonTitle={'Next step'}
              loading={isFetching}
            />
          </View>
        </KeyboardAwareScrollView>
      ) : (
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={[Layout.fill, { paddingHorizontal: 16 }]}
        >
          <View style={[{ marginTop: 20 }]}>
            <Text style={[Fonts.textBold]}>Điền thông tin bạn học</Text>
            <View>
              <View style={[{ marginBottom: 8 }]}>
                <TextInputComponent
                  inputLabel="Họ tên"
                  value={formDataFirst.fullName_02}
                  onChangeText={text => handleChangeText('fullName_02', text)}
                />
              </View>
              <View style={[{ marginBottom: 8 }]}>
                <TextInputComponent
                  inputLabel="Ngày sinh"
                  value={formDataFirst.birthDate_02}
                  onChangeText={text => handleChangeText('birthDate_02', text)}
                />
              </View>
              <View style={[{ marginBottom: 8 }]}>
                <TextInputComponent
                  inputLabel="Giáo họ"
                  value={formDataFirst.religion_02}
                  onChangeText={text => handleChangeText('religion_02', text)}
                />
              </View>
              <View style={[{ marginBottom: 8 }]}>
                <TextInputComponent
                  inputLabel="Họ tên bố"
                  value={formDataFirst.fatherName_02}
                  onChangeText={text => handleChangeText('fatherName_02', text)}
                />
              </View>
              <View style={[{ marginBottom: 8 }]}>
                <TextInputComponent
                  inputLabel="Họ tên mẹ"
                  value={formDataFirst.motherName_02}
                  onChangeText={text => handleChangeText('motherName_02', text)}
                />
              </View>
              <View style={[{ marginBottom: 8 }]}>
                <TextInputComponent
                  inputLabel="Email"
                  value={formDataFirst.email_02}
                  onChangeText={text => handleChangeText('email_02', text)}
                />
              </View>
              <View style={[{ marginBottom: 8 }]}>
                <TextInputComponent
                  inputLabel="Số điện thoại"
                  value={formDataFirst.phoneNumber_02}
                  onChangeText={text =>
                    handleChangeText('phoneNumber_02', text)
                  }
                />
              </View>
              <View style={[{ marginBottom: 8 }]}>
                <TextInputComponent
                  inputLabel="Địa chỉ"
                  value={formDataFirst.address_02}
                  onChangeText={text => handleChangeText('address_02', text)}
                />
              </View>
            </View>
          </View>
          <Spacer space="10" />
          <View style={[Layout.row, Layout.justifyContentBetween]}>
            <Button
              onPress={() => handlePrevStep()}
              height={46}
              width={'50%'}
              bgColor={'#174940'}
              buttonTitle={'Prev step'}
            />
            <Spacer space="10" />
            <Button
              onPress={() => handlePrevStep()}
              height={48}
              width={'46%'}
              bgColor={'#174940'}
              buttonTitle={'Continue'}
            />
          </View>
        </KeyboardAwareScrollView>
      )}
    </SafeAreaView>
  );
};

export default MarriageScreen;
