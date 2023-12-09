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

app.listen(8081, () =>
{
    console.log("listening...");
})