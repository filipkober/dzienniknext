import Klasa from "../Klasa"
import Nauczyciel from "../Nauczyciel"
import Uczen from "../Uczen"

export default function NauczycieleTabela({nauczyciele, wybierzN, wybranyN}){
    return (
        <table className="text-center w-full">
        <thead>
          <tr className="bg-sky-200 text-white">
            <th className="w-14 text-center">ID</th>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Przedmiot</th>
            <th>Wybrany? </th>
          </tr>
        </thead>
        <tbody>
          {nauczyciele.map((n, index) => (
            <Nauczyciel
            id={n.id}
            imie={n.imie}
            index={index}
            nazwisko={n.nazwisko}
            przedmiot={n.przedmiot}
            wybierz={() => wybierzN(n.id)}
            wybrany={n.id === wybranyN?.id}
            key={n.id}
            />
          ))}
        </tbody>
        <tfoot>
          {nauczyciele.length == 0 && (
            <tr>
              <td colSpan="6">Ładowanie...</td>
            </tr>
          )}
        </tfoot>
      </table>
    )
}