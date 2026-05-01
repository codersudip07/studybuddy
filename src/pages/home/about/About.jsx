import { useState } from "react";
import Title from "../../../components/Title";
import Button from "../../../components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCheckmarkDone } from "react-icons/io5";

const About = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const contents = [
    {
      name: "mission",
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
      dets: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      lists: [
        "Thada bhai Joginder,ginder.",
        "Thada bhai Joginder, main thada bhai Joginder.",
        "Thada bhai Joginder, main thada bhai Joginder.",
        "Thada bhai Joginder, main thada bhai Joginder.",
        "Thada bhai Joginder, main thada bhai Joginder.",
      ],
    },
  ];

  return (
    <>
      <section className="w-full h-fit py-14 px-4 md:px-[5%]">
        <figure className="conatiner mx-auto">
          <Title text="What is Study" highlight="Buddy" text2="?" />
          <div className="w-full mt-14 flex flex-col items-center justify-between md:flex-row">
            <aside className="md:w-1/2">
              <div className="about_img relative md:w-6/7 h-60 md:h-100 mx-auto rounded-2xl bg-linear-to-b from-(--primary) to-transparent content-end">
                <img
                  src="https://res.cloudinary.com/dozupkvv3/image/upload/v1777359901/undraw_work-chat_kw8x_1_jn0irq.svg"
                  className="mx-auto w-2/3 h-full duration-150 ease-in"
                  loading="lazy"
                  alt=""
                />
              </div>
            </aside>
            <article className="mt-10 md:w-1/2 md:mt-0">
              <div className="w-fit flex rounded-lg font-medium border-2 border-(--primary) mx-auto md:mx-0">
                <button
                  onClick={() => setActiveTab("mission")}
                  className={`px-4 py-1 rounded-l-sm cursor-pointer 
    ${activeTab === "mission" ? "bg-(--primary) text-white" : ""}`}
                >
                  Mission
                </button>

                <button
                  onClick={() => setActiveTab("vision")}
                  className={`px-4 py-1 rounded-r-sm cursor-pointer 
    ${activeTab === "vision" ? "bg-(--primary) text-white" : ""}`}
                >
                  Vision
                </button>
              </div>
              <div className="md:w-6/7">
                {contents.map((content, index) => (
                  <div
                    className={
                      activeTab === content.name ? "block my-8" : "hidden"
                    }
                    key={index}
                    id={`${content.name}`}
                  >
                    <p className="text-justify">{content.dets}</p>
                    <ul className="mt-4">
                      {content.lists.map((li, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 opacity-70"
                        >
                          <IoCheckmarkDone className="text-(--primary)" />
                          {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Button style="mx-auto md:mx-0" name="Explore" icon=<FaArrowRightLong /> />
              </div>
            </article>
          </div>
        </figure>
      </section>
    </>
  );
};

export default About;
