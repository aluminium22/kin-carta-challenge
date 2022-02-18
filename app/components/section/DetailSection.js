import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Caption, Divider, Title } from 'react-native-paper';

const DetailSection = ({ details, title, rightText }) => {
  return (
    <View>
      <View style={styles.detailContainer}>
        <View style={styles.detailSection}>
          <Caption style={styles.detailText}>{title}</Caption>
          <Text style={styles.detailText}>{details}</Text>
        </View>
        {!!rightText && (
          <View>
            <Caption>{rightText}</Caption>
          </View>
        )}
      </View>
      <Divider />
    </View>
  );
};

export default DetailSection;

const styles = StyleSheet.create({
  screenContainter: {
    flex: 1,
    padding: 16,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  detailSection: {},
  detailText: { padding: 4 },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
  },
  imageText: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  detailImage: { width: '50%', height: undefined, aspectRatio: 1 / 1 },
});
