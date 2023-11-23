"use client";

import { useEffect, useState } from "react";
import SzkolyTabela from "@/components/SzkolyTabela";

export default function Szkoly() {
  const [szkoly, setSzkoly] = useState([]);
  const [wybranaSzkola, setWybranaSzkola] = useState();

  const wybierzSzkole = (id) => {
    if(id == wybranaSzkola?.id) return setWybranaSzkola(undefined);
    setWybranaSzkola(szkoly.find((klasa) => klasa.id === id));
  };

  useEffect(() => {
    fetch("/api/szkoly")
      .then((res) => res.json())
      .then((data) => {
        setSzkoly(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 gap-x-[10%]">
      <h1 className="text-3xl mb-2">Szkoły:</h1>
      <div className="col-start-1">
        <SzkolyTabela
        szkoly={szkoly}
        wybierzS={wybierzSzkole}
        wybranaS={wybranaSzkola}
        />
      </div>
      <div>
        {/* <PanelEdycji wybranyUczen={wybranyUczen} setUczniowie={setUczniowie} wybierzUcznia={setWybranyUczen} /> */}
      </div>
    </div>
  );
}
