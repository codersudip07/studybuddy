import React from "react";
import Title from "../../../components/Title";
import Button from "../../../components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCheckmarkDone } from "react-icons/io5";

const About = () => {
  const contents = [
    {
      name: "mission",
      isOpen: false,
      dets: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      lists: [
        "Thada bhai Joginder, main thada bhai Joginder.",
        "Thada bhai Joginder, main thada bhai Joginder.",
        "Thada bhai Joginder, main thada bhai Joginder.",
        "Thada bhai Joginder, main thada bhai Joginder.",
        "Thada bhai Joginder, main thada bhai Joginder.",
      ],
    },
    {
      name: "vision",
      isOpen: true,
      dets: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      lists: [
        "Thada bhai Joginder, main thada bhai Joginder.",
        "Thada bhai Joginder, main thada bhai Joginder.",
        "Thada bhai Joginder, main thada bhai Joginder.",
        "Thada bhai Joginder, main thada bhai Joginder.",
        "Thada bhai Joginder, main thada bhai Joginder.",
      ],
    },
  ];

  return (
    <>
      <section className="w-full h-full py-14 px-2 md:px-[5%]">
        <figure className="conatiner mx-auto">
          <Title text="What is Study" highlight="Buddy" text2="?" />
          <div className="w-full mt-14 flex items-center justify-between">
            <aside className="w-1/2">
              <div className="about_img relative w-6/7 h-100 mx-auto rounded-2xl bg-linear-to-b from-(--primary) to-transparent content-end">
                <img
                  src="https://res.cloudinary.com/dozupkvv3/image/upload/v1777359901/undraw_work-chat_kw8x_1_jn0irq.svg"
                  className="mx-auto duration-150 ease-in"
                  alt=""
                />
              </div>
            </aside>
            <article className="w-1/2">
              <div className="w-fit flex rounded-lg font-medium border-2 border-(--primary)">
                <button className="px-4 py-1 rounded-l-sm cursor-pointer">
                  Mission
                </button>
                <button className="px-4 py-1 rounded-r-sm bg-(--primary) cursor-pointer">
                  Vision
                </button>
              </div>
              <div className="w-full">
                {contents.map((content, index) => (
                  <div
                    className={content.isOpen ? "block my-8" : "hidden"}
                    key={index}
                    id={`${content.name}`}
                  >
                    <p>{content.dets}</p>
                    <ul className="mt-4">
                      {content.lists.map((li, index) => (
                        <li className="flex items-center gap-2 opacity-70">
                          <IoCheckmarkDone className="text-(--primary)" />
                          {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Button name="Explore" icon=<FaArrowRightLong /> />
              </div>
            </article>
          </div>
        </figure>
      </section>
    </>
  );
};

export default About;
