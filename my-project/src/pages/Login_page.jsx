import React, { useState } from 'react';
import Royxat from '../components/Royxat';
import { Link } from 'react-router-dom';

export default function Login_page() {
  const [btn, setBtn] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault()
  };

  const handleClick = () => {
    setBtn(!btn);
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-5xl font-bold pt-16 mb-10">Kirish</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            <input
              type="text"
              placeholder="username"
              className="min-w-[358px] py-3 pl-4 bg-[#F5F5F5]  text-2xl leading-6 placeholder-[#868686] mb-6  !rounded-[7px]"
              name="username"
              required
            />
          </label>
          <br />
          <label htmlFor="password">
            <input
              type="password"
              placeholder="password"
              className="min-w-[358px] py-3 pl-4 bg-[#F5F5F5]  text-2xl leading-6 placeholder-[#868686] mb-8  rounded-[7px]"
              name="password"
              required
            />
          </label>
          <br />
          <button
            onClick={handleClick} 
            className="min-w-[358px] px-16 py-3 bg-[#00A3FF] text-white rounded-[7px] text-2xl font-normal leading-7"
          >
            <Link to="./Royxat">Tasdiqlash</Link>
          </button>
        </form>
      </div>
    </>
  );
}


