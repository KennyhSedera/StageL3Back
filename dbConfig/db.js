module.exports = {
  USERNAME: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DATABASE: process.env.DB_NAME,
  Option: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 5432),
    dialect: process.env.DB_DIALECT || "postgres",
  },
};
