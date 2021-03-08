module.exports = {
  api: {
    port: process.env.API_PORT || 3030,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'notasecret!',
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'remotemysql.com',
    user: process.env.MYSQL_USER || 'fhFjeLb2mx',
    password: process.env.MYSQL_PASS || 'glbkF8Xej5',
    database: process.env.MYSQL_DB || 'fhFjeLb2mx',
  }
};
