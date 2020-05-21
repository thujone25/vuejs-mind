// AUTH
import AuthRoot from '@/pages/AuthPages/AuthRoot';
import AuthSignIn from '@/pages/AuthPages/AuthSignIn';
import AuthSignUp from '@/pages/AuthPages/AuthSignUp';
import AuthForgotPass from '@/pages/AuthPages/AuthForgotPass';
import AuthResetPass from '@/pages/AuthPages/AuthResetPass';

export default {
  path: '/auth',
  name: 'AuthRoot',
  component: AuthRoot,
  redirect: {name: 'SignIn'},
  children: [
    {
      path: 'sign_in',
      name: 'SignIn',
      meta: {guestOnly: true},
      component: AuthSignIn
    },
    {
      path: 'sign_up',
      name: 'SignUp',
      meta: {guestOnly: true},
      component: AuthSignUp
    },
    {
      path: 'forgot_pass',
      name: 'ForgotPass',
      meta: {guestOnly: true},
      component: AuthForgotPass
    },
    {
      path: 'reset_pass',
      name: 'ResetPass',
      meta: {guestOnly: true},
      component: AuthResetPass
    },
  ]
};
