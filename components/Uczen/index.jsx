export default function Uczen({
    id,
    imie,
    nazwisko,
    klasa,
    punkty,
    plec,
    index,
    wybrany = false,
    wybierz
}) {
    return (
        <tr className={index % 2 == 0 ? 'bg-slate-400' : 'bg-slate-500'}>
            <td>{id}</td>
            <td>{imie}</td>
            <td>{nazwisko}</td>
            <td>{klasa}</td>
            <td>{punkty}</td>
            <td>{plec === 0 ? 'kobieta' : 'mężczyzna'}</td>
            <td><input type="checkbox" checked={wybrany} onChange={wybierz}/></td>
        </tr>
    );
}