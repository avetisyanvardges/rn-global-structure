const endpoint = (method, route) => ({
  endpoint: `${method} ${route}`,
  url: route,
});

export { endpoint };
