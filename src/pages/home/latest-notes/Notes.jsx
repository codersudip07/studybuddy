import React, { useState } from 'react'
import Title from '../../../components/Title'

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
            <section id="notes" className='w-full h-full py-14 px-2 md-[5%]'>
                <figure className='container mx-auto'>
                    <Title text="Some " highlight=" Latest " text2=" Notes For You" highlightStyle="h-fit border inline-block my-4 md:my-0 border-(--primary) bg-(--primary)/20 py-1 px-3" />
                    <div
                        id="filter-bar"
                        className='flex '
                    >
                        <div id="select-section">
                            <select
                                id="subject"
                                className='bg-white text-black'
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
                                className=''
                                value={selectAuthor}
                                onChange={handleAuthorChange}
                                className='bg-white text-black'
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
                        <div id='search-toggle'>
                            <input
                                type='text'
                                placeholder="Search..."
                                onChange={handelSearch}
                                className=''
                                value={search}
                            />
                            <div class="toggle-section">
                                <span>Paid</span>

                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider"></span>
                                </label>

                                <span>Unpaid</span>
                            </div>
                        </div>
                    </div>
                </figure>
            </section>
        </>
    )
}

export default Notes