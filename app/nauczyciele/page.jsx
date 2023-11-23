"use client";

import { useEffect, useState } from "react";
import NauczycieleTabela from "@/components/NauczycieleTabela";

export default function Nauczyciele() {
  const [nauczyciele, setNauczyciele] = useState([]);
  const [wybranyNauczyciel, setWybranyNauczyciel] = useState();

  const wybierzNauczyciela = (id) => {
    if(id == wybranyNauczyciel?.id) return setWybranyNauczyciel(undefined);
    setWybranyNauczyciel(nauczyciele.find((klasa) => klasa.id === id));
  };

  useEffect(() => {
    fetch("/api/nauczyciele")
      .then((res) => res.json())
      .then((data) => {
        setNauczyciele(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 gap-x-[10%]">
      <h1 className="text-3xl mb-2">Nauczyciele:</h1>
      <div className="col-start-1">
        <NauczycieleTabela
        nauczyciele={nauczyciele}
        wybierzN={wybierzNauczyciela}
        wybranyN={wybranyNauczyciel}
        />
      </div>
      <div>
        {/* <PanelEdycji wybranyUczen={wybranyUczen} setUczniowie={setUczniowie} wybierzUcznia={setWybranyUczen} /> */}
      </div>
    </div>
  );
}
