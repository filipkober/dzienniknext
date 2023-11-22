import Uczen from "../Uczen"

export default function UczniowieTabela({uczniowie, wybierzUcznia, wybranyUczen}){
    return (
        <table className="text-center w-full">
        <thead>
          <tr className="bg-sky-200 text-white">
            <th className="w-14 text-center">ID</th>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Klasa</th>
            <th className="w-14">Punkty</th>
            <th>Płeć</th>
            <th>Wybrany? </th>
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
              wybierz={() => wybierzUcznia(uczen.id)}
              wybrany={wybranyUczen?.id == uczen.id}
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
    )
}