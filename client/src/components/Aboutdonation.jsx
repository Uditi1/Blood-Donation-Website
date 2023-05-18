import React  from "react";
// import Donorgif from './Donorgif.gif';
const bloodTypes = [
  {
    type: "A+",
    canDonateTo: ["A+", "AB+"],
    canReceiveFrom: ["A+", "A-", "O+", "O-"],
  },
  {
    type: "A-",
    canDonateTo: ["A+", "A-", "AB+", "AB-"],
    canReceiveFrom: ["A-", "O-"],
  },
  {
    type: "B+",
    canDonateTo: ["B+", "AB+"],
    canReceiveFrom: ["B+", "B-", "O+", "O-"],
  },
  {
    type: "B-",
    canDonateTo: ["B+", "B-", "AB+", "AB-"],
    canReceiveFrom: ["B-", "O-"],
  },
  {
    type: "AB+",
    canDonateTo: ["AB+"],
    canReceiveFrom: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  {
    type: "AB-",
    canDonateTo: ["AB+", "AB-"],
    canReceiveFrom: ["A-", "B-", "AB-", "O-"],
  },
  {
    type: "O+",
    canDonateTo: ["A+", "B+", "AB+", "O+"],
    canReceiveFrom: ["O+", "O-"],
  },
  {
    type: "O-",
    canDonateTo: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    canReceiveFrom: ["O-"],
  },
];



const Aboutdonation = () => {
  return (

    // .........main content start here.................
    <div className="bg">
      <h1 className="text-3xl font-bold font-mono text-center my-8 text-red-600  ">
        Learn About Donation
      </h1>
      <div className="flex items-center justify-center">
        <div className="w-1/2 pr-8">
          <img
            src={"https://cdni.iconscout.com/illustration/premium/thumb/people-donate-blood-to-charity-7820863-6207469.png"}
            alt="Blood Donor"
            className="w-full h-full object-cover "
          />
          {/* <img
            src={Donorgif}
            alt="Blood Donor"
            className="w-full h-full object-cover transition duration-50 ease-in-out transform hover:scale-110"
          /> */}
        </div>
        <div className="w-1/2">
          <table className="table-auto text-sm mb-2 ">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border border-gray-300 text-center text-white bg-red-600 hover:bg-red-700">
                  Blood Type
                </th>
                <th className="p-2 border border-gray-300 text-center text-black bg-red-600 hover:bg-red-700">
                  Can Donate To
                </th>
                <th className="p-2 border border-gray-300 text-center text-black bg-red-600 hover:bg-red-700">
                  Can Receive From
                </th>
              </tr>
            </thead>
            <tbody>
              {bloodTypes.map((donor) => (
                <tr key={donor.bloodType}>
                  <td className="p-2 border border-gray-900 text-gray-900 text-center font-bold font-serif">
                    {donor.type}
                  </td>
                  <td className="p-2 border border-gray-950 text-gray-900 text-center font-bold font-serif">
                    {donor.canDonateTo.join(", ")}
                  </td>
                  <td className="p-2 border border-gray-900 text-gray-900 text-center font-bold font-serif">
                    {donor.canReceiveFrom.join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    // .......,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,..main content start here...............................................

    
  );
};

export default Aboutdonation;

