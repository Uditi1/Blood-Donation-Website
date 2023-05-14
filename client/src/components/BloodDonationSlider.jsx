// import { useState } from "react";

// const myths = [
//   {
//     id: 1,
//     title: "Myth 1",
//     description: "Blood donation is painful.",
//   },
//   {
//     id: 2,
//     title: "Myth 2",
//     description: "I can't donate blood because I have a tattoo.",
//   },
//   {
//     id: 3,
//     title: "Myth 3",
//     description: "I can't donate blood because I have high blood pressure.",
//   },
//   {
//     id: 4,
//     title: "Myth 4",
//     description: "I can't donate blood because I have a cold.",
//   },
// ];

// function BloodDonationSlider() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handlePrev = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? myths.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === myths.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="relative max-w-2xl mx-auto">
//       {myths.map((myth, index) => (
//         <div
//           key={myth.id}
//           className={`absolute left-0 right-0 top-0 bottom-0 px-8 py-16 ${
//             activeIndex === index ? "opacity-100" : "opacity-0"
//           } transition-opacity duration-500`}
//         >
//           <h2 className="text-3xl font-bold mb-4">{myth.title}</h2>
//           <p className="text-lg">{myth.description}</p>
//         </div>
//       ))}
//       <button
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 px-4 py-2 rounded-full text-gray-800 font-bold"
//         onClick={handlePrev}
//       >
//         Prev
//       </button>
//       <button
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 px-4 py-2 rounded-full text-gray-800 font-bold"
//         onClick={handleNext}
//       >
//         Next
//       </button>
//       <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 mb-8">
//         {myths.map((myth, index) => (
//           <button
//             key={myth.id}
//             className={`h-2 w-2 rounded-full ${
//               activeIndex === index ? "bg-red-500" : "bg-gray-500"
//             }`}
//             onClick={() => setActiveIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default BloodDonationSlider;


// import { useState } from "react";

// const myths = [
//   {
//     id: 1,
//     title: "Myth #1",
//     content: "Donating blood is painful and can be harmful to my health.",
//   },
//   {
//     id: 2,
//     title: "Myth #2",
//     content: "I can contract diseases such as HIV/AIDS or Hepatitis B by donating blood.",
//   },
//   {
//     id: 3,
//     title: "Myth #3",
//     content: "I can't donate blood if I'm vegetarian or vegan.",
//   },
//   {
//     id: 4,
//     title: "Myth #4",
//     content: "I can't donate blood if I have a tattoo or piercing.",
//   },
// ];

// function BloodDonationSlider() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handlePrevClick = () => {
//     setActiveIndex(activeIndex === 0 ? myths.length - 1 : activeIndex - 1);
//   };

//   const handleNextClick = () => {
//     setActiveIndex(activeIndex === myths.length - 1 ? 0 : activeIndex + 1);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="max-w-md w-full">
//         <div className="relative">
//           {myths.map((myth, index) => (
//             <div
//               key={myth.id}
//               className={`absolute top-0 left-0 w-full h-full transition-opacity ${
//                 activeIndex === index ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               <div className="p-8 rounded-lg shadow-lg bg-white">
//                 <h2 className="text-xl font-bold mb-4">{myth.title}</h2>
//                 <p className="text-gray-800">{myth.content}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-between mt-4">
//           <button
//             onClick={handlePrevClick}
//             className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
//           >
//             Prev
//           </button>
//           <button
//             onClick={handleNextClick}
//             className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BloodDonationSlider;



// import React from "react";
// import { Carousel } from "react-bootstrap";

// function BloodBankCard({ title, description, imageUrl }) {
//   return (
//     <div class="card mx-auto" style={{ width: "18rem" }}>
//       <img src={imageUrl} class="card-img-top" alt={title} />
//       <div class="card-body">
//         <h5 class="card-title">{title}</h5>
//         <p class="card-text">{description}</p>
//       </div>
//     </div>
//   );
// }

// function BloodBankCards() {
//   const bloodBankMythsAndFacts = [
//     {
//       title: "Myth: Donating blood is painful and dangerous",
//       description:
//         "Fact: Donating blood is a safe, relatively painless process that takes about an hour. You might feel minor discomfort or bruising at the site of the needle, but it is a very low-risk procedure.",
//       imageUrl:
//         "https://www.fau.edu/newsdesk/articles-images/2020/SB-BLOOD-BRACELET.jpg",
//     },
//     {
//       title: "Myth: I can't donate blood if I have a tattoo",
//       description:
//         "Fact: In many countries, including the US, you can donate blood if you have a tattoo that was done in a licensed facility. You just need to wait for a certain amount of time after getting the tattoo, usually around 3-12 months depending on the country.",
//       imageUrl:
//         "https://www.redcrossblood.org/content/dam/redcrossblood/website/marketing/public%20resources/high%20res%20images/Tattoos2017/GettyImages-500259320.ashx",
//     },
//     {
//       title: "Myth: I can't donate blood if I have traveled recently",
//       description:
//         "Fact: You may be able to donate blood even if you have traveled to certain countries recently. However, there may be restrictions on blood donation if you have visited countries with a risk of certain infections, such as malaria or Zika virus.",
//       imageUrl:
//         "https://www.redcrossblood.org/content/dam/redcrossblood/website/marketing/public%20resources/high%20res%20images/Travel%20Deferral/Travel-Deferrals-1600x654.jpg",
//     },
//   ];

//   return (
//     <div className="container mx-auto">
//       <Carousel>
//         {bloodBankMythsAndFacts.map((mythOrFact) => (
//           <Carousel.Item>
//             <BloodBankCard
//               title={mythOrFact.title}
//               description={mythOrFact.description}
//               imageUrl={mythOrFact.imageUrl}
//             />
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// }

// export default BloodBankCards;
