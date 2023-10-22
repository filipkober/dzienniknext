import Uczen from "../../../components/Uczen";

async function getData() {
    const mysql = require("mysql2/promise");
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
        `);
        await connection.end();
        return rows;
}

export default async function UczniowieSerwer(){
    const uczniowie = await getData();
    return (
        <div>
          <h1 className="text-3xl mb-2">Uczniowie:</h1>
          <table className="text-center">
            <thead>
              <tr className="bg-sky-200 text-white">
                <th className="w-14 text-center">ID</th>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Klasa</th>
                <th className="w-14">Punkty</th>
                <th>Płeć</th>
              </tr>
            </thead>
            <tbody>
              {uczniowie.map((uczen, index) => (
                <Uczen
                  id={uczen.id}
                  imie={uczen.imie}
                  nazwisko={uczen.nazwisko}
                  klasa={uczen.klasaN}
                  punkty={uczen.punkty}
                  plec={uczen.plec}
                  index={index}
                  key={uczen.id}
                />
              ))}
            </tbody>
          </table>
        </div>
      );
}