module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'HMKbm3axDI',
        password: process.env.MYSQL_PASS || 'JKJ8zEtr1e',
        database: process.env.MYSQL_HOST || 'HMKbm3axDI',
    }
}

