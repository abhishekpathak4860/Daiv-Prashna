import { useParams } from "react-router-dom";
import mediaData from "../mediaData";

export default function MediaDetail() {
  const { id } = useParams();
  const getData = mediaData.find((data) => data._id === id);

  if (!getData) {
    return (
      <p className="text-center mt-10 text-red-500 text-xl">
        No Media Right Now
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-[rgb(255,255,240)] flex flex-col">
      {/* Hero Section */}
      <div
        className="relative w-full bg-cover bg-center"
        style={{ backgroundImage: `url('/background.jpg')` }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Image Side */}
          <div className="flex justify-center">
            <img
              src={`/${getData.image}`}
              alt={getData.title}
              className="rounded-lg shadow-lg object-cover h-[400px] w-[400px]"
            />
          </div>

          {/* Text Side */}
          <div className="text-center md:text-left">
            <h2 className="text-lg text-yellow-400 font-semibold mb-2 uppercase tracking-widest">
              For Peace & Spirituality
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {getData.title}
            </h1>
            <p className="text-gray-300 mb-6">
              {getData.description ||
                "Connect yourself with divine blessings through beautiful pooja ceremonies."}
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full transition">
              Join Now
            </button>
          </div>
        </div>
      </div>

      {/* Detail Section */}
      <div className="bg-[rgb(255,255,240)] w-full py-16 px-6 flex flex-col items-center">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-custom-maroon mb-6">
            About the Pooja
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {getData.fullDescription ||
              "This pooja is conducted with utmost devotion and rituals to bring peace, prosperity, and positivity to your life."}
          </p>
        </div>
      </div>
    </div>
  );
}
