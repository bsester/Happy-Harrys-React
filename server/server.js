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


app.get('/customers/top', (req, res) =>
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

app.get('/items/top', (req, res) =>
{
    const sql = "SELECT i.ItemID, i.ItemName, SUM(s.Quantity * i.ItemPrice) AS Total " +
        "FROM sales s " +
        "JOIN item i ON s.ItemID = i.ItemID " +
        "GROUP BY i.ItemID, i.ItemName " +
        "ORDER BY Total DESC " +
        "LIMIT 5";
        db.query(sql, (err, result) =>
        {
            if (err)
                console.log(err);
            else
                return res.json(result);
        })

})

app.get('/sales/top', (req, res) =>
{
    const sql = "SELECT i.ItemID, i.ItemID, CONCAT(DATE_FORMAT(s.SalesDate, '%M'), ' ', DATE_FORMAT(s.SalesDate, '%Y')) AS month, SUM(s.Quantity * i.ItemPrice) AS Total FROM sales s JOIN item i ON s.ItemID = i.ItemID GROUP BY i.ItemID, i.ItemID, month ORDER BY `Total` DESC LIMIT 5"
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