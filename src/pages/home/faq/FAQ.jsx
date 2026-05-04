import React, { useState } from 'react'
import Title from '../../../components/Title'
import { IoIosArrowDown } from 'react-icons/io'

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const handleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }
    const faq = [
        {
            question: 'What is StudyBuddy?',
            ans: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam rem dignissimos hic voluptate, magni iste tenetur earum voluptatibus quas enim maiores numquam laborum quam debitis magnam commodi, necessitatibus laudantium cum.'
        },
        {
            question: 'What is StudyBuddy?',
            ans: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam rem dignissimos hic voluptate, magni iste tenetur earum voluptatibus quas enim maiores numquam laborum quam debitis magnam commodi, necessitatibus laudantium cum.'
        },
        {
            question: 'What is StudyBuddy?',
            ans: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam rem dignissimos hic voluptate, magni iste tenetur earum voluptatibus quas enim maiores numquam laborum quam debitis magnam commodi, necessitatibus laudantium cum.'
        },
        {
            question: 'What is StudyBuddy?',
            ans: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam rem dignissimos hic voluptate, magni iste tenetur earum voluptatibus quas enim maiores numquam laborum quam debitis magnam commodi, necessitatibus laudantium cum.'
        },
        {
            question: 'What is StudyBuddy?',
            ans: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam rem dignissimos hic voluptate, magni iste tenetur earum voluptatibus quas enim maiores numquam laborum quam debitis magnam commodi, necessitatibus laudantium cum.'
        },
    ]
    return (
      <>
        <section className="w-full h-fit md:py-14 px-4 md:px-[5%]">
          <figure className="container mx-auto relative content-center">
            <Title text="Frequently Asked " highlight="Questions" />
            <div className="md:w-2/5 mx-auto mt-8">
              {faq.map((item, index) => (
                <div key={index} className="mb-1.5">
                  <h3
                    onClick={() => handleOpen(index)}
                    className="w-full flex items-center justify-between font-semibold text-lg bg-white/15 py-1 px-4 rounded-sm hover:cursor-pointer hover:bg-(--primary) ease-in duration-150 z-80"
                  >
                    {item.question}{" "}
                    <IoIosArrowDown
                      className={`ease-in duration-150 ${openIndex === index ? "-rotate-180" : "rotate-0"}`}
                    />
                  </h3>
                  <p
                    className={`w-full rounded-sm ease-in-out duration-200 px-4 bg-white/5 text-justify overflow-hidden ${openIndex === index ? "h-fit  py-2" : "max-h-0"}`}
                  >
                    {item.ans}
                  </p>
                </div>
              ))}
            </div>
            <h2 className="hidden absolute left-0 top-1/2 -translate-y-1/2 opacity-10 -rotate-90 text-center md:text-8xl font-black leading-none md:block">
              F . A . Q
            </h2>
          </figure>
        </section>
      </>
    );
}

export default FAQ