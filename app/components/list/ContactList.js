import React from 'react';
import { SectionList, View, ActivityIndicator, StyleSheet } from 'react-native';
import { Button, List, Avatar } from 'react-native-paper';
import { Divider } from 'react-native-paper';
import Spinner from '../spinner/Spinner';
import ItemContact from './ItemContact';
import Separator from './Separator';

const ContactList = ({
  contentList,
  onPress,
  defaultImage,
  imageSize,
  loading,
}) => {
  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={styles.itemListIndicator}>
        <Spinner animating size='large' />
      </View>
    );
  };

  return (
    <SectionList
      style={styles.flatlist}
      sections={contentList}
      renderItem={({ item }) => (
        <ItemContact
          item={item}
          imageonPress={onPress}
          favorite={item.isFavorite}
          imageSize={imageSize}
          onPress={onPress}
          defaultImage={defaultImage}
        />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <List.Subheader style={{ backgroundColor: '#e6e6e6' }}>
          {title}
        </List.Subheader>
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={Separator}
      ListFooterComponent={renderFooter}
    />
  );
};

export default ContactList;

const styles = StyleSheet.create({
  itemListIndicator: {
    paddingVertical: 20,
    borderTopColor: '#e6e6e6',
  },
  flatlist: {},
});
