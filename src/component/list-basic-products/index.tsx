import React from 'react';
import {
  Image,
  ImageStyle,
  View,
  ViewStyle,
  Dimensions,
  FlatList,
  Text,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import dataFake from '../../data-fake';
import useHookBasicProducts from './useHookBasicProducts';
export default function BasicProduct() {
  const {handleOnpressItem} = useHookBasicProducts();
  const Item = data => {
    const {item} = data;
    const {image, nameProduct, note} = item;
    return (
      <TouchableOpacity style={CONTAINER} onPress={handleOnpressItem}>
        <View style={CONTAINER_HOTPRODUCT}>
          <Image source={image} style={IMAGE} />
          <View style={CONTAINER_SHOES_NAME}>
            <Text style={SHOES_NAME}>{nameProduct}</Text>
            <View style={CONTAINER_PRICE}>
              <Text style={TEXT_PRICE1}>{note}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={SHOES_TITLE}>
        <Text style={TEXT_SHOES}>BẠN ĐANG TÌM</Text>
      </View>
      <FlatList
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1}}
        keyExtractor={(_, index) => {}}
        data={dataFake.filter(x => x.tag.includes('Popular'))}
        renderItem={Item}
        numColumns={2}
      />
    </>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CONTAINER: ViewStyle = {
  flex: 1,
};

const CONTAINER_HOTPRODUCT: ViewStyle = {
  flex: 1,
  width: windowWidth * 0.5,
  paddingBottom: 30,
};

const IMAGE: ImageStyle = {
  width: windowWidth * 0.45,
  height: windowHeight * 0.2,
  alignSelf: 'center',
  flex: 1,
  borderRadius: 80,
};

const SHOES_TITLE: ViewStyle = {
  width: windowWidth,
  height: windowHeight * 0.1,
  justifyContent: 'center',
  alignItems: 'center',
};

const TEXT_SHOES: TextStyle = {
  fontSize: 20,
  fontWeight: 'bold',
};

const CONTAINER_SHOES_NAME: ViewStyle = {};

const SHOES_NAME: TextStyle = {
  color: '#333333',
  justifyContent: 'center',
  alignSelf: 'center',
  fontSize: 14,
  fontWeight: 'bold',
};

const CONTAINER_PRICE: ViewStyle = {
  justifyContent: 'center',
};

const TEXT_PRICE1: TextStyle = {
  width: 160,
  justifyContent: 'center',
  alignSelf: 'center',
  fontSize: 10,
  fontWeight: '600',
  color: 'grey',
};
