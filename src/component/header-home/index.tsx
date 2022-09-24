import React from 'react';
import {
  Image,
  ImageStyle,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  Dimensions,
} from 'react-native';

export default function HeaderHome() {
  return (
    <View>
      <View style={HEADER}>
        <Text style={TEXT_HEADER}>
          TRUN9K1EN-SPORT.COM - LUÔN CAM KẾT HÀNG CHÍNH HÃNG
        </Text>
      </View>
      <View style={CONTAINER_NAV_BAR}>
        <Image source={require('../../assets/image/logo.png')} style={LOGO} />
        <TouchableOpacity>
          <Image source={require('../../assets/icon/menu.png')} style={ICON1} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/icon/user.png')} style={ICON2} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/icon/shop.png')} style={ICON3} />
        </TouchableOpacity>
        <View style={CONTAINER_TEXT}>
          <TextInput
            placeholder="Tìm kiếm..."
            style={{
              textAlignVertical: 'center',
              height: 36,
              paddingLeft: 10,
              width: windowWidth - 32 - 30,
            }}
          />
          <TouchableOpacity>
            <Image
              source={require('../../assets/icon/find.png')}
              style={ICON}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TextInput />
        </View>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HEADER: ViewStyle = {
  backgroundColor: '#555555',
  width: windowWidth,
  height: windowHeight * 0.05,
  justifyContent: 'center',
  alignItems: 'center',
};

const TEXT_HEADER: TextStyle = {
  color: '#f3f3f3',
  fontSize: 12,
};

const CONTAINER_NAV_BAR: ViewStyle = {
  backgroundColor: '#3b3b3b',
  width: windowWidth,
  height: windowHeight * 0.1,
  flexDirection: 'row',
};

const ICON1: ImageStyle = {
  right: 360,
  width: 24,
  height: 24,
  marginHorizontal: 5,
  marginVertical: 5,
  position: 'absolute',
  tintColor: 'white',
};

const ICON2: ImageStyle = {
  width: 24,
  height: 24,
  right: 40,
  position: 'absolute',
  marginHorizontal: 5,
  marginVertical: 5,
  tintColor: 'white',
};

const ICON3: ImageStyle = {
  width: 24,
  height: 24,
  right: 10,
  position: 'absolute',
  marginHorizontal: 5,
  marginVertical: 5,
  tintColor: 'white',
};

const LOGO: ImageStyle = {
  width: 400,
  height: 50,
  justifyContent: 'center',
  alignContent: 'center',
  resizeMode: 'cover',
};

const CONTAINER_TEXT: ViewStyle = {
  width: windowWidth - 32,
  height: 32,
  backgroundColor: 'white',
  position: 'absolute',
  top: 44,
  left: 16,
  flexDirection: 'row',
  borderWidth: 1,
  alignItems: 'center',
};

const ICON: ImageStyle = {
  width: 20,
  height: 20,
  right: 0,
};
