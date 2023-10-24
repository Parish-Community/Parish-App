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
      style={[Layout.fill, Layout.fullWidth, { backgroundColor: '#FFFFFF' }]}
    >
      <View
        style={[
          Layout.fullWidth,
          Layout.row,
          { height: 50, backgroundColor: '#174940' },
        ]}
      >
        <TouchableOpacity
          style={[Layout.colHCenter, { left: '18%', height: 46 }]}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Image
            width={60}
            height={60}
            source={Images.icons.arrowRightBack}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <View style={[Layout.rowCenter, { left: '26%' }]}>
          <Text style={[Fonts.textBold, Fonts.textLight]}>
            Đăng ký giáo lý hôn nhân
          </Text>
        </View>
      </View>
      {currentStep ? (
        <View style={[Layout.fill]}>
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            style={[Layout.fill, { paddingHorizontal: 16, height: 168 }]}
          >
            <View style={[{ marginTop: 10 }]}>
              <Text style={[Fonts.textBold, { fontSize: 16 }]}>
                Điền thông tin cá nhân
              </Text>
              <Spacer space="10" />
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
          </KeyboardAwareScrollView>
          <View
            style={[
              {
                paddingHorizontal: 16,
                flexDirection: 'row',
                bottom: 8,
                height: 46,
                backgroundColor: '#FFFFFF',
              },
            ]}
          >
            <Button
              onPress={() => handleNextStep(400)}
              height={46}
              width={'100%'}
              bgColor={'#174940'}
              buttonTitle={'Next step'}
              loading={isFetching}
            />
          </View>
        </View>
      ) : (
        <View style={[Layout.fill]}>
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            style={[Layout.fill, { paddingHorizontal: 16 }]}
          >
            <View style={[{ marginTop: 10 }]}>
              <Text style={[Fonts.textBold, { fontSize: 16 }]}>
                Điền thông tin bạn học
              </Text>
              <Spacer space="10" />
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
                    onChangeText={text =>
                      handleChangeText('birthDate_02', text)
                    }
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
                    onChangeText={text =>
                      handleChangeText('fatherName_02', text)
                    }
                  />
                </View>
                <View style={[{ marginBottom: 8 }]}>
                  <TextInputComponent
                    inputLabel="Họ tên mẹ"
                    value={formDataFirst.motherName_02}
                    onChangeText={text =>
                      handleChangeText('motherName_02', text)
                    }
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
          </KeyboardAwareScrollView>
          <View
            style={[
              Layout.row,
              Layout.justifyContentBetween,
              {
                paddingHorizontal: 16,
                flexDirection: 'row',
                backgroundColor: '#FFFFFF',
                bottom: 8,
                height: 46,
              },
            ]}
          >
            <Button
              onPress={() => handlePrevStep()}
              height={46}
              width={'48%'}
              bgColor={'#174940'}
              buttonTitle={'Prev step'}
            />
            <Spacer space="10" />
            <Button
              onPress={() => handlePrevStep()}
              height={46}
              width={'46%'}
              bgColor={'#174940'}
              buttonTitle={'Continue'}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default MarriageScreen;
