// ↓ beloved react ↓
import React from 'react';

// ↓ 3rd party utils ↓

// ↓ 3rd party components ↓

// ↓ models & types ↓

// ↓ navigation ↓
import {MainStack, MainRoutes} from './routes';

// ↓ screens ↓
import HomeScreen from '@screens/Home';
import DetailScreen from '@screens/Detail';

// ↓ modals ↓

// ↓ forms ↓

// ↓ components ↓

// ↓ fragments ↓

// ↓ utils ↓

// ↓ constants ↓

// ↓ assets ↓

// ---

const MainNavigator = (): React.ReactElement => {
  return (
    <MainStack.Navigator
      initialRouteName={MainRoutes.Home}
      screenOptions={{headerShown: false}}>
      <MainStack.Screen name={MainRoutes.Home} component={HomeScreen} />
      <MainStack.Screen name={MainRoutes.Detail} component={DetailScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
