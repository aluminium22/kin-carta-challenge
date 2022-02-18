import * as React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import { Button, Caption, Divider, Title, Avatar } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import Separator from '../components/list/Separator';
import DetailSection from '../components/section/DetailSection';
import Moment from 'moment';
import { updateFavoriteToggle } from '../actions/actions';
import images from '../../assets/images';

export default function ContactDetail({ navigation }) {
  const contact = useSelector((state) => state.appData.contact);
  const isFavorite = useSelector((state) => state.appData.contact.isFavorite);
  const contacts = useSelector((state) => state.appData.contacts);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button style={styles.button} onPress={handleFavoriteToggle}>
          {!!contact.isFavorite && (
            <Avatar.Image
              size={24}
              source={images.favoriteTrue}
              style={styles.avatar}
            />
          )}
          {!contact.isFavorite && (
            <Avatar.Image
              size={24}
              source={images.favoriteFalse}
              style={styles.avatar}
            />
          )}
        </Button>
      ),
    });
  }, [navigation, contact]);

  React.useEffect(() => {
    if (loading) {
      const updatedContact = { ...contact, isFavorite: !contact.isFavorite };
      dispatch(
        updateFavoriteToggle(!contact.isFavorite, updatedContact, contacts)
      );
      setLoading(false);
    }
  }, [loading]);

  const adjustPhone = (phone) => {
    let newPhone = '';
    if (phone && phone.length === 12) {
      newPhone = `(${phone.substring(0, 3)}) ${phone.substring(4, 11)}`;
    } else {
      newPhone = phone;
    }
    return newPhone;
  };

  const handleFavoriteToggle = () => {
    setLoading(true);
  };

  return (
    <ScrollView style={styles.screenContainter}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.detailImage}
          source={{ uri: contact.largeImageURL }}
        />
      </View>
      <View style={styles.imageText}>
        <Title>{contact.name}</Title>
        <Caption>{contact.companyName}</Caption>
      </View>
      <Divider />
      {!!contact.phone && contact.phone.home && (
        <DetailSection
          details={adjustPhone(contact.phone.home)}
          title={'PHONE:'}
          rightText={'Home'}
        />
      )}
      {!!contact.phone && contact.phone.mobile && (
        <DetailSection
          details={adjustPhone(contact.phone.mobile)}
          title={'PHONE:'}
          rightText={'Mobile'}
        />
      )}
      {!!contact.phone && contact.phone.work && (
        <DetailSection
          details={adjustPhone(contact.phone.work)}
          title={'PHONE:'}
          rightText={'Work'}
        />
      )}
      {!!contact.address && (
        <DetailSection
          details={`${contact.address.street} ${contact.address.city}, ${contact.address.state} ${contact.address.zipCode}, ${contact.address.country}`}
          title={'ADDRESS:'}
          rightText={''}
        />
      )}
      {!!contact.birthdate && (
        <DetailSection
          details={Moment(contact.birthdate).format('MMMM Do, YYYY')}
          title={'BIRTHDATE:'}
          rightText={''}
        />
      )}
      {!!contact.emailAddress && (
        <DetailSection
          details={contact.emailAddress}
          title={'EMAIL:'}
          rightText={''}
        />
      )}
      <Divider style={{ marginBottom: 50 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainter: {
    flex: 1,
    padding: 16,
  },
  button: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
  },
  imageText: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    alignSelf: 'center',
    backgroundColor: '#ffffff00',
  },
  detailImage: { width: '50%', height: undefined, aspectRatio: 1 / 1 },
});
