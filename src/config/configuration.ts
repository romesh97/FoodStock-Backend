export default () => ({
  app: {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    secret: process.env.JWT_SECRET,
  },
});
