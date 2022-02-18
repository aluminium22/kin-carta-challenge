import React from 'react';
import { FlatList, View, ActivityIndicator, StyleSheet } from 'react-native';
import { List, Avatar, Divider } from 'react-native-paper';
import DeprecatedTextStylePropTypes from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedTextStylePropTypes';
import Spinner from '../spinner/Spinner';
import images from '../../../assets/images';

const ItemContact = ({ item, onPress, imageSize, favorite, defaultImage }) => {
  const localPress = () => {
    onPress(item);
  };
  return (
    <List.Item
      onPress={localPress}
      title={item.name}
      description={item.companyName}
      left={() => (
        <View style={styles.icons}>
          <Avatar.Image
            size={imageSize}
            style={[styles.avatar, { marginRight: favorite ? 0 : 24 }]}
            source={{ uri: item.smallImageURL }}
          />
          {!!favorite && (
            <Avatar.Image
              size={16}
              style={styles.avatarSmall}
              source={images.favoriteTrue}
            />
          )}
        </View>
      )}
    />
  );
};

export default ItemContact;
const styles = StyleSheet.create({
  avatar: {
    backgroundColor: '#e6e6e6',
  },
  avatarSmall: {
    borderRadius: 0,
    backgroundColor: '#FFFFFF00',
    marginLeft: 8,
    marginRight: -4,
  },
  icons: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
});
