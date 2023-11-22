import { NextResponse } from "next/server";
const mysql = require('mysql2/promise');

export async function GET(request) {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'dziennik'
    })

    const [rows] = await connection.execute("SELECT klasy.id, klasy.nazwa, klasy.szkola, nauczyciele.imie, nauczyciele.nazwisko, szkoly.nazwa as 'szkl' FROM klasy INNER JOIN nauczyciele ON klasy.wychowawca = nauczyciele.id INNER JOIN szkoly ON klasy.szkola = szkoly.id");
    connection.end();
    return NextResponse.json(rows)
}