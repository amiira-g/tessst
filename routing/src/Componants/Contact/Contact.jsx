import React from 'react'

export default function Contact() {
  return (
    <div>
    <h1 className='uppercase font-bold text-4xl text-[#2C3E50] p-6  '>contact section</h1> 
    <i className="fa-solid fa-star text-[#2C3E50] "></i>

    <form className="max-w-2xl mx-auto text-left ">
      
      <div className="relative z-0 w-full mb-10 group">
        <input
          type="text"
          name="name"
          id="name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="name"
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
         UserName
        </label>
      </div>


      <div className="relative z-0 w-full mb-10 group">
        <input
          type="number"
          name="age"
          id="age"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="age"
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          UserAge
        </label>
      </div>

      














      
      <div className="relative z-0 w-full mb-10 group">
        <input
          type="email"
          name="email"
          id="email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="email"
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
         UserEmail
        </label>
      </div>

      {/* Password Field */}
      <div className="relative z-0 w-full mb-10 group">
        <input
          type="password"
          name="password"
          id="password"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="password"
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
        UserPassword
        </label>
      </div>

      
      
      <button
        type="submit"
        className="px-4 py-2 text-sm font-medium text-white bg-[#1abc9c] rounded-lg focus:outline-none focus:ring-2  focus:ring-offset-2"
      >
        Send message
      </button>
    </form>



    
    </div>
  )
}
