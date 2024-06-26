import { ThemeProvider } from './src/ThemeContext';
import { NavigationContainer } from '@react-navigation/native';
import  HomeTab  from './src/HomeTab';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <HomeTab />
      </NavigationContainer>
    </ThemeProvider>
  );
}

