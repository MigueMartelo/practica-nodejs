module.exports = {
  api: {
    port: process.env.API_PORT || 3030,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'notasecret!',
  },
};
