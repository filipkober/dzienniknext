import { NextResponse } from "next/server";
const mysql = require('mysql2/promise');

export async function GET(request) {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'dziennik'
    })

    const [rows] = await connection.execute("SELECT * FROM szkoly");
    connection.end();
    return NextResponse.json(rows)
}