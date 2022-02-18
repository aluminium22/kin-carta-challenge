import { Platform } from 'react-native';

const images = {
  favoriteFalse:
    Platform.OS === 'ios'
      ? require('./iosAssets/favorite_false/Favorite_False.png')
      : require('./androidAssets/favorite_false/Favorite_False.png'),
  favoriteTrue:
    Platform.OS === 'ios'
      ? require('./iosAssets/favorite_true/Favorite_True.png')
      : require('./androidAssets/favorite_true/Favorite_True.png'),
  userLarge:
    Platform.OS === 'ios'
      ? require('./iosAssets/user_large/User_Large.png')
      : require('./androidAssets/user_large/User_Large.png'),
  userSmall:
    Platform.OS === 'ios'
      ? require('./iosAssets/user_small/User_Small.png')
      : require('./androidAssets/user_small/User_Small.png'),
};

export default images;
