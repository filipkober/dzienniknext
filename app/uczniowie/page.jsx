"use client"
import {useState, useEffect} from 'react';

export default function Strona() {
    const [uczniowie, setUczniowie] = useState([]);
    useEffect(() => {
    async function dane() {
        const data = await fetch('/api/uczniowie');
        const ucz = await data.json();
        setUczniowie(ucz);
    }
    dane()
    },[])
    console.log(uczniowie)
    return (
        <div>
            <table className = "min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className='bg-gray-800 text-white'>
                        <th className='py-3 px-4 font-semibold uppercase'>ID</th>
                        <th className='py-3 px-4 font-semibold uppercase'>Imię</th>
                        <th className='py-3 px-4 font-semibold uppercase'>Nazwisko</th>
                        <th className='py-3 px-4 font-semibold uppercase'>Płeć</th>
                        <th className='py-3 px-4 font-semibold uppercase'>Klasa</th>
                    </tr>
                </thead>
                <tbody>
                    {uczniowie.map((ucz, index) => {
                        return (
                            <tr key={ucz.id} className='hover:bg-gray-100 text-black text-center'>
                                <td className='py-3 px-4'>{ucz.id}</td>
                                <td className='py-3 px-4'>{ucz.imie}</td>
                                <td className='py-3 px-4'>{ucz.nazwisko}</td>
                                <td className='py-3 px-4'>{ucz.plec == 0 ? "kobieta" : "mężczyzna"}</td>
                                <td className='py-3 px-4'>{ucz.klasa}</td>
                            </tr>
                        )
                    })}  
                </tbody>
                
            </table>
        </div>
    )
}