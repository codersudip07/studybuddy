import React from 'react'
import Button from '../../../components/Button';
import { FaPlus, FaStar } from 'react-icons/fa6';

const Achiever = () => {
    const user = [{
      name: "Prithwijit Khan",
      followers: "1k",
      ratings: "4.9",
      dets: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      contents: [
        { type: "Notes", avl_num: "300+" },
        { type: "Verified PYQ", avl_num: "30+" },
      ],
      achievement: [
        { type: "top 1 notes provider", avl_num: "2" },
      ],
    }];
  return (
    <>
      <section className="w-full h-fit md:h-full py-20 md:py-14 px-4 md:px-[5%] md:content-center">
        <figure className="container mx-auto flex flex-col gap-15 md:gap-0 md:flex-row justify-between">
          <aside className="relative md:w-1/2 h-full">
            <h3 className="font-bold absolute -top-20">
              <span className="text-3xl">#1</span> Notes Provider of The Month
            </h3>
            <div className="relative w-full h-70 md:w-140 md:h-130 md:max-h-140 mx-auto">
              <div className="achiever-img absolute inset-0 bg-white blur-3xl scale-105 bg-linear-to-l from-(--primary) to-whit "></div>
              <div className="achiever-img relative w-full h-full pt-4 md:pt-8 bg-linear-to-r from-(--primary) to-white z-10 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dozupkvv3/image/upload/v1777617066/babanchod-img_iemr0p.png"
                  className="w-5/7 md:w-full h-full md:object-contain object-center mx-auto"
                  loading="lazy"
                  alt=""
                />
              </div>
            </div>
          </aside>
          <article className="md:w-1/2">
            {user.map((dets, index) => (
              <div key={index}>
                <div className="flex items-center gap-4">
                  <h3 className="text-xl md:text-3xl font-semibold">
                    {dets.name}
                  </h3>
                  <Button
                    name="Follow"
                    icon={<FaPlus />}
                    style="bg-transparent"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <b className="text-sm">{dets.followers} Followers</b>{" "}
                  <span className="flex items-center text-sm leading-none gap-1 p-1 px-2 rounded-sm text-yellow-300 bg-(--primary)/30">
                    <FaStar /> {dets.ratings}
                  </span>
                </div>
                <p className="text-justify my-4 md:pr-4">{dets.dets}</p>

                <h3 className="text-lg font-bold">Contents</h3>
                <ul className="flex gap-4 my-2">
                  {dets.contents.map((content, index) => (
                    <li
                      key={index}
                      className="w-fit px-4 py-1 bg-(--primary)/20 border border-(--primary) rounded-sm"
                    >
                      {content.avl_num} {content.type}
                    </li>
                  ))}
                </ul>

                <h3 className="text-lg font-bold">Achievement</h3>
                <ul className="flex gap-4 my-2">
                  {dets.achievement.map((achievement, index) => (
                    <li
                      key={index}
                      className="w-fit px-4 py-1 bg-(--primary)/20 border border-(--primary) rounded-sm"
                    >
                      {achievement.avl_num} {achievement.type}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <img
              src="https://res.cloudinary.com/dozupkvv3/image/upload/v1777633211/graphic_rcfuru.svg"
              className="mt-15"
              loading="lazy"
              alt=""
            />
          </article>
        </figure>
      </section>
    </>
  );
}

export default Achiever