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

// ------------------- CUSTOMERS ------------------
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

app.get('/customers/all', (req, res) =>
{
    const sql = "SELECT s.SalesID, c.CustomerName, c.CustomerEmail, i.ItemName, s.Quantity, i.ItemPrice * s.Quantity AS Total " +
        "FROM sales s JOIN customer c ON s.CustomerID = c.CustomerID " +
        "JOIN item i ON s.ItemID = i.ItemID ";
    db.query(sql, (err, result) =>
    {
        if (err)
            console.log(err);
        else
            return res.json(result);
    })
})

app.post('/customers/create', (req, res) =>
{
    const sql = "INSERT INTO customer (`CustomerName`,`CustomerEmail`) VALUES (?)"
    const values= [req.body.name, req.body.email];
    db.query(sql,[values], (err, result) =>
    {
        if (err)
            console.log(err);
        else
            return res.json(result);
    })
})
app.get('/customers/read/:id', (req, res) =>
{
    const sql = "SELECT * FROM customer WHERE CustomerID = ?";
    const id = req.params.id;

    db.query(sql,[id], (err, result) =>
    {
        if (err)
            return res.json(err);
        else
            return res.json(result);
    })
})

app.put('/customers/edit/:id', (req, res) =>
{
    const sql = "UPDATE item SET `CustomerName`=?, `CustomerEmail`=? WHERE ItemID=?";
    const id = req.params.id;

    db.query(sql,[req.body.name, req.body.price, id], (err, result) =>
    {
        if (err)
            console.log(res.json({Message: "Server Error"}));
        else
            return res.json(result);
    })
})
app.delete('/customers/delete/:id', (req, res) => {
    const sql = "DELETE FROM customer WHERE CustomerID = ?";
    const id = req.params.id;

    db.query(sql,[id], (err, result) =>
    {
        if (err)
            return res.json(err);
        else
            return res.json(result);
    })
})



// ------------------- ITEMS ------------------
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
app.get('/items/all', (req, res) =>
{
    const sql = "SELECT i.ItemID, i.ItemName, SUM(s.Quantity * i.ItemPrice) AS Total " +
        "FROM sales s " +
        "JOIN item i ON s.ItemID = i.ItemID " +
        "GROUP BY i.ItemID, i.ItemName "
    db.query(sql, (err, result) =>
    {
        if (err)
            console.log(err);
        else
            return res.json(result);
    })

})
app.post('/items/create', (req, res) =>
{
    const sql = "INSERT INTO item (`ItemName`,`ItemPrice`) VALUES (?)"
    const values= [req.body.name, req.body.price];
    db.query(sql,[values], (err, result) =>
    {
        if (err)
            console.log(err);
        else
            return res.json(result);
    })
})

app.get('/items/read/:id', (req, res) =>
{
    const sql = "SELECT * FROM item WHERE ItemID = ?";
    const id = req.params.id;

    db.query(sql,[id], (err, result) =>
    {
        if (err)
            return res.json(err);
        else
            return res.json(result);
    })
})
app.put('/items/edit/:id', (req, res) =>
{
    const sql = "UPDATE item SET `ItemName`=?, `ItemPrice`=? WHERE ItemID=?";
    const id = req.params.id;

    db.query(sql,[req.body.name, req.body.price, id], (err, result) =>
    {
        if (err)
            console.log(res.json({Message: "Server Error"}));
        else
            return res.json(result);
    })
})

app.delete('/items/delete/:id', (req, res) => {
    const sql = "DELETE FROM item WHERE ItemID = ?";
    const id = req.params.id;

    db.query(sql,[id], (err, result) =>
    {
        if (err)
            return res.json(err);
        else
            return res.json(result);
    })
})




// ------------------- SALES ------------------
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
app.get('/sales/all', (req, res) =>
{
    const sql = "SELECT i.ItemName, c.CustomerName, s.Quantity, DATE(s.SalesDate) AS Sales_Date, i.ItemPrice, s.Quantity * i.ItemPrice AS Total FROM sales s JOIN item i ON s.ItemID = i.ItemID JOIN customer c ON s.CustomerID = c.CustomerID WHERE MONTH(s.SalesDate) = 11 ORDER BY s.SalesDate"
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