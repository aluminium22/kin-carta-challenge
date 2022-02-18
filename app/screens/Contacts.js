import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, List, Avatar } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import images from '../../assets/images';
import Separator from '../components/list/Separator';
import ContactList from '../components/list/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact, updateContacts } from '../actions/actions';

export default function Contacts(props) {
  const contacts = useSelector((state) => state.appData.contacts);
  const favorites = useSelector((state) => state.appData.favoriteContacts);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) {
      dispatch(updateContacts());
      setLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    if (!contacts.length) {
      setLoading(true);
    }
  }, []);

  const handleContactPress = (contact) => {
    dispatch(updateContact(contact));
    props.navigation.push('ContactDetail');
  };

  return (
    <View>
      <List.Section style={{ marginTop: 0 }}>
        {!!contacts && (
          <ContactList
            contentList={contacts}
            defaultImage={images.userSmall}
            onPress={handleContactPress}
            loading={false}
            imageSize={54}
          />
        )}
        {!contacts && (
          <View
            styles={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ alignSelf: 'center', padding: 16 }}>
              Sorry, there are no contacts available!
            </Text>
          </View>
        )}
      </List.Section>
    </View>
  );
}
