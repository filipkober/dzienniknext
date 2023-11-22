"use client"
import {useState, useEffect} from 'react';

export default function Strona() {
    const [klasy, setKlasy] = useState([]);
    useEffect(() => {
    async function dane() {
        const data = await fetch('/api/klasy');
        const kls = await data.json();
        setKlasy(kls);
    }
    dane()
    },[])
    console.log(klasy)
    return (
        <div>
            <table className = "min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className='bg-gray-800 text-white'>
                        <th className='py-3 px-4 font-semibold uppercase'>ID</th>
                        <th className='py-3 px-4 font-semibold uppercase'>Nazwa</th>
                        <th className='py-3 px-4 font-semibold uppercase'>Szkoła</th>
                        <th className='py-3 px-4 font-semibold uppercase'>Wychowawca</th>
                    </tr>
                </thead>
                <tbody>
                    {klasy.map((kls, index) => {
                        return (
                            <tr key={kls.id} className='hover:bg-gray-100 text-black text-center'>
                                <td className='py-3 px-4'>{kls.id}</td>
                                <td className='py-3 px-4'>{kls.nazwa}</td>
                                <td className='py-3 px-4'>{kls.szkl}</td>
                                <td className='py-3 px-4'>{kls.imie + ' ' + kls.nazwisko}</td>
                            </tr>
                        )
                    })}  
                </tbody>
                
            </table>
        </div>
    )
}