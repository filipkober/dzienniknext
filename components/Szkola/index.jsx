export default function Szkola({
    id,
    nazwa,
    wybrana,
    wybierz,
    index,
}) {
    return (
        <tr className={index % 2 == 0 ? 'bg-slate-400' : 'bg-slate-500'}>
            <td>{id}</td>
            <td>{nazwa}</td>
            <td><input type="checkbox" checked={wybrana} onChange={wybierz}/></td>
        </tr>
    );
}