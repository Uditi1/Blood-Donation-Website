// import React from 'react';
// import Card from "./Card"

// const NewCarousel = () => {
//   const benefits = [
//     {
//       title: 'Save Lives',
//       description: 'Donating blood can help save the lives of up to three people in need.',
//     },
//     {
//       title: 'Reduce Risk of Heart Disease',
//       description: 'Regular blood donation can reduce the risk of heart disease in donors.',
//     },
//     {
//       title: 'Burn Calories',
//       description: 'Donating blood can burn up to 650 calories.',
//     },
//     {
//       title: 'Free Health Check-Up',
//       description: 'Donors receive a free health check-up before donating blood.',
//     },
//   ];

//   return (
//     <div className="flex gap-2 container mx-auto py-8">
//       {benefits.map((benefit, index) => (
//         <Card key={index} title={benefit.title} description={benefit.description} />
//       ))}
//     </div>
//   );
// };

// export default NewCarousel;

// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const BenefitsCarousel = () => {
//   const benefits = [
//     {
//       title: 'Save Lives',
//       description: 'Donating blood can help save the lives of up to three people in need.',
//     },
//     {
//       title: 'Reduce Risk of Heart Disease',
//       description: 'Regular blood donation can reduce the risk of heart disease in donors.',
//     },
//     {
//       title: 'Burn Calories',
//       description: 'Donating blood can burn up to 650 calories.',
//     },
//     {
//       title: 'Free Health Check-Up',
//       description: 'Donors receive a free health check-up before donating blood.',
//     },
//   ];

//   return (
//     <Carousel
//       showThumbs={false}
//       showStatus={false}
//       infiniteLoop={true}
//       autoPlay={true}
//       interval={5000}
//       stopOnHover={true}
//       showIndicators={false}
//       showArrows={false}
//     >
//       {benefits.map((benefit, index) => (
//         <div key={index} className="bg-white rounded-lg shadow-lg p-6">
//         <h1 className="text-4xl font-bold text-red-500 mb-4">Benefits of Donating Blood</h1>
//         <h2 className="text-lg font-medium mb-2">{benefit.title}</h2>
//         <p className="text-gray-600 text-sm">{benefit.description}</p>
//       </div>
      
//       ))}
//     </Carousel>
//   );
// };

// export default BenefitsCarousel;


import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { AiOutlineHeart, AiFillFire } from 'react-icons/ai';
import { BsFillGiftFill ,BsShieldCheck ,BsDropletHalf } from 'react-icons/bs';
import { GiHealthNormal ,GiBiceps } from 'react-icons/gi';
import { BiSmile, BiHeart } from 'react-icons/bi';
import { FiSmile } from 'react-icons/fi';
import { IoMdMoon } from 'react-icons/io';
import { MdBloodtype } from 'react-icons/md';
import { CgGym } from 'react-icons/cg';
import { FaBolt,FaWeight } from 'react-icons/fa';
import {GrYoga} from 'react-icons/gr'


const BenefitsCarousel = () => {
  const benefits = [
    {
      title: "Increased Strength",
      description: "Regular gym workouts help increase muscle strength and improve overall physical performance.",
      icon: GiBiceps,
    },
    {
      title: "Enhanced Blood Production",
      description: "After donating blood, your body replenishes the donated blood cells, leading to the production of fresh, healthy blood cells and improving overall blood quality.",
      icon: MdBloodtype,
    },
    {
      title: 'Save Lives',
      description: 'Donating blood can help save the lives of up to three people in need.',
      icon: AiOutlineHeart,
    },
    {
      title: 'Reduce Risk of Heart Disease',
      description: 'Regular blood donation can reduce the risk of heart disease in donors.',
      icon: AiFillFire,
    },
    {
      title: 'Burn Calories',
      description: 'Donating blood can burn up to 650 calories.',
      icon: BsFillGiftFill,
    },
    {
      title: 'Free Health Check-Up',
      description: 'Donors receive a free health check-up before donating blood.',
      icon: GiHealthNormal,
    },
    {
      title: "Stress Relief",
      description: "Donating blood stimulates the production of endorphins, which can help reduce stress levels and improve your overall well-being.",
      icon:  BiSmile,
    },
    {
      title: "Lifesaving Contribution",
      description: "By donating blood, you have the opportunity to save lives and make a significant impact on individuals in need of transfusions or medical treatments.",
      icon:BsShieldCheck,
    },
    {
      title: "Reduces Iron Overload",
      description: "Regular blood donation can help reduce iron overload in the body, which is particularly beneficial for individuals with hereditary conditions like hemochromatosis.",
      icon: BsDropletHalf,
    },
    {
      title: "Improved Cardiovascular Health",
      description: "Engaging in cardiovascular exercises at the gym, such as running or cycling, can enhance heart health and strengthen the cardiovascular system.",
      icon: BiHeart,
    },
    {
      title: "Weight Management",
      description: "Consistent exercise at the gym combined with a balanced diet can help with weight loss or weight maintenance goals.",
      icon: FaWeight,
    },
    {
      title: "Increased Energy Levels",
      description: "Regular gym sessions can boost energy levels, making you feel more energized and productive throughout the day.",
      icon: FaBolt,
    },
    {
      title: "Improved Mental Health",
      description: "Exercise at the gym stimulates the release of endorphins, helping reduce stress, improve mood, and alleviate symptoms of anxiety and depression.",
      icon: FiSmile
    },
    {
      title: "Enhanced Flexibility",
      description: "Incorporating stretching exercises and flexibility training at the gym can improve joint mobility and overall flexibility.",
      icon: GrYoga,
    },
    {
      title: "Bone Health",
      description: "Weight-bearing exercises at the gym, such as lifting weights, can help strengthen bones and reduce the risk of osteoporosis.",
      icon: CgGym,
    },
    {
      title: "Improved Sleep Quality",
      description: "Regular physical activity at the gym can promote better sleep patterns and improve the quality of your sleep.",
      icon: IoMdMoon,
    },
    // {
    //   title: "Boosted Self-Confidence",
    //   description: "Achieving fitness goals, gaining strength, and improving physique at the gym can boost self-confidence and self-esteem.",
    //   icon: trophy,
    // },
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
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-center items-center">
              <IconComponent className="text-red-500 text-6xl" />
              <h1 className="text-4xl font-bold text-red-500 ml-4">
                Benefits of Donating Blood
              </h1>
            </div>
            <h2 className="text-xl text-red-600 mb-2 font-mono font-bold">{benefit.title}</h2>
            <p className="text-red-700 text-md font-mono font-bold">{benefit.description}</p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default BenefitsCarousel;