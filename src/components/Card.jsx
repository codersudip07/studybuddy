import React, { useState } from 'react'
import { FaIndianRupeeSign, FaStar } from "react-icons/fa6";
import Button from './Button';

const Card = ({ item }) => {
  const [follow, setFollow] = useState(false);
  const handelFollowBtn = () => {
    setFollow(() => !follow);
    console.log(follow ? "following" : "not following");
  }
  return (
    <>
      <div className="w-full z-0 md:w-80 rounded-xl overflow-hidden bg-(--bg) border border-white/[0.07] shadow-2xl hover:-translate-y-1.5 transition-transform duration-300 cursor-pointer flex flex-row md:flex-col hover:shadow-lg hover:shadow-blue-700">

        {/* Banner */}
        <div
          className="shrink-0 w-28 h-28 m-2 md:m-2 md:h-40 md:w-[90%] md:self-center rounded-xl bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage: 'url("https://res.cloudinary.com/dsykp1v8c/image/upload/q_auto/f_auto/v1777649108/Screenshot_2026-05-01_205452_epszcg.png")'
          }}
        >
          <div className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(99,102,241,0.4) 0%, transparent 65%)" }} />
        </div>

        {/* Body */}
        <div className="flex-1 min-w-0 py-2 pl-2 pr-3 md:py-3.5 md:pl-2 md:pr-3.5">

          {/* Author Row */}
          <div className="flex items-center gap-2 mb-2 md:mb-3">
            <div className="w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 border-2 border-white/10"
              style={{ background: "linear-gradient(135deg, #6366f1, #a78bfa)" }}>
              RB
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[#e2e2f0] text-[12.5px] font-semibold leading-tight line-clamp-1">
                {item.author}
              </p>
              <p className="text-[#6b6b8a] text-[10.5px]">69+ followers</p>
            </div>
            <Button
              style="text-[10px] font-semibold border rounded-full px-2.5 py-0.5 whitespace-nowrap"
              name={follow ? "Following" : "Follow"}
              onclick={handelFollowBtn}
            />
          </div>

          {/* Title + Rating */}
          <div className="flex items-start justify-between gap-2 mb-1.5 md:mb-2">
            <h3 className="text-[#f0f0ff] text-[13px] md:text-[15px] font-bold leading-tight line-clamp-1">
              {item.title}
            </h3>
            <span className="shrink-0 text-[11px] font-semibold text-amber-400 bg-amber-400/10 border flex items-center border-amber-400/25 rounded-md px-2 py-0.5 gap-1">
              <FaStar /> {item.rating}
            </span>
          </div>

          {/* Description */}
          <p className="text-[#6b6b8a] text-[11px] leading-relaxed mb-2 md:mb-3 line-clamp-2 md:line-clamp-3">
            {item.about}
          </p>

          {/* Buttons */}
          <div className="flex justify-start gap-2 md:justify-end md:gap-3.5">
            <Button
              style={"text-white text-xs md:text-sm font-extrabold rounded-xl px-3 md:px-4 py-1.5 transition-transform hover:scale-105 flex items-center"}
              name="Show More"
            />
            <Button
              style={"text-white text-xs md:text-sm font-extrabold rounded-xl px-3 md:px-4 py-1.5 transition-transform hover:scale-105 flex items-center"}
              name={<FaIndianRupeeSign />}
              icon={item.price}
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default Card