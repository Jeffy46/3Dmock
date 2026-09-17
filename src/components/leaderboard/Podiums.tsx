import { useEffect, useState } from "react";
import Standings from "./Standings";
import type { Student } from "../../interfaces/Student";
let Podiums = () => {
  let [data, setData] = useState<Student[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/top-three")
      .then((response) => response.json())
      .then((responseData) => {
        console.log("API Response:", responseData);
        setData(responseData);
      })
      .catch((error) => {
        console.error("Fetch error caught:", error);
      });
  }, []);
  return (
    <>
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg px-6 py-8 md:px-16 pb-12 border border-gray-200/50 dark:border-gray-700/50 border-b-0">
        <h1 className="text-white text-4xl font-bold text-center mb-4">
          Top Makers
        </h1>
        <div className="grid grid-cols-3 gap-5 items-end mb-4">
          {/* 2nd Place (Left - Medium Pillar) */}
          <div className="flex flex-col gap-4">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl p-6 text-center shadow-md">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                {data[1]
                  ? `${data[1]["First Name"]} ${data[1]["Last Name"]}`
                  : "Loading..."}
              </h3>
              <span className="text-[13px] text-gray-400 dark:text-gray-500">
                {data[1] ? `${data[1].Points}` : "Loading..."}
              </span>
            </div>
            <div className="text-6xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl h-[110px] flex items-center justify-center font-medium text-gray-600 dark:text-gray-300 shadow-sm">
              🥈
            </div>
          </div>

          {/* 1st Place (Center - Tallest Pillar) */}
          <div className="flex flex-col gap-4">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl p-6 text-center shadow-md">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                {data[0]
                  ? `${data[0]["First Name"]} ${data[0]["Last Name"]}`
                  : "Loading..."}{" "}
              </h3>
              <span className="text-[13px] text-gray-400 dark:text-gray-500">
                {data[0] ? `${data[0].Points}` : "Loading..."}
              </span>
            </div>
            <div className="text-7xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl h-[150px] flex items-center justify-center font-medium text-gray-600 dark:text-gray-300 shadow-sm">
              🥇
            </div>
          </div>

          {/* 3rd Place (Right - Shortest Pillar) */}
          <div className="flex flex-col gap-4">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl p-6 text-center shadow-md">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                {data[2]
                  ? `${data[2]["First Name"]} ${data[2]["Last Name"]}`
                  : "Loading..."}{" "}
              </h3>
              <span className="text-[13px] text-gray-400 dark:text-gray-500">
                {data[2] ? `${data[1].Points}` : "Loading..."}
              </span>
            </div>
            <div className="text-5xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl h-[75px] flex items-center justify-center font-medium text-gray-600 dark:text-gray-300 shadow-sm">
              🥉
            </div>
          </div>
        </div>
        <Standings />
      </div>
    </>
  );
};

export default Podiums;
