import React, { useState, useEffect } from 'react'
import { CiHome } from "react-icons/ci";
import { MdHistory } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';

export default function Royxat() {
    const [isCompleteScreen, setisCompleteScreen] = useState(false);
    const [allTodos, setTodos] = useState([]);
    const [newTitle, setnewTitle] = useState("");
    const [newDescription, setnewDescription] = useState("");
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    // Загрузка данных из localStorage при загрузке компонента
    useEffect(() => {
        const storedTodos = localStorage.getItem('todolist');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    const handleaddtodo = () => {
        var newTodoItem = {
            title1: newTitle,
            description1: newDescription,
            count: parseInt(newDescription) || 0,
        };

        var updatedTodoArr = [...allTodos];
        updatedTodoArr.push(newTodoItem);
        setTodos(updatedTodoArr);
        setnewDescription(""); // Очистить поле
        localStorage.setItem('todolist', JSON.stringify(updatedTodoArr)); // Сохранить в localStorage
    };

    const totalJobs = allTodos.length;

    const handleSave = () => {
        // Сохранение данных в localStorage
        localStorage.setItem('todolist', JSON.stringify(allTodos));
        navigate('/Saqlangan_ishlar'); // Переход на страницу Saqlangan_ishlar
    };






    return (
        <>
            <center className="App pt-[13px]  min-h-[100vh]">
                <div className="todo_wrapper">
                    <div className="sticky top-0 bg-[#fff] w-full">
                        <div className="container ">
                            <h1 className='text-[24px] font-normal leading-[30px] mb-[7px]'>Ishlar royxati</h1>
                            <div className="todo_input inline-flex items-start flex-col justify-center mx-auto mb-[7px]">
                                <div className="todo_input_item">
                                    <label htmlFor=""></label>
                                    <select name="" id="" value={newTitle} onChange={(e) => setnewTitle(e.target.value)} className='min-w-[387px] bg-[#F3F3F4] py-[10px] pl-[14px] rounded-[8px] mb-[11px]' required>
                                        <option value="ish1" className='!opacity-[30]'>Ishni tanlang</option>
                                        <option value="Stol burchagini kesib chiqi...">Stol burchagini kesib chiqi...</option>
                                        <option value="Stol burchagini kesib chiqi...">Stol burchagini kesib chiqi...</option>
                                    </select>

                                </div>
                                <div className="grid  place-items-center grid-cols-2 place-content-between gap-[23px]">

                                    <input type="number" value={newDescription} onChange={(e) => setnewDescription(e.target.value)} placeholder='Soni' className=' py-[10px] w-full text-center bg-[#F3F3F4] rounded-[8px]' required />


                                    <button type='submit' onClick={handleaddtodo} className='PrimaryBtn inline-block bg-[#00A3FF]  py-[10px] w-full text-center text-[16px] font-normal leading-[19px] text-[#fff] rounded-[8px]'>
                                        Qoshish
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F3F3F4] !h-[43vh] overflow-y-auto">
                        {allTodos.map((item, index) => {
                            return (
                                <div className="container">
                                    <div className="todo_list pt-[7px] w-auto  ">
                                        <div className="todo_list_item w-full block  bg-[#fff] py-[10px] px-[10px] rounded-[8px] mb-[17px] " key={index}>

                                            <div className="inline-flex items-start gap-[18px] justify-between ">
                                                <h1 className='text-[20px] font-normal leading-[24px]'>{item.title1}</h1>

                                                <div className="counter flex items-center justify-between gap-[10px] mb-[17px] ">
                                                    <div onClick={() => setCount((prevCount) => (prevCount || 0) - 1)} className='bg-[#00A3FF]  py-[5px]  px-[8px] rounded-l-[5px] cursor-pointer'><i className="fa-solid fa-minus text-white"></i></div>
                                                    <div>{count || newDescription}</div>
                                                    <div onClick={() => setCount((prevCount) => (prevCount || 0) + 1)} className='bg-[#00A3FF]  py-[5px]  px-[8px] rounded-r-[5px] cursor-pointer'><i className="fa-solid fa-plus text-white"></i></div>
                                                </div>
                                            </div>
                                            <div className="text__box flex items-center justify-between px-[10px]">
                                                <p className='text-left text-[15px] font-semibold leading-[20px]'>Narxi: {count || 0}</p>
                                                <p className='text-[15px]  leading-[20px] text-[#14F10F] font-semibold'>Umumiy 250 000</p>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>

            </center>
            <footer className='bg-[#F3F3F4] fixed bottom-0 w-full'>
                <div className="container bg-[#F3F3F4]">
                    <div className="bottomDiv fixed bottom-[80px] left-auto right-auto min-w-[385px] bg-[#fff]   z-50">
                    <form action=""> <div class="relative"> <input type="search" placeholder='search' class='w-full bg-[#F3F3F4] py-[10px] pl-[14px] rounded-[8px] mb-[11px] pr-[40px]'/> <button type="submit" class="absolute top-1/2 transform -translate-y-1/2 right-[14px]"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </button> </div> </form>
                        <div className="bg-[#00A3FF] rounded-[10px] py-[12px] px-[10px]">
                            <span className='flex items-center justify-between mb-[7px]'>
                                <p className='text-[16px] font-normal leading-[20px] text-[#fff]'>Umumiy ishlar:</p>
                                <p className='text-[15px]  leading-[20px] text-[#14F10F] font-semibold'>Umumiy {totalJobs}</p>
                            </span>
                            <span className='flex items-center justify-between !mb-[11px]'> {/* 11px ga o'zgartirdim */}
                                <p className='text-[16px] font-normal leading-[20px] text-[#fff]'>Umumiy narxi:</p>
                                <p className='text-[16px] font-normal leading-[20px]  text-[#fff]'>250 000</p>
                            </span>
                        </div>

                        <button onClick={handleSave} className='min-w-[385px] block bg-[#00A3FF] mt-[11px] rounded-[10px] py-[12px] px-[10px]  text-[16px] font-normal leading-[20px] text-[#fff]'>
                            Saqlash
                        </button>

                    </div>
                    <div className="icon_box min-w-[385px] flex items-center justify-between py-[10px] mx-auto ">
                        <Link to="../Tarix"><MdHistory className='text-[48px] active:bg-[#00A3FF] transition-[2s] rounded-[100%] py-1 px-1' /></Link>
                        <CiHome className='text-[48px] active:bg-[#00A3FF] rounded-[100%] py-1 px-1' />
                        <Link to="../Profile"><CiUser className='text-[48px] active:bg-[#00A3FF] rounded-[100%] py-1 px-1' /></Link>
                    </div>
                </div>
            </footer>




        </>
    )
}
