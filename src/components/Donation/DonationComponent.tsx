import { View, Text, Image, DimensionValue } from 'react-native';
import React from 'react';
import styles from './styles';
import { useTheme } from '../../hooks';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { NavigationProp } from '@react-navigation/native';

interface DonationComponentProps {
  navigation: NavigationProp<any>;
  height?: DimensionValue;
  width?: DimensionValue;
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
}

// type Props = {
//   height?: DimensionValue;
//   width?: DimensionValue;
//   mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
// };

const DonationComponent = ({
  height,
  width,
  mode,
  navigation,
}: DonationComponentProps) => {
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
          <Text style={[Fonts.titleSmall]}>Donation</Text>
        </View>
        <TouchableWithoutFeedback
          style={[Layout.row, { marginLeft: 34, top: '4%' }]}
          onPress={() => navigation.navigate('DonationScreen')}
        >
          <Text style={[Fonts.textBlue, Fonts.textBold, styles.textHistory]}>
            History
          </Text>
          <View style={[{ height, width, top: '9%', marginLeft: 5 }]}>
            <Image source={Images.icons.arrowRight} resizeMode={mode} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View
        style={[
          styles.donationContent,
          Layout.row,
          Layout.justifyContentBetween,
          { top: '2%' },
        ]}
      >
        <View style={{ height: 28, alignItems: 'center' }}>
          <Text style={[Fonts.textSmall, { top: '22%', lineHeight: 16 }]}>
            Total amount donated:
          </Text>
        </View>
        <View style={[Layout.row, { height: 22, alignItems: 'center' }]}>
          <Text
            style={[
              Fonts.textBold,
              Fonts.textYellow,
              { fontSize: 22, lineHeight: 26 },
            ]}
          >
            100.000
          </Text>
          <Text
            style={[
              Fonts.textBold,
              Fonts.textYellow,
              { fontSize: 12, top: '4%' },
            ]}
          >
            VND
          </Text>
        </View>
      </View>
    </View>
  );
};

DonationComponent.defaultProps = {
  height: 20,
  width: 20,
  mode: 'contain',
};

export default DonationComponent;
