import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './login';
import Home from './home';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login: {
        screen: Login,
        navigationOptions: {
          headerShown: false,
        },
      },
      Home: {
        screen: Home,
        navigationOptions: {
          headerShown: false,
        },
      },
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#6356fd',
        },
      },
      initialRouteName: 'Login',
    }
  )
);

export default Routes;
