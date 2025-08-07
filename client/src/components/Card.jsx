import React from 'react'
import { BookUser, Globe, Mail, Pencil, Phone } from "lucide-react";
import { useEffect } from 'react';
import { useCard } from '../useContext/useContext';
export function Card() {
    const { getData, data } = useCard()
    useEffect(() => {
        getData();
    }, [])

    console.log(data);

    return (
        <div className=''>
            {data.map((e, i) => {
                return <div className='shadow-md rounded-xl h-[300px] w-[700px] mb-2'>
                    <div className='flex rounded-lx w-ful h-full gap-4 '>
                        <div className="flex w-[45%] h-full justify-center items-center bg-gradient-to-b from-[#fdc5c8] to-[#ffe1e2]">
                            {e.profile?<img src="img.png" alt="" className='rounded-full h-[150px] w-[150px] object-cover' />:<div>{e.name}</div>}
                        </div>
                        <div className='w-[50%] h-full flex  flex-col gap-3 py-2 px-2'>
                            <div className='flex justify-between items-center gap-[20px] '>
                                <div className='text-[1.2rem] font-semibold '>{e.name}</div>
                                <div className='mr-5 hover:cursor-pointer bg-[#e9f4fe] flex justify-center items-center border-2 border-blue-800  w-[35px] h-[35px] p-1'><Pencil size={18} /></div>
                            </div>
                            <div className='flex items-center gap-1'>
                                <p><Mail /></p>
                                <p>{e.email}</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <p><BookUser /></p>
                                <p>{e.address}</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <p><Phone /></p>
                                <p>{e.contact}</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <p><Globe /></p>
                                <p>{e.website}</p>
                            </div>
                            <div className="flex items-center w-full gap-2 mt-4">
                                <div>
                                    <img src="logo.png" alt="" className='h-[50px]'/>
                                </div>
                                <div>
                                    <p>Wagner LLC</p>
                                    <p>Misi excepteur add conse...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}
