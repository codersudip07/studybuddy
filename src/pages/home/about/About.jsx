import React from "react";
import Title from "../../../components/Title";

const About = () => {
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
          <Title text="What is Study" highlight="Buddy" />
          <div className="w-full mt-14 flex items-center justify-between">
            <aside className="w-1/2">
              <div className="about_img relative w-6/7 h-100 mx-auto rounded-2xl bg-linear-to-b from-(--primary) to-transparent content-end">
                <img
                  src="https://res.cloudinary.com/dozupkvv3/image/upload/v1777359901/undraw_work-chat_kw8x_1_jn0irq.svg"
                  className="mx-auto"
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
              <div className="w-full py-2">
                {contents.map((content, index) => (
                  <div key={index} id={`${content.name}`}>
                    <p>{content.dets}</p>
                    <ul>
                      {content.lists.map((li, index) => (
                        <li>{li}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </figure>
      </section>
    </>
  );
};

export default About;
