"use client"
import {useState, useEffect} from 'react';

export default function Strona() {
    const [nauczyciele, setNauczyciele] = useState([]);
    useEffect(() => {
    async function dane() {
        const data = await fetch('/api/nauczyciele');
        const nau = await data.json();
        setNauczyciele(nau);
    }
    dane()
    },[])
    console.log(nauczyciele)
    return (
        <div>
            <table className = "min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className='bg-gray-800 text-white'>
                        <th className='py-3 px-4 font-semibold uppercase'>ID</th>
                        <th className='py-3 px-4 font-semibold uppercase'>Imię</th>
                        <th className='py-3 px-4 font-semibold uppercase'>Nazwisko</th>
                        <th className='py-3 px-4 font-semibold uppercase'>Przedmiot</th>
                    </tr>
                </thead>
                <tbody>
                    {nauczyciele.map((nau, index) => {
                        return (
                            <tr key={nau.id} className='hover:bg-gray-100 text-black text-center'>
                                <td className='py-3 px-4'>{nau.id}</td>
                                <td className='py-3 px-4'>{nau.imie}</td>
                                <td className='py-3 px-4'>{nau.nazwisko}</td>
                                <td className='py-3 px-4'>{nau.przedmiot}</td>
                            </tr>
                        )
                    })}  
                </tbody>
                
            </table>
        </div>
    )
}