import { createStackNavigator } from 'react-navigation'

import HomePage from './HomePage'
import LoginPage from './LoginPage';
import FormPage from './FormPage';
import ResetPasswordPage from './ResetPasswordPage';
import System from './System';
import Development from './Development';
import RequestPage from './RequestPage';
import LearnMore from './LearnMore';
import MyRequests from './MyRequests';
import OtherInformations from './OtherInformations';

const AppNavigator = createStackNavigator(
{
  Home: HomePage,
  Login: LoginPage,
  CreateAccount: FormPage,
  ResetPassword: ResetPasswordPage,
  System: System,
  Development: Development,
  Request: RequestPage,
  LearnMore: LearnMore,
  MyRequests: MyRequests,
  OtherInformations: OtherInformations
})

export default AppNavigator;