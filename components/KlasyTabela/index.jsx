import Klasa from "../Klasa"
import Uczen from "../Uczen"

export default function KlasyTabela({klasy, wybierzKlase, wybranaKlasa}){
    return (
        <table className="text-center w-full">
        <thead>
          <tr className="bg-sky-200 text-white">
            <th className="w-14 text-center">ID</th>
            <th>Nazwa</th>
            <th>Wychowawca</th>
            <th>Wybrana? </th>
          </tr>
        </thead>
        <tbody>
          {klasy.map((klasa, index) => (
            <Klasa 
             id={klasa.id}
             nazwa={klasa.nazwa}
             wychowawca={klasa.WI + " " + klasa.WN}
             wybierz={() => wybierzKlase(klasa.id)}
             wybrana={klasa.id === wybranaKlasa?.id}
             index={index}
             key={klasa.id}
            />
          ))}
        </tbody>
        <tfoot>
          {klasy.length == 0 && (
            <tr>
              <td colSpan="6">Ładowanie...</td>
            </tr>
          )}
        </tfoot>
      </table>
    )
}