
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { GiCheckMark, GiCancel, GiSyringe, GiSwordsPower } from 'react-icons/gi';
import { FaHeartbeat, FaRegTimesCircle, FaUserNurse } from 'react-icons/fa';
const Myths= () => {
 const benefits = [
  {
    myth: 'Myth 1: Donating blood is painful.',
    fact: 'Fact: While you may feel a slight pinch when the needle is inserted, the pain is minimal and tolerable. Most donors report feeling no pain during the donation process.',
    icon: GiSyringe ,
  },
  {
    myth: 'Myth 2: Donating blood can weaken your immune system.',
    fact: 'Fact: Blood donation does not weaken your immune system. The body replenishes the donated blood within a short period of time, and it does not have a long-term impact on your overall health or immunity.',
    icon: FaHeartbeat ,
  },
  {
    myth: 'Myth 3: Donating blood leads to weight gain.',
    fact: 'Fact: Donating blood does not cause weight gain. The amount of blood collected during a donation is relatively small and does not significantly affect your body weight.',
    icon: GiCancel ,
  },
  {
    myth: 'Myth 4: People with tattoos or piercings cannot donate blood.',
    fact: 'Fact: In most cases, having tattoos or piercings does not disqualify you from donating blood. As long as the tattoo or piercing was done in a licensed and sterile facility, you can still be eligible to donate blood after a certain period.',
    icon: GiCheckMark ,
  },
  {
    myth: 'Myth 5: Donating blood can expose you to diseases.',
    fact: 'Fact: Blood donation is a safe process that follows strict protocols to ensure the safety of donors and recipients. All blood collection centers adhere to rigorous screening procedures and use sterile equipment to prevent the transmission of diseases.',
    icon: FaUserNurse ,
  },
  {
    myth: 'Myth 6: You can get infected with COVID-19 by donating blood.',
    fact: 'Fact: Donating blood is safe during the COVID-19 pandemic. Blood collection centers have implemented additional precautions, such as enhanced cleaning, social distancing, and screening procedures, to minimize the risk of COVID-19 transmission.',
    icon: FaRegTimesCircle ,
  },
  {
    myth: 'Myth 7: You need to have a specific blood type to donate blood.',
    fact: 'Fact: Blood donation centers accept donations from individuals with different blood types. While certain blood types are in higher demand for specific medical procedures, all blood types are valuable and needed for various purposes.',
    icon: GiSwordsPower ,
  },
  {
    myth: 'Myth 9: You can donate blood only once in your lifetime.',
    fact: 'Fact: You can donate blood multiple times throughout your life, as long as you meet the eligibility criteria and follow the recommended donation intervals. The frequency of blood donation varies by country, but it is typically every 8 to 12 weeks.',
    icon: GiSyringe ,
  },
  {
    myth: 'Myth 10: Donating blood is time-consuming.',
    fact: 'Fact: The process of donating blood usually takes about 30 minutes to an hour, including the pre-donation screening and post-donation recovery period. However, the actual blood collection typically lasts around 10 minutes. Some blood collection centers also offer expedited processes for regular donors to save time.',
    icon: FaHeartbeat ,
  },
];



  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      stopOnHover={true}
      showIndicators={false}
      showArrows={false}
    >
      {benefits.map((benefit, index) => {
        const IconComponent = benefit.icon;
        return (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 z-9999">
            <div className="flex justify-center items-center">
              <IconComponent className="text-red-500 text-6xl" />
              <h1 className="text-4xl font-bold text-red-500 ml-4">
                Myths and Facts of Donating Blood
              </h1>
            </div>
            <h2 className="text-2xl text-red-600 mb-2 font-monoton font-bold">{benefit.myth}</h2>
            <p className="text-red-700 text-xl font-mono font-bold">{benefit.fact}</p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Myths;