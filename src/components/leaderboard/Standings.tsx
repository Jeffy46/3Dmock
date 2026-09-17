import { useEffect, useState } from "react";
import type { Student } from "../../interfaces/Student";

let Standings = () => {
  let [places, setPlaces] = useState<number>(0);
  let [list, setList] = useState<Student[]>([]);
  let position: number = 4;
  useEffect(() => {
    fetch("http://localhost:8080/firstPage")
      .then((response) => response.json())
      .then((data) => setList([...list, ...data]));
    setPlaces(places + 20);
  }, []);
  console.log(list);
  let handleClick = () => {
    fetch("http://localhost:8080/page/" + places + "-20")
      .then((response) => response.json())
      .then((data) => setList([...list, ...data]));
    setPlaces(places + 20);
  };
  return (
    <>
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl  text-center shadow-md">
        {list.map((s: Student) => (
          <div className="px-6 py-4 flex items-center justify-between border-b border-gray-600">
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-gray-500 dark:text-gray-400 w-6">
                {position++}
              </span>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {s["First Name"] + " " + s["Last Name"]}
                </h4>
              </div>
            </div>
            <span className="text-xs text-gray-400 dark:text-white">
              <span className="">{s.Points} Points</span>
            </span>
          </div>
        ))}
        <div className="px-6 py-4 text-center text-white" onClick={handleClick}>
          Show More
        </div>
      </div>
    </>
  );
};

export default Standings;
