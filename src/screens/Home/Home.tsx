import React from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import { useTheme } from '../../hooks';
import { TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  const { Layout, Images, Fonts } = useTheme();

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: '#FFFFFF' }]}>
      <View
        style={[Layout.fullWidth, { height: 80, backgroundColor: '#174940' }]}
      >
        <View
          style={[
            Layout.justifyContentBetween,
            Layout.rowHCenter,
            { marginHorizontal: '4%', top: '3%' },
          ]}
        >
          <View style={[Layout.rowHCenter]}>
            <Image source={Images.avatar} resizeMode={'contain'} />
            <Text
              style={[Fonts.textBold, Fonts.textLight, { marginLeft: '4%' }]}
            >
              Maria Trần Văn Trung
            </Text>
          </View>
          <TouchableOpacity>
            <Image source={Images.icons.notification} resizeMode={'contain'} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={[
          Layout.fill,
          Layout.fullWidth,
          Layout.row,
          Layout.justifyContentBetween,
          { paddingHorizontal: '4%', top: '3%' },
        ]}
      >
        <View>
          <Image source={Images.icons.homeLeft} resizeMode={'contain'} />
          <Text>Đăng ký giáo lý hôn nhân</Text>
        </View>
        <View>
          <Image source={Images.icons.homeRight} resizeMode={'contain'} />
          <Text>Quyên góp cho giáo xứ</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
