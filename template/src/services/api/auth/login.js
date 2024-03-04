import { httpClient, loginEndpoint, storeAuthToken } from 'services';

const login = async body => {
  const { url } = loginEndpoint;
  const {
    data: { data },
  } = await httpClient.post(url, body);
  await storeAuthToken(data.access_token);
  return data;
};

export { login };
