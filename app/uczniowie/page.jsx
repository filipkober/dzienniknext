"use client";

import Uczen from "@/components/Uczen";
import { useEffect, useState } from "react";

export default function Uczniowie() {
  const [uczniowie, setUczniowie] = useState([]);

  useEffect(() => {
    fetch("/api/uczniowie")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUczniowie(data);
      });
  }, []);

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
        <tfoot>
          {uczniowie.length == 0 && (
            <tr>
              <td colSpan="6">Ładowanie...</td>
            </tr>
          )}
        </tfoot>
      </table>
    </div>
  );
}
