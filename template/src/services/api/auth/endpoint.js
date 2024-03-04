import endpoint from '../../../utils/endpoint';

const loginEndpoint = endpoint('post', 'login');
const registerEndpoint = endpoint('post', 'api/register');
const codeVerifyEndpoint = endpoint('post', 'api/code/verify');
const forgotPasswordEndpoint = endpoint('post', 'api/password/reset');
const resetPasswordEndpoint = id =>
  endpoint('post', `auth/password/reset/${id}`);
const logoutEndpoint = endpoint('post', 'api/logout');

export {
  loginEndpoint,
  registerEndpoint,
  codeVerifyEndpoint,
  forgotPasswordEndpoint,
  resetPasswordEndpoint,
  logoutEndpoint,
};
