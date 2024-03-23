import { createStackNavigator } from 'react-navigation'

import HomePage from './HomePage'
import LoginPage from './LoginPage';
import FormPage from './FormPage';
import ResetPasswordPage from './ResetPasswordPage';

const AppNavigator = createStackNavigator(
{
  home: HomePage,
  login: LoginPage,
  form: FormPage,
  reset: ResetPasswordPage
})

export default AppNavigator;