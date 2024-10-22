import React from 'react';  
import { FaUserAlt, FaRegAddressCard, FaCog } from 'react-icons/fa';  
import { creates } from '../../data/db'; // Make sure to import the creates data  

function Create() {  
  return (  
    <div className="flex justify-center items-center  bg-gradient-to-r from-blue-50 to-blue-100">  
      <div className="bg-white p-10 rounded-2xl shadow-xl w-2/3 space-y-8">  
        <h1 className="text-3xl font-bold text-blue-700 text-center">  
          Let's Create Your Account  
        </h1>  

        <div className="flex justify-between mb-6 ">  
          {creates.map((creat, index) => (  
            <React.Fragment key={index}>  
              <div className="flex flex-col items-center space-y-1">  
                <creat.icon className="text-3xl mb-1" />  
                <p className="text-sm font-semibold">{creat.head}</p>  
              </div>  
              {index < creates.length - 1 && <span className="mx-2">------</span>}  
            </React.Fragment>  
          ))}  
        </div>  

        <form className="space-y-6">  
          <div>  
            <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>  
            <input  
              type="text"  
              placeholder="Enter your name"  
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"  
            />  
          </div>  

          <div>  
            <label className="block text-sm font-semibold text-gray-700 mb-2">Sex</label>  
            <input  
              type="text"  
              placeholder="Enter your sex"  
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"  
            />  
          </div>  

          <div>  
            <label className="block text-sm font-semibold text-gray-700 mb-2">Height</label>  
            <input  
              type="text"  
              placeholder="Enter your height"  
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"  
            />  
          </div>  

          <div>  
            <label className="block text-sm font-semibold text-gray-700 mb-2">Weight</label>  
            <input  
              type="text"  
              placeholder="Enter your weight"  
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"  
            />  
          </div>  

          <div>  
            <label className="block text-sm font-semibold text-gray-700 mb-2">Genotype</label>  
            <input  
              type="text"  
              placeholder="Enter your genotype"  
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"  
            />  
          </div>  

          <div>  
            <label className="block text-sm font-semibold text-gray-700 mb-2">Blood Group</label>  
            <input  
              type="text"  
              placeholder="Enter your blood group"  
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"  
            />  
          </div>  

          <button  
            type="submit"  
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-400 focus:outline-none"  
          >  
            Create Account  
          </button>  
        </form>  

        <p className="text-center mt-6 text-gray-500 text-sm">  
          By creating an account, you agree to <br />  
          <a href="#" className="text-blue-600 hover:underline">Terms of Use</a> and{" "}  
          <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>  
        </p>  
      </div>  
    </div>  
  );  
}  

export default Create;