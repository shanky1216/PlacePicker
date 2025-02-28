import React from "react";

const Places = ({ label, places, handleSelect, fallbackText }) => {
  return (
    <section className="w-full flex justify-center my-10">
      <div className="w-4/5 flex justify-center">
        <div className="border-2 rounded-xl w-4/5 border-stone-800 flex flex-col items-center">
          <h2 className="text-2xl text-stone-200 m-5 font-bold">{label}</h2>
          {places.length === 0 && (
            <p className="text-stone-200">{fallbackText}</p>
          )}
          {places.length > 0 && (
            <ul className="flex gap-5 flex-wrap justify-center ">
              {places.map((place) => (
                <li key={place.id}>
                  <button
                    onClick={() => handleSelect(place.id)}
                    className="w-[20rem]"
                  >
                    <div className="relative">
                      <img
                        className="rounded-xl"
                        src={place.image.src}
                        alt={place.image.alt}
                      />
                      <p className="text-2xl absolute text-stone-200 bottom-5 right-5 bg-yellow-500 px-2 rounded-lg">
                        {place.title}
                      </p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Places;
