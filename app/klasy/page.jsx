"use client";

import { useEffect, useState } from "react";
import KlasyTabela from "@/components/KlasyTabela";

export default function Klasy() {
  const [klasy, setKlasy] = useState([]);
  const [wybranaKlasa, setWybranaKlasa] = useState();

  const wybierzKlase = (id) => {
    if(id == wybranaKlasa?.id) return setWybranaKlasa(undefined);
    setWybranaKlasa(klasy.find((klasa) => klasa.id === id));
  };

  useEffect(() => {
    fetch("/api/klasy")
      .then((res) => res.json())
      .then((data) => {
        setKlasy(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 gap-x-[10%]">
      <h1 className="text-3xl mb-2">Klasy:</h1>
      <div className="col-start-1">
        <KlasyTabela
        klasy={klasy}
        wybierzKlase={wybierzKlase}
        wybranaKlasa={wybranaKlasa}
        />
      </div>
      <div>
        {/* <PanelEdycji wybranyUczen={wybranyUczen} setUczniowie={setUczniowie} wybierzUcznia={setWybranyUczen} /> */}
      </div>
    </div>
  );
}
