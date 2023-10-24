import { View, Text, DimensionValue, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { useTheme } from '../../hooks';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';

type Props = {
  height?: DimensionValue;
  width?: DimensionValue;
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
};

const ScheduleComponent = ({ height, width, mode }: Props) => {
  const { Layout, Fonts, Images } = useTheme();

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
          <Text style={[Fonts.titleSmall]}>Schedule</Text>
        </View>
        <TouchableWithoutFeedback
          style={[Layout.row, { marginLeft: 34, top: '4%' }]}
        >
          <Text style={[Fonts.textBlue, Fonts.textBold, styles.textHistory]}>
            Detail
          </Text>
          <View style={[{ height, width, top: '9%', marginLeft: 5 }]}>
            <Image source={Images.icons.arrowRight} resizeMode={mode} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={[styles.donationContent, Layout.row, { top: '2%' }]}>
        <View style={[Layout.rowCenter]}>
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
        </View>
      </View>
    </View>
  );
};

ScheduleComponent.defaultProps = {
  height: 20,
  width: 20,
  mode: 'contain',
};

export default ScheduleComponent;
