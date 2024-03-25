import { createStackNavigator } from 'react-navigation'

import HomePage from './HomePage'
import LoginPage from './LoginPage';
import FormPage from './FormPage';
import ResetPasswordPage from './ResetPasswordPage';
import Sistema from './Sistema';
import Development from './Development';
import RequestPage from './RequestPage';

const AppNavigator = createStackNavigator(
{
  myCommunity: HomePage,
  login: LoginPage,
  criarCadastro: FormPage,
  redefinirSenha: ResetPasswordPage,
  sistema: Sistema,
  development: Development,
  requestPage: RequestPage
})

export default AppNavigator;