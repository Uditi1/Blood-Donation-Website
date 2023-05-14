import React from 'react'

const Contact = () => {

  return (
    <section className="text-gray-600 body-font relative my-2 mb-2">
      <div className="absolute inset-0 bg-gray-300">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.7484814422082!2d77.46594007444945!3d28.727061779783615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf18c5934d76f%3A0x5d3f2c13aca899f3!2sH%20R%20Institute%20of%20Engineering%20And%20Technology%2C%20Ghaziabad!5e0!3m2!1sen!2sin!4v1683015307930!5m2!1sen!2sin" width="100%" height="650" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-gray-400 bg-opacity-40 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-center text-gray-900 text-lg mb-1 font-black title-font">CONTACT US</h2>
          <p className="text-center leading-relaxed mb-3 text-gray-600 font-bold">Feel Free to Send Messages</p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-lg text-gray-600 font-extrabold">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-lg text-gray-600 font-bold">Message</label>
            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Submit</button>
          <p className="text-xs text-gray-500 mt-3"></p>
        </div>
      </div>
    </section>
  )
}

export default Contact;