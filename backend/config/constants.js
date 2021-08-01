require("dotenv").config();

module.exports = {
  "Environment": {
    "PORT": process.env.PORT,
    "HOST": process.env.HOST,
    "DB_NAME": process.env.DB_NAME,
    "DB_USER": process.env.DB_USER,
    "DB_PASSWORD": process.env.DB_PASSWORD,
    "DB_HOST": process.env.DB_HOST,
    "DB_DIALECT": process.env.DB_DIALECT,
    "DB_PORT": process.env.DB_PORT,
  },

  "DataTypes": {
    CHAR: 'char',
    STRING: 'string',
    TEXT: 'text',
    SMALLINT: 'smallint',
    BIGINT: 'bigint',
    INTEGER: 'int',
    SMALL_INTEGER: 'smallint',
    BIG_INTEGER: 'bigint',
    REAL: 'real',
    DATE: 'date',
    DATE_TIME: 'datetime',
    TIME: 'time',
    BLOB: 'blob',
    TIMESTAMP: 'timestamp',
    BINARY: 'binary',
    BOOLEAN: 'boolean',
    DECIMAL: 'decimal'
  },

  "DatabaseTables": {
    "User": "users",
  }

};
