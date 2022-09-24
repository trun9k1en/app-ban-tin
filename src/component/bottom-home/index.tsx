import React from 'react';
import {View, ViewStyle, Dimensions, Text, TextStyle} from 'react-native';
export default function BottomHome() {
  return (
    <View style={CONTAINER}>
      <Text style={TEXT}>Công ty TNHN TRUN9K1ENSPORT</Text>
      <Text style={TEXT}>Mã số Doanh Nghiệp: 09112001</Text>
      <Text style={TEXT}>Ngày cấp: 09/11/2022, Nơi cấp: Marvel Studio</Text>
      <Text style={TEXT}>Địa chỉ văn phòng: Trung Yên, Cầu Giấy, Hà Nội</Text>
      <Text style={TEXT1}>Bản quyền thuộc về TRUN9K1ENSPORT</Text>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CONTAINER: ViewStyle = {
  width: windowWidth,
  height: windowHeight * 0.25,
  backgroundColor: '#222222',
  borderWidth: 1,
  justifyContent: 'flex-start',
};

const TEXT: TextStyle = {
  color: 'white',
  paddingVertical: 12,
  paddingHorizontal: 16,
};

const TEXT1: TextStyle = {
  color: '#f1dc6a',
  justifyContent: 'center',
  alignSelf: 'center',
  paddingTop: 8,
  fontWeight: '700',
};
