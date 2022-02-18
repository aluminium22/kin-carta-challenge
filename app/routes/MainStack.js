import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contacts from '../screens/Contacts';
import React from 'react';
import ContactDetail from '../screens/ContactDetail';

import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import { Button, Caption, Divider, Title } from 'react-native-paper';
const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'Contacts',
          headerStyle: {
            backgroundColor: '#EAE9E9FF',
          },
          headerTintColor: '#2F2F31FF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name='Contacts'
        component={Contacts}
      />
      <Stack.Screen
        options={({ navigation, route }) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#e6e6e6',
          },
          headerTintColor: '#067C7FFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
        name='ContactDetail'
        component={ContactDetail}
      />
    </Stack.Navigator>
  );
};
export default MainStack;
