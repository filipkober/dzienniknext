import { useState, useEffect } from "react";

export default function PanelEdycji({wybranyUczen, setUczniowie, wybierzUcznia}) {

    const [klasy, setKlasy] = useState([]);

    const [plec, setPlec] = useState(wybranyUczen ? wybranyUczen.plec : 0);
    const [imie, setImie] = useState(wybranyUczen ? wybranyUczen.imie : "");
    const [nazwisko, setNazwisko] = useState(wybranyUczen ? wybranyUczen.nazwisko : "");
    const [klasa, setKlasa] = useState(wybranyUczen ? (klasy ? (klasy.find((k) => k.nazwa == wybranyUczen.klasaN).id) : -1) : -1);
    const [punkty, setPunkty] = useState(wybranyUczen ? wybranyUczen.punkty : 0);
    const [potwierdzUsuniecie, setPotwierdzUsuniecie] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setPlec(wybranyUczen ? wybranyUczen.plec : 0);
        setImie(wybranyUczen ? wybranyUczen.imie : "");
        setNazwisko(wybranyUczen ? wybranyUczen.nazwisko : "");
        setKlasa(wybranyUczen ? klasy.find((k) => k.nazwa == wybranyUczen.klasaN).id : -1);
        setPunkty(wybranyUczen ? wybranyUczen.punkty : 0);
        setPotwierdzUsuniecie(false);
    }, [wybranyUczen]);

    useEffect(() => {
        fetch("/api/klasy")
            .then((res) => res.json())
            .then((data) => {
                setKlasy(data);
                setKlasa(wybranyUczen ? klasy.find((k) => k.nazwa == wybranyUczen.klasaN).id : -1)
                setLoading(false);
            });
    }, []);

    const dodajUcznia = async () => {
        setLoading(true);
        const res = await fetch("/api/uczniowie", {
            method: "POST",
            body: JSON.stringify({
                imie,
                nazwisko,
                klasa,
                punkty,
                plec
            })
        })
        const nowy = await res.json();
        setUczniowie((prev) => [...prev, nowy]);
        wybierzUcznia(nowy.id);
    };

    const usunUcznia = async () => {
        setLoading(true);
        await fetch(`/api/uczniowie/${wybranyUczen.id}`, {
            method: "DELETE"
        });
        setLoading(false);
        setUczniowie((prev) => prev.filter((uczen) => uczen.id !== wybranyUczen.id));
        wybierzUcznia(undefined);
    };

    const edytujUcznia = async () => {
        setLoading(true);
        await fetch(`/api/uczniowie/${wybranyUczen.id}`, {
            method: "PUT",
            body: JSON.stringify({
                imie,
                nazwisko,
                klasa,
                punkty,
                plec
            })
        });
        setLoading(false);
        setUczniowie((prev) => prev.map((uczen) => {
            if(uczen.id == wybranyUczen.id) {
                return {
                    ...uczen,
                    imie,
                    nazwisko,
                    klasaN: klasy.find((k) => k.id == klasa).nazwa,
                    klasa,
                    punkty,
                    plec
                }
            }
            return uczen;
        }));
    };

    return(
        <div className="col-start-2 bg-slate-400 rounded-md">
            <h1 className="text-3xl pt-4 pl-4 text-white ">Uczeń: {wybranyUczen ? `${wybranyUczen.imie} ${wybranyUczen.nazwisko}` : "nie wybrano"}</h1>
            <form className="flex flex-col gap-y-2 p-4">
                <label className="flex flex-col gap-y-1">
                    <span>Imię:</span>
                    <input name="imie" type="text" className="rounded-md p-1" value={imie} onChange={(e) => setImie(e.target.value)}/>
                </label>
                <label className="flex flex-col gap-y-1">
                    <span>Nazwisko:</span>
                    <input name="nazwisko" type="text" className="rounded-md p-1" value={nazwisko} onChange={(e) => setNazwisko(e.target.value)}/>
                </label>
                <label className="flex flex-col gap-y-1">
                    <span>Klasa:</span>
                    <select name="klasa" className="rounded-md p-1" value={klasa} onChange={(e) => {
                        setKlasa(e.target.value);
                    }}>
                        <option disabled value={-1}>Wybierz klasę</option>
                        {klasy.length > 0 ? klasy.map((klasa) => (
                            <option key={klasa.id} value={klasa.id}>{klasa.nazwa}</option>
                        )) : <option disabled>Ładowanie...</option>}
                    </select>
                </label>
                <label className="flex flex-col gap-y-1">
                    <span>Punkty:</span>
                    <input name="punkty" type="number" className="rounded-md p-1" value={punkty} onChange={(e) => setPunkty(e.target.value)}/>
                </label>
                <label className="flex flex-col gap-y-1">
                    <span>Płeć:</span>
                    <button type="button" className="rounded-md p-1 transition ease-in-out duration-150 hover:shadow-md" style={{backgroundColor: plec == 0 ? "pink" : "lightblue"}} onClick={() => setPlec(plec == 0 ? 1 : 0)}>{plec == 0 ? "Kobieta" : "Mężczyzna"}</button>
                </label>
                <button type="button" disabled={loading} className="bg-sky-300 rounded-md p-1 transition ease-in-out duration-150 hover:shadow-md"
                    onClick={() => {
                        if(wybranyUczen) {
                            edytujUcznia();
                        } else {
                            dodajUcznia();
                        }
                    }}
                >{wybranyUczen ? "Zapisz" : "Dodaj"}</button>
                <button type="button" disabled={loading} className="bg-red-600 text-white rounded-md p-1 transition ease-in-out duration-150 hover:shadow-md font-bold"
                    onClick={() => {
                        if(potwierdzUsuniecie) {
                            usunUcznia();
                            setPotwierdzUsuniecie(false);
                        } else {
                            setPotwierdzUsuniecie(true);
                        }
                    }}
                >{potwierdzUsuniecie ? "Na pewno?" : "Usuń"}</button>
            </form>
        </div>
    )
}