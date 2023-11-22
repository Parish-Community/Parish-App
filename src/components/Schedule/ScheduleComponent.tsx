import {
  View,
  Text,
  DimensionValue,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import { useTheme } from '../../hooks';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import { useSelector } from 'react-redux';
import ModalBottom from '@/components/Modal/ModalBottom';
import { getBaptismRegistration } from '../../services/api/index';
import { Spacer } from '@/core';
import { NavigationProp } from '@react-navigation/native';
import DonationItem from '@/screens/Donation/DonationItem';
import BaptismItem from '@/screens/Baptism/BaptismItem';
import ModalDate from '../Modal/ModaDate';

type Props = {
  navigation: NavigationProp<any>;
  height?: DimensionValue;
  width?: DimensionValue;
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
};

const ScheduleComponent = ({ height, width, mode, navigation }: Props) => {
  const { Layout, Fonts, Images } = useTheme();
  const [dataBaptism, setDataBaptism] = useState<any[]>();
  const [isViewMore, setIsViewMore] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const userInfor = useSelector(
    (state: { login: { token: string; userInfor: any } }) => state.login,
  );

  const getBaptism = async () => {
    const response = await getBaptismRegistration(userInfor.token);
    if (response.data.data.length > 1) {
      setIsViewMore(true);
    }
    setDataBaptism(response.data.data);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleBackdropPress = () => {
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    getBaptism();
  }, []);
  console.log('dataBaptism', dataBaptism?.length);

  return (
    <View style={[Layout.fullWidth, styles.donationContainer]}>
      <View
        style={[
          Layout.row,
          Layout.justifyContentBetween,
          styles.donationContent,
        ]}
      >
        <View>
          <Text style={[Fonts.titleSmall]}>Rửa tội</Text>
        </View>
        {isViewMore ? (
          <TouchableWithoutFeedback
            onPress={toggleModal}
            style={[Layout.row, { marginLeft: 34, top: '4%' }]}
          >
            <Text style={[Fonts.textBlue, Fonts.textBold, styles.textHistory]}>
              View more
            </Text>
            <View style={[{ height, width, top: '6%', marginLeft: 5 }]}>
              <Image source={Images.icons.arrowRight} resizeMode={mode} />
            </View>
          </TouchableWithoutFeedback>
        ) : null}
      </View>
      <View style={[styles.donationContent, Layout.row, { top: '2%' }]}>
        <View style={[Layout.rowCenter]}>
          {dataBaptism?.length ? (
            <View style={[styles.baptismItem, Layout.fullWidth]}>
              <View style={[Layout.row, Layout.justifyContentBetween]}>
                <Text
                  style={[Fonts.textSmall, { marginTop: 12 }]}
                >{`${dataBaptism[0].parishioner.christianName} ${dataBaptism[0].parishioner.fullname}`}</Text>
                <Text style={[styles.textStatusBaptism]}>
                  {dataBaptism[0].isAccepted ? 'Accepted' : 'Pending'}
                </Text>
              </View>
              <View>
                <Text style={[Fonts.textSmall, { marginTop: 12 }]}>
                  Tên Bố: {`${dataBaptism[0].parishioner.name_father}`}
                </Text>
                <Text style={[styles.textStatusBaptism]}>
                  Tên mẹ: {`${dataBaptism[0].parishioner.name_mother}`}
                </Text>
              </View>
            </View>
          ) : (
            <LottieView
              style={{
                width: 140,
                height: 120,
                left: '84%',
              }}
              source={Images.animations.schedule}
              autoPlay
              loop
            />
          )}
        </View>
      </View>
      <ModalBottom
        isVisible={isModalVisible}
        onBackdropPress={handleBackdropPress}
      >
        <StatusBar backgroundColor={'#494949'} />
        <ModalDate.Container>
          <ModalBottom.Header title="Rửa tội" />
          <ModalBottom.Body>
            <View style={[Layout.fullWidth]}>
              <FlatList
                data={dataBaptism}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item?.id}
                renderItem={({ item }) => (
                  <BaptismItem item={item} navigation={navigation} />
                )}
              />
            </View>
          </ModalBottom.Body>
        </ModalDate.Container>
      </ModalBottom>
    </View>
  );
};

ScheduleComponent.defaultProps = {
  height: 20,
  width: 20,
  mode: 'contain',
};

export default ScheduleComponent;
