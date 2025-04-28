import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { mainGuru } from "../LineageDetails";
import { disciples } from "../LineageDetails";

export default function LineageDetail() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let data = null;
  if (id === "mainGuru") {
    data = mainGuru;
  } else {
    // search in disciples now
    for (let i = 0; i < disciples.length; i++) {
      if (`disciple-${i}` === id) {
        data = disciples[i];
        break;
      }
      for (let j = 0; j < disciples[i].sub.length; j++) {
        if (`sub-${i}-${j}` === id) {
          data = disciples[i].sub[j];
          break;
        }
      }
      if (data) break;
    }
  }
  if (!data) {
    return <div>LineageDetail not found</div>;
  }

  return (
    <div className=" flex flex-col items-center justify-center p-4 bg-[rgb(255,255,240)] min-h-screen">
      <div className="max-w-md mx-auto mt-12 bg-white rounded-2xl p-8 mb-4 text-center shadow-lg">
        <div className="w-28 h-28 mx-auto overflow-hidden rounded-full">
          <img
            src={`/${data.image}`}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800">
          {data.name}
        </h2>

        <p className="mt-4 text-gray-600 italic leading-relaxed">
          {data.details}
        </p>
        <div></div>
      </div>
    </div>
  );
}
