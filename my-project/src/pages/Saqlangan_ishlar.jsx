import React, { useState } from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { MdHistory } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';

export default function Saqlangan_ishlar({onSave}) {
    const [card1Open, setCard1Open] = useState(false);
    const [card2Open, setCard2Open] = useState(false);

    const openCard1 = () => {
        setCard1Open(!card1Open);
    };

    const openCard2 = () => {
        setCard2Open(!card2Open);
    };

    return (
        <>
            <center className='pt-[13px] bg-[#F3F3F4] min-h-[100vh]'>
                <div className="wrapper bg-white">
                <div className="container sticky top-0 pb-[12px] ">
                    <h1 className='text-[24px] font-normal leading-[30px] mb-[24px]'>
                        Ishlar tarixi
                    </h1>
                    <form action=""> <div className="relative"> <input type="search" placeholder='search' className='w-full bg-[#F3F3F4] py-[10px] pl-[14px] rounded-[8px] mb-[11px] pr-[40px]'/> <button type="submit" className="absolute top-1/2 transform -translate-y-1/2 right-[14px]"> <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </button> </div> </form>
                    <div className="grid place-items-center gap-[15px] grid-cols-3 place-content-between ">
                        <a className="inline-block w-full  py-[7px] bg-[#00A3FF] text-white rounded-[5px] cursor-pointer">
                            2022-dekabr
                        </a>
                        <a className="inline-block w-full py-[7px]  text-black bg-[#F6F6F6] rounded-[5px] cursor-pointer">
                            2023-dekabr
                        </a>
                        <a className="inline-block w-full py-[7px]  text-black bg-[#F6F6F6] rounded-[5px] cursor-pointer">
                            2024-dekabr
                        </a>
                    </div>
                </div>
                </div>
                <div className=" pt-[21px]">
                    <div className="container">
                        <div className="card bg-[#FFFFFF] px-[13px]   pt-[13px] rounded-[8px] mb-[21px]">
                            <div className="title_box flex items-center justify-between pb-[14px]">
                                <span className='inline-flex items-center gap-[15px] text-[16px] leading-[20px] font-normal'>
                                    <strong className='text-[20px] leading-[24px] font-normal'>12-Dekabr</strong>
                                    Summasi:200 000 so'm
                                </span>
                                <button onClick={openCard1}>
                                    <FaArrowAltCircleRight className={`text-[#00A3FF] text-[24px] ${card1Open ? 'rotate-90' : ''}`} />
                                </button>
                            </div>
                            {card1Open && <div className="purchase_box">
                                <span className='flex items-center justify-between  mb-[12px]'>
                                    <p className='text-[16px] leading-[20px] font-normal'>Stol burchagini kesib chiqi...</p>
                                    <p className='text-[16px] leading-[20px] font-normal'>23 ta</p>
                                </span>
                                <span className='flex items-center justify-between pb-[21px]'>
                                    <p className='text-[16px] leading-[20px] font-normal'>Stol burchagini kesib chiqi...</p>
                                    <p className='text-[16px] leading-[20px] font-normal'>23 ta</p>
                                </span>
                            </div>}
                        </div>
                        <div className="card bg-[#FFFFFF] bg-fixed px-[13px]   pt-[13px] rounded-[8px]">
                            <div className="title_box flex items-center justify-between pb-[14px]">
                                <span className='inline-flex items-center gap-[15px] text-[16px] leading-[20px] font-normal'>
                                    <strong className='text-[20px] leading-[24px] font-normal'>12-Dekabr</strong>
                                    Summasi:200 000 so'm
                                </span>
                                <button onClick={openCard2}>
                                    <FaArrowAltCircleRight className={`text-[#00A3FF] text-[24px] ${card2Open ? 'rotate-90' : ''}`} />
                                </button>
                            </div>
                            {card2Open && <div className="purchase_box">
                                <span className='flex items-center justify-between  mb-[12px]'>
                                    <p className='text-[16px] leading-[20px] font-normal'>Stol burchagini kesib chiqi...</p>
                                    <p className='text-[16px] leading-[20px] font-normal'>23 ta</p>
                                </span>
                                <span className='flex items-center justify-between pb-[21px]'>
                                    <p className='text-[16px] leading-[20px] font-normal'>Stol burchagini kesib chiqi...</p>
                                    <p className='text-[16px] leading-[20px] font-normal'>23 ta</p>
                                </span>
                            </div>}
                        </div>
                    </div>
                </div>
            </center>
            <footer className='bg-[#E3E3E3] fixed bottom-0 w-full'>
                <div className="container ">
                    <div className="bottomDiv fixed bottom-[90px] left-auto right-auto min-w-[385px] bg-[#fff]   z-50">

                        <div className="bg-[#00A3FF] rounded-[10px] py-[12px] px-[10px]">
                            <span className='flex items-center justify-between mb-[7px]'>
                                <p className='text-[16px] font-normal leading-[20px] text-[#fff]'>Umumiy ishlar:</p>
                                <p className='text-[16px] font-normal leading-[20px]  text-[#fff]'></p>
                            </span>
                            <span className='flex items-center justify-between !mb-[11px]'> {/* 11px ga o'zgartirdim */}
                                <p className='text-[16px] font-normal leading-[20px] text-[#fff]'>Umumiy narxi:</p>
                                <p className='text-[16px] font-normal leading-[20px]  text-[#fff]'>250 000</p>
                            </span>
                        </div>
                       

                    </div>
                    <div className="icon_box min-w-[385px] flex items-center justify-between py-[20px] mx-auto ">

                        <Link to=""><MdHistory className='text-[48px] hover:bg-[#00A3FF] transition-[2s] rounded-[100%] py-1 px-1' /></Link>


                        <Link to="../Royxat"><CiHome className='text-[48px] hover:bg-[#00A3FF] rounded-[100%] py-1 px-1' /></Link>


                        <Link to="../Profile"><CiUser className='text-[48px] hover:bg-[#00A3FF] rounded-[100%] py-1 px-1' /></Link>

                    </div>
                </div>
            </footer>
        </>
    )
}
