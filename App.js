import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MainStack from './app/routes/MainStack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './app/state/store';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#067C7FFF',
    accent: '#9baaaa',
    primaryOther: '#2B2D42',
    background: '#EDF2F4',
  },
};

const CombinedDefaultTheme = {
  ...theme,
  ...NavigationDefaultTheme,
  colors: {
    ...theme.colors,
    ...NavigationDefaultTheme.colors,
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#EAE9E9FF' }}>
        <PaperProvider theme={CombinedDefaultTheme}>
          <NavigationContainer theme={CombinedDefaultTheme}>
            <MainStack />
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
