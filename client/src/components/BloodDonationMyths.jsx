import React from 'react';
import Slider from 'react-slick';

const BloodDonationMyths = () => {
//  .........................myths object starts here...............................
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
  // .........................myths object ends here...............................

  // ...............................pre-maint content................................
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
  // .................main content..................................
    <div className="flex flex-col items-center justify-center w-full h-full py-20">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Blood Donation Myths</h1>
      <Slider {...settings}>
        {myths.map((myth) => (
          <MythCard key={myth.id} myth={myth.myth} truth={myth.truth} />
        ))}
      </Slider>
    </div>
  // .................main  components..................................
  );

};

export default BloodDonationMyths;