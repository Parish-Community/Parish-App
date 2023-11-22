import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { useTheme } from '../../hooks';
import { Button } from '@/core';
import { NavigationProp } from '@react-navigation/native';
import TextInputComponent from '@/core/TextInput/TextInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-modern-datepicker';
import ModalDate from '@/components/Modal/ModaDate';
import { useSelector } from 'react-redux';
import { baptismRegistration } from '../../services/api/index';

interface BaptismScreenProps {
  navigation: NavigationProp<any>;
}

const BaptismScreen = (props: BaptismScreenProps) => {
  const { Layout, Images, Fonts } = useTheme();

  const userInfor = useSelector(
    (state: { login: { token: string; userInfor: any } }) => state.login,
  );

  const [formData, setFormData] = useState({
    christianName: '',
    fullname: '',
    parishCluster: '',
    nameFather: '',
    nameMother: '',
    godFather: '',
    dateOfBirth: '',
    address: '',
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleBackdropPress = () => {
    setIsModalVisible(!isModalVisible);
  };

  const onSubmit = async () => {
    const payload = {
      christianName: formData.christianName,
      fullname: formData.fullname,
      parishCluster: formData.parishCluster,
      name_father: formData.nameFather,
      name_mother: formData.nameMother,
      god_parent: formData.godFather,
      dateOfBirth: formatDateReq(formData.dateOfBirth),
      address: formData.address,
    };
    console.log('payload', payload);
    const baptismReq = await baptismRegistration(payload, userInfor.token);
    if (baptismReq.status === 200) {
      props.navigation.navigate('HomeScreen');
    }
  };

  const handleChangeText = (field: any, text: any) => {
    setFormData({ ...formData, [field]: text });
    if (field === 'dateOfBirth') {
      toggleModal();
    }
  };

  const isAnyFieldEmpty = Object.values(formData).some(value => value === '');

  function formatDate(dateString: any) {
    const parts = dateString.split('/');
    if (parts.length === 3) {
      const [year, month, day] = parts;
      const formattedDate = new Date(`${year}-${month}-${day}`);
      const formattedDay = String(formattedDate.getDate()).padStart(2, '0');
      const formattedMonth = String(formattedDate.getMonth() + 1).padStart(
        2,
        '0',
      );
      const formattedYear = formattedDate.getFullYear();

      return `${formattedDay}-${formattedMonth}-${formattedYear}`;
    }
    return dateString;
  }

  function formatDateReq(dateString: any) {
    const parts = dateString.split('/');
    if (parts.length === 3) {
      const [year, month, day] = parts;
      const formattedDate = new Date(`${year}-${month}-${day}`);
      const formattedDay = String(formattedDate.getDate()).padStart(2, '0');
      const formattedMonth = String(formattedDate.getMonth() + 1).padStart(
        2,
        '0',
      );
      const formattedYear = formattedDate.getFullYear();

      return `${formattedYear}-${formattedMonth}-${formattedDay}`;
    }
    return dateString;
  }

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: '#FAFAFC' }]}>
      <View
        style={[
          Layout.fullWidth,
          Layout.row,
          { height: 50, backgroundColor: '#174940' },
        ]}
      >
        <TouchableOpacity
          style={[Layout.colHCenter, { left: '28%', height: 46, width: '8%' }]}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Image
            width={140}
            height={80}
            source={Images.icons.arrowRightBack}
            resizeMode={'contain'}
            tintColor={'#FFFFFF'}
          />
        </TouchableOpacity>
        <View style={[Layout.rowCenter, { left: '26%' }]}>
          <Text
            style={[
              Fonts.textBold,
              Fonts.textLight,
              { fontSize: 16, lineHeight: 18 },
            ]}
          >
            Đăng ký rửa tội
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.servicesContent,
          Layout.alignItemsCenter,
          Layout.fullWidth,
        ]}
      >
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={[Layout.fullWidth]}
        >
          <View style={[{ marginBottom: 8, width: '100%' }]}>
            <TextInputComponent
              inputLabel="Tên thánh"
              value={formData.christianName}
              onChangeText={text => handleChangeText('christianName', text)}
            />
          </View>
          <View style={[{ marginBottom: 8, width: '100%' }]}>
            <TextInputComponent
              inputLabel="Họ tên"
              value={formData.fullname}
              onChangeText={text => handleChangeText('fullname', text)}
            />
          </View>
          <View style={[{ marginBottom: 8, width: '100%' }]}>
            <View>
              <TextInputComponent
                inputLabel="Ngày sinh"
                // editable={false}
                value={formatDate(formData.dateOfBirth)}
                onChangeText={text => handleChangeText('dateOfBirth', text)}
                isDatePicker={true}
                onChange={toggleModal}
              />
            </View>
          </View>
          <View style={[{ marginBottom: 8, width: '100%' }]}>
            <TextInputComponent
              inputLabel="Giáo họ"
              value={formData.parishCluster}
              onChangeText={text => handleChangeText('parishCluster', text)}
              isDatePicker={false}
            />
          </View>
          <View style={[{ marginBottom: 8, width: '100%' }]}>
            <TextInputComponent
              inputLabel="Tên bố"
              value={formData.nameFather}
              onChangeText={text => handleChangeText('nameFather', text)}
            />
          </View>
          <View style={[{ marginBottom: 8, width: '100%' }]}>
            <TextInputComponent
              inputLabel="Tên mẹ"
              value={formData.nameMother}
              onChangeText={text => handleChangeText('nameMother', text)}
            />
          </View>
          <View style={[{ marginBottom: 8, width: '100%' }]}>
            <TextInputComponent
              inputLabel="Tên bố/mẹ đỡ đầu"
              value={formData.godFather}
              onChangeText={text => handleChangeText('godFather', text)}
            />
          </View>
          <View style={[{ marginBottom: 8, width: '100%' }]}>
            <TextInputComponent
              inputLabel="Địa chỉ"
              value={formData.address}
              onChangeText={text => handleChangeText('address', text)}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
      <View style={[Layout.fill]}>
        <View style={[styles.servicesBtn]}>
          <Button
            onPress={onSubmit}
            height={46}
            width={'100%'}
            bgColor={'#174940'}
            buttonTitle={'Submit'}
            space={10}
            disabled={isAnyFieldEmpty}
          />
        </View>
      </View>
      <ModalDate
        isVisible={isModalVisible}
        onBackdropPress={handleBackdropPress}
      >
        <StatusBar backgroundColor={'#494949'} />
        <ModalDate.Container>
          {/* <ModalBottom.Header title="Donation" /> */}
          <ModalDate.Body>
            <View style={[Layout.fullWidth]}>
              <DatePicker
                options={{
                  backgroundColor: '#FFF9DE',
                  textHeaderColor: '#174940',
                  textDefaultColor: '#16db65',
                  selectedTextColor: '#fff',
                  mainColor: '#BDBDBD',
                  textSecondaryColor: '#16db65',
                  borderColor: 'rgba(122, 146, 165, 0.1)',
                }}
                current="2020-07-13"
                selected="2020-07-23"
                mode="calendar"
                minuteInterval={30}
                style={{ borderRadius: 10 }}
                onDateChange={dateString =>
                  handleChangeText('dateOfBirth', dateString)
                }
              />
            </View>
          </ModalDate.Body>
          {/* <ModalBottom.Footer>
          </ModalBottom.Footer> */}
        </ModalDate.Container>
      </ModalDate>
    </SafeAreaView>
  );
};

export default BaptismScreen;
