import React, { useEffect, useState } from 'react'
import Title from '../../../components/Title'
import { FaIndianRupeeSign } from "react-icons/fa6";
import Dropdown from '../../../components/Dropdown';
import { author, subject, notes } from '../../../contexts/latestNotes/latestNotes';
import Card from '../../../components/Card';

const Notes = () => {
  const [selectSub, setSelectSub] = useState("");
  const [selectAuthor, setSelectAuthor] = useState("");
  const [search, setSearch] = useState("");
  const [isPaid, setIsPaid] = useState(false);


  const topNotes = [...notes]
    .sort((a, b) => {
      if (b.rating !== a.rating) {
        return b.rating - a.rating;
      }
      return new Date(b.uploadedAt) - new Date(a.uploadedAt);
    })
    .slice(0, 3);


  useEffect(() => {
    console.log(`Subject = ${selectSub} Author = ${selectAuthor} Is Paid = ${isPaid} Search = ${search}`);
  }, [selectSub, selectAuthor, isPaid, search]);

  //! -------Functions in working--------
  const handelSearch = (e) => {
    setSearch(e.target.value);
  }


  return (
    <>
      <section id="notes" className='w-full h-full py-14 px-4 md:px-[5%]'>
        <figure className='container mx-auto'>
          {/* Title */}
          <Title text="Some " highlight=" Latest " text2=" Notes For You" highlightStyle="h-fit border inline-block my-4 md:my-0 border-(--primary) bg-(--primary)/20 py-1 px-3" />
          {/*Filter bar*/}
          <div
            id="filter-bar"
            className='w-full mt-8 flex flex-col-reverse md:items-center justify-evenly md:flex-row md:gap-0 gap-2'
          >
            <div id="select-section" className='md:w-3/5 w-full flex md:justify-around items-center  justify-center md:items-start md:flex-row text-white gap-2 md:gap-0'>
              {/* Subject Selection */}
              <Dropdown
                options={["Select Subject", ...subject]}
                preset="Select Subject"
                onSelect={setSelectSub}
                outerStyle="md:w-80 w-full z-1"
              />
              <Dropdown
                options={["Select Author", ...author]}
                preset="Select Author"
                onSelect={setSelectAuthor}
                outerStyle="md:w-80 w-full z-1"
              />
            </div>
            <div
              id='search-toggle'
              className='md:w-2/5 my-3 flex items-center justify-between gap-2 md:gap-5'
            >
              {/* Search Bar*/}
              <input
                type='text'
                placeholder="Search..."
                onChange={handelSearch}
                className='md:w-px[200] w-80 h-12 px-4 py-3 text-[18px] rounded border-none outline-none bg-white text-black'
                value={search}
              />
              {/* Toggle Button*/}
              <div id="toggle-section" className='flex gap-1.5 md:gap-0'>
                <span
                  className={`text-lg hidden font-semibold transition-colors duration-300 md:block ${isPaid ? "text-white" : "text-zinc-500"}`}
                >Paid</span>
                <button
                  onClick={() => setIsPaid(!isPaid)}
                  className={`relative cursor-pointer w-20 md:w-14 h-7 rounded-full transition-all flex justify-center items-center duration-300 ${isPaid ? "bg-green-600" : "bg-zinc-600 "
                    }`}
                  role="switch"
                  aria-checked={isPaid}
                >
                  <span className={`md:hidden h-full flex items-center justify-center absolute text-white text-xs font-semibold transition-all duration-300 ${isPaid ? "right-2.5" : "left-1.5"
                    }`}>
                    {isPaid ? "PAID" : "UNPAID"}
                  </span>
                  <span
                    className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${isPaid ? "translate-x-0" : "translate-x-13 md:translate-x-7"} flex justify-center items-center`}
                  >
                    {isPaid ? <FaIndianRupeeSign className="w-4 h-4 text-green-600" /> : ""}
                  </span>
                </button>
                <span
                  className={`hidden text-lg font-semibold transition-colors duration-300 md:block ${!isPaid ? "text-white" : "text-zinc-500"}`}
                >Unpaid</span>
              </div>
            </div>
          </div>
          {/* Latest Notes */}
          <div id="notesCard"
            className=' overflow-x-auto scrollbar-hidden h-full '
          >
            <div className='flex flex-col md:flex-row w-full gap-3 md:gap-0 md:w-full justify-evenly px-3 py-5'>
              {topNotes.map((content, idx) => (
                <Card
                  key={idx}
                  item={content}
                />
              ))}
            </div>
          </div>
        </figure>
      </section>
    </>
  )
}

export default Notes