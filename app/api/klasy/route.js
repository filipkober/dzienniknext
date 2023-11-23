import { NextResponse } from "next/server";
const mysql = require("mysql2/promise");

export async function GET(request) {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "dziennik",
  });

  const [rows] = await connection.execute(
    `SELECT klasy.*, nauczyciele.imie as WI, nauczyciele.nazwisko as WN FROM klasy INNER JOIN nauczyciele ON klasy.wychowawca = nauczyciele.id;`
  );
  return NextResponse.json(rows);
}