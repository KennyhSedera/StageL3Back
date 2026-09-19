module.exports = {
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    DATABASE: process.env.DB_NAME,
    Option: {
        host: process.env.HOST_URL,
        dialect: 'postgres',
    }
}
