import { createStackNavigator } from 'react-navigation'

import HomePage from './HomePage'
import AboutPage from './AboutPage'

const AppNavigator = createStackNavigator(
{
  home: HomePage,
  about: AboutPage
})

export default AppNavigator;