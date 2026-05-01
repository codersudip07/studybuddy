import React, { useState } from 'react'
import Title from '../../../components/Title'
import { FaIndianRupeeSign } from "react-icons/fa6";

const Notes = () => {
  const [subject, setSubject] = useState(["Digital Electronicts", "Computer Architecture", "Mathematics", "C Programing Language"]);
  const [author, setAuthor] = useState([
    {
      book: "Digital Electronicts",
      authors: ["M. Morris Mano",
        "Thomas L. Floyd",
        "R.P. Jain",
        "A.P. Malvino",
        "Ronald J. Tocci",
        "Anil K. Maini",
        "A. Anand Kumar",
        "S. Salivahanan",
        "William Kleitz",
        "John F. Wakerly"]
    }, {
      book: "Computer Architecture",
      authors: ["John L. Hennessy",
        "David A. Patterson",
        "William Stallings",
        "Andrew S. Tanenbaum",
        "M. Morris Mano",
        "John P. Hayes",
        "Gerrit A. Blaauw",
        "Fred Brooks",
        "Kai Hwang",
        "David Money Harris",
        "Sarah L. Harris",
        "Randal E. Bryant",
        "David R. O'Hallaron",
        "Jim Ledin"]
    }, {
      book: "Mathematics",
      authors: ["Erwin Kreyszig",
        "Walter Rudin",
        "George B. Thomas",
        "Gilbert Strang",
        "Sheldon Axler",
        "B.S. Grewal",
        "Euclid",
        "G.H. Hardy",
        "Terence Tao",
        "Ian Stewart",
        "Steven Strogatz",
        "Michael Spivak",
        "Kenneth Rosen",
        "H.K. Dass"]
    }, {
      book: "C Programing Language",
      authors: ["Brian Kernighan",
        "Dennis Ritchie",
        "Stephen Prata",
        "Herbert Schildt",
        "Yashavant Kanetkar",
        "E. Balagurusamy",
        "K. N. King",
        "Robert Seacord",
        "Zed Shaw",
        "P.J. Plauger",
        "Samuel P. Harbison",
        "Guy L. Steele"]
    }
  ]);
  const [selectSub, setSelectSub] = useState("");
  const [selectAuthor, setSelectAuthor] = useState("");
  const [search, setSearch] = useState("");
  const [isPaid, setIsPaid] = useState(false);

  const handelSubjectChange = (event) => {
    setSelectSub(event.target.value);
    setSelectAuthor("");
  }
  const handleAuthorChange = (event) => {
    setSelectAuthor(event.target.value);
  }

  //! -------Functions in working--------
  const handelSearch = () => {

  }


  return (
    <>
      <section id="notes" className='w-full h-full py-14 px-4 md:px-[5%]'>
        <figure className='container mx-auto'>
          <Title text="Some " highlight=" Latest " text2=" Notes For You" highlightStyle="h-fit border inline-block my-4 md:my-0 border-(--primary) bg-(--primary)/20 py-1 px-3" />
          <div
            id="filter-bar"
            className='w-full mt-14 flex flex-col-reverse md:items-center justify-between md:flex-row md:gap-0 gap-2'
          >
            <div id="select-section" className='w-3/5 flex justify-around text-black'>
              <select
                id="subject"
                className='w-80 h-12 px-5 py-3 text-[18px] font-bold rounded border-none bg-white cursor-pointer'
                value={selectSub}
                onChange={handelSubjectChange}
              >
                <option
                  value="" disabled
                >Select Subject</option>
                {subject.map((content, index) => (
                  <option
                    key={index}
                    id={content}
                    value={content}
                    className='bg-white text-black'
                  >{content}</option>
                ))}
              </select>
              <select
                id="author"
                className='w-2xs px-5 py-3 text-[18px] font-bold rounded border-none bg-white cursor-pointer'
                value={selectAuthor}
                onChange={handleAuthorChange}
              >
                <option
                  value=""
                  disabled>Select Author</option>
                {selectSub != "" ?
                  author.find(item => item.book == selectSub).authors.map((content, index) => (
                    <option
                      key={index}
                      id={content}
                      value={content}
                    >
                      {content}
                    </option>
                  )) :
                  <option key={0} value={null} className='bg-white text-black'>Select an author</option>
                }
              </select>
            </div>
            <div
              id='search-toggle'
              className='md:w-2/5 flex items-center justify-between gap-2 md:gap-5'
            >
              <input
                type='text'
                placeholder="Search..."
                onChange={handelSearch}
                className='md:w-px[200] w-80 h-12 px-4 py-3 text-[18px] rounded border-none outline-none bg-white text-black'
                value={search}
              />
              <div id="toggle-section" className='flex gap-1.5'>
                <span
                  className={`text-lg hidden font-semibold transition-colors duration-300 md:block ${isPaid ? "text-white" : "text-zinc-500"}`}
                >Paid</span>
                <button
                  onClick={() => setIsPaid(!isPaid)}
                  className={`relative w-20 md:w-14 h-7 rounded-full transition-all flex justify-center items-center duration-300 ${isPaid ? "bg-green-600" : "bg-zinc-600 "
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
        </figure>
      </section>
    </>
  )
}

export default Notes