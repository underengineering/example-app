import { connection } from "../database.js";

export default (req, res) => {
    if (req.body === undefined) return res.json({ error: "No body provided" });
    if (req.body.text === undefined)
        return res.json({ error: "No text provided" });

    connection.query(
        "INSERT INTO items (text) VALUE (?);",
        [req.body.text],
        (err, rows, fields) => {
            if (err) throw err;
            res.json({});
        }
    );
};
