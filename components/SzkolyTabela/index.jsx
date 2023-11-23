import Szkola from "../Szkola";

export default function SzkolyTabela({szkoly, wybierzS, wybranaS}){
    return (
        <table className="text-center w-full">
        <thead>
          <tr className="bg-sky-200 text-white">
            <th className="w-14 text-center">ID</th>
            <th>Nazwa</th>
            <th>Wybrana? </th>
          </tr>
        </thead>
        <tbody>
          {szkoly.map((s, index) => (
            <Szkola 
             id={s.id}
             nazwa={s.nazwa}
             wybierz={() => wybierzS(s.id)}
             wybrana={s.id === wybranaS?.id}
             index={index}
             key={s.id}
            />
          ))}
        </tbody>
        <tfoot>
          {szkoly.length == 0 && (
            <tr>
              <td colSpan="6">Ładowanie...</td>
            </tr>
          )}
        </tfoot>
      </table>
    )
}