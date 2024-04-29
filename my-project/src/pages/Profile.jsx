import React, { useState, useEffect } from 'react'
import { LuDollarSign } from "react-icons/lu";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { MdDevices } from "react-icons/md";
import { MdOutlineSmartphone } from "react-icons/md";
import { CiHome } from "react-icons/ci";
import { MdHistory } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
export default function Profile() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isImageSelected, setIsImageSelected] = useState(false);
    const [userName, setUserName] = useState('');

    const [card1Open, setCard1Open] = useState(false);

    const openCard1 = () => {
        setCard1Open(!card1Open);
    };

    useEffect(() => {
        // Load the saved user name from localStorage, if it exists
        const savedUserName = localStorage.getItem('userName');
        if (savedUserName) {
            setUserName(savedUserName);
        }
    }, []);

    useEffect(() => {
        return () => {
            if (selectedImage) {
                URL.revokeObjectURL(selectedImage);
            }
        };
    }, [selectedImage]);

    const handleImageChange = (e) => {
        setSelectedImage(e.target.files[0]);
        setIsImageSelected(true);
    }

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
        localStorage.setItem('userName', e.target.value);
    }

    return (
        <>
            <center className='pt-[13px] bg-[#F3F3F4] min-h-[100vh]'>
                <div className="wrapper bg-white">
                <div className="container ">
                    <div className="title_box ">
                        <h1 className='text-[24px] font-normal leading-[30px] mb-[24px]'>
                            Ishlar tarixi
                        </h1>
                    </div>
                </div>
                </div>
                <div className="bg-[#F3F3F4] pt-[6px]">
                    <div className="container">
                        <div className="Circular_avatar pt-[10px] bg-white min-w-[368px] rounded-[10px]">
                            <div
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    backgroundColor: isImageSelected ? 'transparent' : '#ccc',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                }}
                                onClick={() => {
                                    document.querySelector('input[type="file"]').click();
                                }}
                            >
                                {selectedImage && (
                                    <img
                                        src={URL.createObjectURL(selectedImage)}
                                        alt="Selected"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                )}
                            </div>
                            <form action="" className='pb-[42px]'>
                                <input
                                    type="file"
                                    onChange={handleImageChange}
                                    className="hidden "
                                /> <br />
                                <input
                                    type="text"
                                    placeholder='ismni ozgartirish'
                                    value={userName}
                                    onChange={handleUserNameChange}
                                    className='text-[16px] leading-[20px] font-normal text-center '
                                />
                            </form>
                        </div>
                        <div className="price_box  -mt-[28px]">
                            <div className=" flex items-center justify-center gap-[13px]">
                                <div className="inlineProgress_box">
                                    <p className='text-[11px] font-normal leading-[13px]'>
                                        Hisobim
                                    </p>
                                    <div className="progress_box ">
                                        <strong className='inline-block  bg-[#00A3FF] text-white py-[5px] px-[29px] font-normal text-[13px] leading-[16px] rounded-[5px]'>
                                            1 000 000
                                        </strong>
                                    </div>
                                </div>
                                <div className="inlineProgress_box">
                                    <p className='text-[11px] font-normal leading-[13px]'>
                                        Olingan pullar
                                    </p>
                                    <div className="progress_box ">
                                        <strong className='inline-block  bg-[#00A3FF] text-white py-[5px] px-[29px] font-normal text-[13px] leading-[16px] rounded-[5px]'>
                                            1 000 000
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="settings_box pt-[21px]">
                            <div className="history min-w-[368px] bg-white py-[7px] px-[12px] flex items-center justify-between rounded-[10px] mb-2">
                                <div className="right_side flex items-center gap-[15px]">
                                    <LuDollarSign className='text-[25px] text-[#00A3FF] '/>
                                    <strong className='text-[14px] leading-[17px] font-normal text-black'>
                                        Oldi berdi tarixi
                                    </strong>
                                </div>
                                <div className="left_side">
                                    <FaArrowAltCircleRight className='text-[25px] text-[#00A3FF]'/>
                                </div>
                            </div>
                            <div className="history min-w-[368px] bg-white py-[7px] px-[12px] flex items-center justify-between rounded-[10px] mb-2">
                                <div className="right_side flex items-center gap-[15px]">
                                    <MdDevices className='text-[25px] text-[#00A3FF] '/>
                                    <strong className='text-[14px] leading-[17px] font-normal text-black'>
                                        Oldi berdi tarixi
                                    </strong>
                                </div>
                                <div className="left_side">
                                <button  onClick={openCard1}>
                                <FaArrowAltCircleRight className={`text-[#00A3FF] text-[24px] ${card1Open ? 'rotate-90' : ''}`} />
                                </button>
                                </div>
                            </div>
                           {card1Open &&  <div className="min-w-[368px] py-[11px] px-[13px] bg-white rounded-[10px] mb-2">
                                <h3 className='text-[16px] leading-[20px] font-normal mb-[13px]'>
                                Kirilgan qurilmalar
                                </h3> 
                                <div className="connected_devices bg-[#F5F5F5] py-[6px] px-[23px]">
                                    <span className=' flex items-center gap-[33px] '>
                                    <MdOutlineSmartphone className='text-[16px] font-normal leading-[20px]'/> 
                                    <p className='text-[16px] font-normal leading-[20px]'>Redmi note 8 pro</p>
                                    </span>
                                </div>
                            </div>}


                            <div className="history min-w-[368px] bg-white py-[7px] px-[12px] flex items-center justify-between rounded-[10px]">
                                <div className="right_side flex items-center gap-[15px]">
                                    <IoIosLogOut className='text-[25px] text-[#E82A00] '/>
                                    <strong className='text-[14px] leading-[17px] font-normal text-black'>
                                        Oldi berdi tarixi
                                    </strong>
                                </div>
                                <div className="left_side">
                                <strong className='text-[14px] leading-[17px] font-normal text-[#E82A00]'>
                                        kirilgan sana: 12.12.2022
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
            <footer className='bg-[#F3F3F4] fixed bottom-0 w-full'>
                <div className="container bg-[#F3F3F4]">                    
                    <div className="icon_box min-w-[385px] flex items-center justify-between py-[20px] mx-auto ">

                        <Link to="../Tarix"><MdHistory className='text-[48px] hover:bg-[#00A3FF] transition-[2s] rounded-[100%] py-1 px-1' /></Link>


                        <Link to="../Royxat"><CiHome className='text-[48px] hover:bg-[#00A3FF] rounded-[100%] py-1 px-1' /></Link>


                        <Link to="../Profile"><CiUser className='text-[48px] hover:bg-[#00A3FF] rounded-[100%] py-1 px-1' /></Link>

                    </div>
                </div>
            </footer>
        </>
    )
}
