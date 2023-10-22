import { NextResponse } from "next/server";
const mysql = require("mysql2/promise");

export async function GET(request) {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "dziennik",
  });

  const [rows] = await connection.execute(
    `SELECT U.*,
    K.nazwa AS 'klasaN'
    FROM Uczniowie AS U
    JOIN Klasy AS K ON U.klasa = K.id;
`
  );
  return NextResponse.json(rows);
}
