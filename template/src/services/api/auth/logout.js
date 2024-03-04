import { clearAuthToken, httpClient, logoutEndpoint } from 'services';

const logout = async body => {
  const { url } = logoutEndpoint;
  await httpClient.post(url);
  await clearAuthToken();
};

export { logout };
