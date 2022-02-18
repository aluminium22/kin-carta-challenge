import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = (props) => {
  return (
    <View style={[styles.spinnerStyle, props.style]}>
      <ActivityIndicator
        animating
        color={props.color || '#16d9d9'}
        size={props.size || 'large'}
      />
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.0)',
  },
});
