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

  connection.end();

  return NextResponse.json(rows);
}

export async function POST(request) {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "dziennik",
  });

  const body = await request.json();
  const { imie, nazwisko, klasa, punkty, plec } = body;

  const [rowsI] = await connection.execute(
    `INSERT INTO Uczniowie (imie, nazwisko, klasa, punkty, plec) VALUES (?, ?, ?, ?, ?);`,
    [imie, nazwisko, klasa, punkty, Boolean(plec)]
  );

  const [rows] = await connection.execute(`SELECT U.*,
  K.nazwa AS 'klasaN'
  FROM Uczniowie AS U
  JOIN Klasy AS K ON U.klasa = K.id WHERE U.id = LAST_INSERT_ID();`);

  connection.end();

  return NextResponse.json(rows);
}
