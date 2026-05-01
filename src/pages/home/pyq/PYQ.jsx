import React, { useState, useEffect } from "react";
import Dropdown from "../../../components/Dropdown";
import { pyq, years, streams } from "../../../contexts/pyqs";
import { FaArrowRightLong, FaEye } from "react-icons/fa6";
import Button from "../../../components/Button";

const PYQ = () => {
  const [selectedYear, setSelectedYear] = useState("ALL");
  const [selectedStream, setSelectedStream] = useState("ALL");
  const [showAll, setShowAll] = useState(false);
  const filteredData = pyq.filter((item) => {
    const yearMatch = selectedYear === "ALL" || item.year === selectedYear;
    const streamMatch =
      selectedStream === "ALL" || item.stream === selectedStream;

    return yearMatch && streamMatch;
  });
  const visibleData = showAll ? filteredData : filteredData.slice(0, 15);
  useEffect(() => {
    setShowAll(false);
  }, [selectedYear, selectedStream]);
  return (
    <>
      <section className="w-full h-fit md:w-full py-20 md:mb-5 px-4 md:px-[5%]">
        <figure className="container mx-auto">
          <h2 className="pyq text-center text-6xl md:text-9xl font-black leading-none">
            P . Y . Q
          </h2>
          <div className="mt-6 md:mt-4">
            <div className="flex items-center justify-between">
              <Dropdown
                options={["ALL", ...years]}
                preset="ALL"
                onSelect={setSelectedYear}
                style="left-0"
              />
              <h3 className="md:text-3xl font-bold">{selectedStream}</h3>
              <Dropdown
                options={["ALL", ...streams]}
                preset="ALL"
                onSelect={setSelectedStream}
                style="right-0"
              />
            </div>
            <div className="mt-6">
              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {visibleData.map((paper, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 flex items-center justify-between rounded-lg 
            bg-(--primary)/20 hover:bg-(--primary) 
            ease-in duration-100 cursor-pointer"
                  >
                    <h3 className="text-lg font-medium">{paper.name}</h3>
                    <FaEye />
                  </div>
                ))}
              </div>

              {/* Show All Button */}
              {filteredData.length > 15 && (
                <Button
                  onclick={() => setShowAll(!showAll)}
                  name={showAll ? "Show less" : "Show all"}
                  icon={<FaArrowRightLong />}
                  style="my-6 mx-auto"
                />
              )}
            </div>
          </div>
        </figure>
      </section>
    </>
  );
};

export default PYQ;
