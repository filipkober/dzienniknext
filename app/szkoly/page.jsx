"use client"
import {useState, useEffect} from 'react';

export default function Strona() {
    const [szkoly, setSzkoly] = useState([]);
    useEffect(() => {
    async function dane() {
        const data = await fetch('/api/szkoly');
        const szk = await data.json();
        setSzkoly(szk);
    }
    dane()
    },[])
    console.log(szkoly)
    return (
        <div>
            <table className = "min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className='bg-gray-800 text-white'>
                        <th className='py-3 px-4 font-semibold uppercase'>ID</th>
                        <th className='py-3 px-4 font-semibold uppercase'>Nazwa</th>
                    </tr>
                </thead>
                <tbody>
                    {szkoly.map((szk, index) => {
                        return (
                            <tr key={szk.id} className='hover:bg-gray-100 text-black text-center'>
                                <td className='py-3 px-4'>{szk.id}</td>
                                <td className='py-3 px-4'>{szk.nazwa}</td>
                            </tr>
                        )
                    })}  
                </tbody>
                
            </table>
        </div>
    )
}