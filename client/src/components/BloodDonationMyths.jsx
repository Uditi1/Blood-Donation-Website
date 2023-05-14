// import React from 'react'

// const Myths = () => {
//   return (
//     <section className="bg-gray-100 py-16">
//   <div className="container mx-auto">
//     <h2 className="text-2xl font-bold text-center mb-8">Myths Regarding Blood Donation</h2>
//     <p className="text-gray-700 leading-7">
//       There are many myths surrounding blood donation that prevent people from donating. Here are some of the most common myths:
//     </p>
//     <ul className="mt-8 list-disc list-inside text-gray-700 leading-7">
//       <li className="mb-4">
//         <span className="font-bold">Myth:</span> Donating blood is painful.
//       </li>
//       <li className="mb-4">
//         <span className="font-bold">Myth:</span> I can't donate blood because I have a tattoo.
//       </li>
//       <li className="mb-4">
//         <span className="font-bold">Myth:</span> Donating blood will make me feel weak or tired.
//       </li>
//       <li className="mb-4">
//         <span className="font-bold">Myth:</span> I can't donate blood because I take medication.
//       </li>
//       <li className="mb-4">
//         <span className="font-bold">Myth:</span> Donating blood is only for young, healthy people.
//       </li>
//     </ul>
//   </div>
// </section>
//   )
// }

// export default Myths


// import React, { useState } from "react";
// import Slider from "react-slick";
// import Card from "./Card";

// const Myths = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: "0px",
//     beforeChange: (current, next) => setCurrentSlide(next),
//   };

//   return (
//     <section className="py-12 bg-white">
//       <div className="container px-4 mx-auto">
//         <h2 className="text-xl font-bold mb-4">Blood Donation Myths</h2>
//         <Slider {...settings}>
//           <div>
//             <Card
//               title="Myth 1"
//               content="Donating blood will leave you weak and tired."
//             />
//           </div>
//           <div>
//             <Card
//               title="Myth 2"
//               content="You can’t donate blood if you have a tattoo."
//             />
//           </div>
//           <div>
//             <Card
//               title="Myth 3"
//               content="Donating blood is a painful process."
//             />
//           </div>
//           ...
//         </Slider>
//         <div className="text-center mt-8">
//           <button
//             className="inline-block py-1 px-2 text-gray-500 hover:text-gray-800"
//             onClick={() => setCurrentSlide(currentSlide - 1)}
//             disabled={currentSlide === 0}
//           >
//             Prev
//           </button>
//           <button
//             className="inline-block py-1 px-2 text-gray-500 hover:text-gray-800"
//             onClick={() => setCurrentSlide(currentSlide + 1)}
//             disabled={currentSlide === 3} // Change 3 to the total number of slides
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </section>
    
//   );
// };

// export default Myths;


import React from 'react';
import Slider from 'react-slick';

const BloodDonationMyths = () => {
  const myths = [
    {
      id: 1,
      myth: "Donating blood is very painful",
      truth: "The process of donating blood involves only minor discomfort and takes only 8-12 minutes.",
    },
    {
      id: 2,
      myth: "Donating blood can make me sick",
      truth: "Donating blood is a safe process, and there is no risk of contracting any disease through the blood donation process.",
    },
    {
      id: 3,
      myth: "I can't donate blood because of my lifestyle choices",
      truth: "As long as your lifestyle choices do not increase your risk for HIV/AIDS, you are eligible to donate blood.",
    },
    {
      id: 4,
      myth: "If I donate blood, it will take a long time to recover",
      truth: "Most people recover from donating blood within a day or two, and the body replaces the lost fluids within hours.",
    },
  ];

  const MythCard = ({ myth, truth }) => (
    <div className="w-full max-w-md mx-auto px-4 py-16">
      <div className="bg-white xl:w-1/2 mx-auto rounded-lg overflow-hidden shadow-md">
        <div className="px-4 py-2">
          <h2 className="mb-2 text-gray-800 text-3xl font-bold">{myth}</h2>
          <p className="text-gray-600">{truth}</p>
        </div>
      </div>
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-20">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Blood Donation Myths</h1>
      <Slider {...settings}>
        {myths.map((myth) => (
          <MythCard key={myth.id} myth={myth.myth} truth={myth.truth} />
        ))}
      </Slider>
    </div>
  );
};

export default BloodDonationMyths;