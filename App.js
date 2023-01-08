import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const AppNavigator = createStackNavigator({
    Search: SearchScreen,
});

export default createAppContainer(AppNavigator);
