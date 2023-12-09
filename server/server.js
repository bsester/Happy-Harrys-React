import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
        host: "45.55.136.114",
        user: "F2023_bsester01",
        password: "RingedTailedPossum2023!",
        database: "F2023_bsester01"
    }
)


app.get('/topCustomers', (req, res) =>
{
    const sql = "SELECT s.SalesID, c.CustomerName, i.ItemName, s.Quantity, i.ItemPrice * s.Quantity AS Total " +
    "FROM sales s JOIN customer c ON s.CustomerID = c.CustomerID " +
    "JOIN item i ON s.ItemID = i.ItemID " +
    "ORDER BY `Total` DESC " +
    "LIMIT 5";
    db.query(sql, (err, result) =>
    {
        if (err)
            console.log(err);
        else
            return res.json(result);
    })
})



app.listen(8081, () =>
{
    console.log("listening...");
})