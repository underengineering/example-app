import mysql from "mysql";

export const connection = mysql.createConnection({
    host: "10.88.0.2",
    user: "test",
    password: "root",
    database: "test",
});

connection.connect();
connection.query("CREATE TABLE IF NOT EXISTS `items` (id INT PRIMARY KEY AUTO_INCREMENT, text TEXT);", (err) => {
    if (err) throw err;
});
