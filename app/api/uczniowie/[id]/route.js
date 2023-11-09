import { NextResponse } from "next/server";
const mysql = require("mysql2/promise");

export async function PUT(request, { params }) {
  const id = params.id;

  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "dziennik",
  });

  const body = await request.json();
  const { imie, nazwisko, klasa, punkty, plec } = body;

  const [rows] = await connection.execute(
    `UPDATE Uczniowie SET imie = ?, nazwisko = ?, klasa = ?, punkty = ?, plec = ? WHERE id = ?;`,
    [imie,
    nazwisko,
    klasa,
    punkty,
    Boolean(plec),
    id]
  );

  connection.end();

  return NextResponse.json(rows);
}

export async function DELETE(request, { params }) {
  const id = params.id;

  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "dziennik",
  });

  const [rows] = await connection.execute(
    `DELETE FROM Uczniowie WHERE id = ?;`,
    [id]
  );

  connection.end();

  return NextResponse.json(rows);
}
