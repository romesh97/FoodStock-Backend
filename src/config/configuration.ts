export default () => ({
  app: {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    secret: process.env.JWT_SECRET,
  },
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});
