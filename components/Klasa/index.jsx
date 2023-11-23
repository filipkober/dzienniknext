export default function Klasa({
    id,
    nazwa,
    wychowawca,
    wybrana,
    wybierz,
    index,
}) {
    return (
        <tr className={index % 2 == 0 ? 'bg-slate-400' : 'bg-slate-500'}>
            <td>{id}</td>
            <td>{nazwa}</td>
            <td>{wychowawca}</td>
            <td><input type="checkbox" checked={wybrana} onChange={wybierz}/></td>
        </tr>
    );
}