import {createStackNavigator} from '@react-navigation/stack';

export enum MainRoutes {
  Home = 'Home',
  Detail = 'Detail',
}

export const MainStack = createStackNavigator();
