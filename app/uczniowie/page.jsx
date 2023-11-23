"use client";

import { useEffect, useState } from "react";
import UczniowieTabela from "../../components/UczniowieTabela";
import PanelEdycji from "@/components/PanelEdycji";

export default function Uczniowie() {
  const [uczniowie, setUczniowie] = useState([]);
  const [wybranyUczen, setWybranyUczen] = useState();

  const wybierzUcznia = (id) => {
    if(id == wybranyUczen?.id) return setWybranyUczen(undefined);
    setWybranyUczen(uczniowie.find((uczen) => uczen.id === id));
  };

  useEffect(() => {
    fetch("/api/uczniowie")
      .then((res) => res.json())
      .then((data) => {
        setUczniowie(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 gap-x-[10%]">
      <h1 className="text-3xl mb-2">Uczniowie:</h1>
      <div className="col-start-1">
        <UczniowieTabela
          uczniowie={uczniowie}
          wybierzUcznia={wybierzUcznia}
          wybranyUczen={wybranyUczen}
        />
      </div>
      <div>
        <PanelEdycji wybranyUczen={wybranyUczen} setUczniowie={setUczniowie} wybierzUcznia={setWybranyUczen} />
      </div>
    </div>
  );
}
