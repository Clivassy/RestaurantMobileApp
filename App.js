import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowSreen from './src/screens/ResultsShow';

const navigator = createStackNavigator({
    Search: SearchScreen,
    ResultsShow: ResultsShowSreen
    },
    { 
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            title:'Business Search'
        }
    }
);

export default createAppContainer(navigator);
