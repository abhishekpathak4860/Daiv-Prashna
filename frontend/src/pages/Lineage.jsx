import { mainGuru } from "../LineageDetails";
import { disciples } from "../LineageDetails";
import { useNavigate } from "react-router-dom";

export default function LineageTree() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div
      className="p-12 md:p-6 sm:p-10 bg-white min-h-screen flex flex-col items-center   overflow-x-hidden"
      style={{ backgroundColor: "#FFFDD0" }}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      transitionDuration={500}
    >
      {/* Mahaguru */}

      <div className="flex flex-col items-center relative mb-12 group">
        <div className="w-18 h-18 sm:w-24 sm:h-24 rounded-full overflow-hidden  relative">
          <img
            src={mainGuru.image}
            alt="guru"
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <p className="mt-2 text-lg font-bold">{mainGuru.name}</p>
        <p
          onClick={() => handleClick("mainGuru")}
          className="view-button cursor-pointer text-blue-600"
        >
          view details
        </p>
        <div className="w-1 h-12 bg-gray-700 absolute top-full left-1/2 transform -translate-x-1/2"></div>
      </div>

      {/* Followers & their subs */}
      <div className="relative w-full flex flex-wrap justify-center gap-10">
        <div className="absolute top-0 left-0 right-0 h-1  bg-gray-700 w-[0%] md:w-[60%] max-w-[90%] mx-auto z-0"></div>

        {disciples.map((disciple, index) => (
          <div
            key={index}
            className="flex flex-col items-center relative z-10  "
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6 w-1"></div>
            <div className="group relative flex flex-col items-center">
              <div className="group w-24 h-24 sm:w-35 sm:h-35 rounded-full overflow-hidden relative">
                <img
                  src={disciple.image}
                  alt="follower"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 font-semibold">{disciple.name}</p>
              <p
                onClick={() => handleClick(`disciple-${index}`)}
                className="view-button cursor-pointer text-blue-600"
              >
                view details
              </p>
            </div>
            <div className="w-1 h-12 bg-amber-800 my-2"></div>

            {/* Sub followers */}
            <div className=" w-full sm:w-full relative flex flex-wrap justify-center gap-4 pt-6 ">
              <div className="absolute top-[-6px] left-8 md:left-10 right-0 h-1 w-[77%] max-w-full md:w-[80%] bg-amber-800"></div>

              {disciple.sub.map((sub, subIdx) => (
                <>
                  <div
                    key={subIdx}
                    className="w-[20%] md:w-[21%]   flex flex-col items-center relative top-[-38px]"
                  >
                    <div className="relative w-0 h-12 my-2 border-2 border-pink-600 border-dotted"></div>
                    <div className="w-16 h-16 rounded-full overflow-hidden  relative">
                      <img
                        src={sub.image}
                        alt="sub"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="mt-1 text-sm text-center">{sub.name}</p>
                    <p
                      onClick={() => handleClick(`sub-${index}-${subIdx}`)}
                      className="view-button cursor-pointer text-blue-600 text-center"
                    >
                      view details
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
