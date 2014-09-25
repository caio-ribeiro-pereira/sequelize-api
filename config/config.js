module.exports = {
  username: process.env.DATABASE_MYSQL_USERNAME || "root",
  password: process.env.DATABASE_MYSQL_PASSWORD || "",
  database: "sequelize_api_" + (process.env.NODE_ENV || "development"),
  mysql: {
    port: 3306,
    host: "127.0.0.1",
    omitNull: true,
    logging: (process.env.NODE_ENV === "test" ? false : console.log),
    define: { timestamp: true, underscored: true, charset: "utf8" },
    pool: { maxConnections: 10, maxIdleTime: 30 }
  }
};