export default function Nauczyciel({
    id,
    imie,
    nazwisko,
    przedmiot,
    index,
    wybierz,
    wybrany
}) {
    return (
        <tr className={index % 2 == 0 ? 'bg-slate-400' : 'bg-slate-500'}>
            <td>{id}</td>
            <td>{imie}</td>
            <td>{nazwisko}</td>
            <td>{przedmiot}</td>
            <td><input type="checkbox" checked={wybrany} onChange={wybierz}/></td>
        </tr>
    );
}