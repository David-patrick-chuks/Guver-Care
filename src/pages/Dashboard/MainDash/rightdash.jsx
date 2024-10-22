import React, { useState } from 'react';  
import Modal from 'react-modal';  
import Calendar from 'react-calendar'; // Importing the new calendar component  
import 'react-calendar/dist/Calendar.css'; // Importing default styles  
import { FaArrowDown, FaArrowUp, FaTimes } from 'react-icons/fa';  
import { FaPlus } from "react-icons/fa6";

Modal.setAppElement('#root');  

const doctors = [  
  { id: 1, name: "Dr. Joy Micheal", picture: "/pictures/Drjoy.png", details: "General  Check-UP." },  
  { id: 2, name: "Dr. Victor Adeniyi", picture: "/pictures/Drvictor.png", details: "Eating plan diet." },  
  { id: 3, name: "Dr. Grace Obeh", picture: "/pictures/Drgrace.png", details: "Dentist." },  
];  

function RightAppoint() {  
  const [selectedDate, setSelectedDate] = useState(null);  
  const [modalIsOpen, setModalIsOpen] = useState(false);  
  const [viewAllModalIsOpen, setViewAllModalIsOpen] = useState(false);  
  const [appointments, setAppointments] = useState([]);  
  const [time, setTime] = useState('');  
  const [description, setDescription] = useState('');  
  const [selectedDoctor, setSelectedDoctor] = useState(null);  
  const [visibleDetails, setVisibleDetails] = useState({});  

  const handleDateChange = (date) => {  
    setSelectedDate(date);  
  };  

  const handleSubmit = () => {  
    if (selectedDate && time && description && selectedDoctor) {  
      const newAppointment = {  
        date: selectedDate.toLocaleDateString(),  
        time,  
        description,  
        doctor: selectedDoctor,  
      };  
      setAppointments([...appointments, newAppointment]);  
      resetForm();  
    } else {  
      alert("Please fill in all fields.");  
    }  
  };  

  const resetForm = () => {  
    setSelectedDate(null);  
    setTime('');  
    setDescription('');  
    setSelectedDoctor(null);  
    setModalIsOpen(false);  
  };  

  const toggleDetails = (index) => {  
    setVisibleDetails((prev) => ({  
      ...prev,  
      [index]: !prev[index],  
    }));  
  };  

  return (  
    <div className='w-full flex flex-col  gap-6'>  
       

      {/* Using React Calendar */}  
    <div className='ml-9 pt-1'><Calendar  
        onChange={handleDateChange}  
        value={selectedDate}  
        className="custom-calendar w-11/12"  
         // Set width properties as needed  
      />   </div> 

      <button  
        onClick={() => setModalIsOpen(true)}  
        style={{ marginTop: '10px', backgroundColor: selectedDate ? "#007BFF" : '#017bff', color: 'white' }}  
        disabled={!selectedDate} className='flex items-center rounded-3xl mx-11 p-3 gap-2'
      >  
        <FaPlus /> Add new appointment  
      </button>  

     <div className='px-5 flex flex-col gap-7'> <h2 style={{ display: 'flex', justifyContent: 'space-between' }} className='text-xl font-normal'>  
        Upcoming appointment  
        {appointments.length > 3 && (  
          <button onClick={() => setViewAllModalIsOpen(true)} style={{ marginLeft: '10px', color: 'black' }}>  
            See All  
          </button>  
        )}  
      </h2>  
        
        
         {appointments.length > 0 ? (  
        <ul>  
          {appointments.slice(0, 3).map((appt, index) => (  
            <li key={index} style={{ marginBottom: '10px' }} className='flex items-center justify-between'>  
             <div className='flex items-center'> <img src={appt.doctor.picture} alt={appt.doctor.name} style={{ width: '55px', marginRight: '10px' }} className='bg-white rounded-3xl'/>  
             <div className='flex flex-col'> <strong>{appt.doctor.name}</strong> {appt.doctor.details} </div></div> {appt.time}  
              <button onClick={() => toggleDetails(index)}>  
                {visibleDetails[index] ? <FaArrowUp /> : <FaArrowDown />}  
              </button>  
              {visibleDetails[index] && (  
                <div style={{ marginTop: '5px', border: '1px solid #ccc', padding: '10px' }}>  
 
                  <p><strong>Description:</strong> {appt.description}</p>  
                </div>  
              )}  
            </li>  
          ))}  
        </ul>  
      ) : (  
        <p>No appointments scheduled.</p>  
      )} </div>

<Modal   
        isOpen={modalIsOpen}   
        onRequestClose={() => setModalIsOpen(false)}   
        style={{  
          content: {  
            top: '50%',  
            left: '50%',  
            right: 'auto',  
            bottom: 'auto',  
            marginRight: '-50%',  
            transform: 'translate(-50%, -50%)',  
            width: '300px',     
            height: '400px',   
          }  
        }}  
      >  
        <button onClick={resetForm} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }}>  
          <FaTimes />  
        </button>  

      <div className='flex flex-col gap-2'>  <h2 className='font-semibold'>Book Appointment</h2>  
        <label>  
          Select Doctor:  
          <select  
            value={selectedDoctor ? selectedDoctor.id : ''}  
            onChange={(e) => {  
              const doctor = doctors.find(doc => doc.id === parseInt(e.target.value));  
              setSelectedDoctor(doctor);  
            }}  
          >  
            <option value="" disabled>Select a doctor</option>  
            {doctors.map(doctor => (  
              <option key={doctor.id} value={doctor.id}>{doctor.name}</option>  
            ))}  
          </select>  
        </label>  
        <br />  

        {selectedDoctor && (  
          <div style={{ marginTop: '10px', border: '1px solid #ccc', padding: '10px' }}>  
            <h3>Doctor Details</h3>  
            <img src={selectedDoctor.picture} alt={selectedDoctor.name} style={{ width: '50px', marginRight: '10px' }} />  
            <p><strong>Name:</strong> {selectedDoctor.name}</p>  
            <p><strong>Details:</strong> {selectedDoctor.details}</p>  
          </div>  
        )}  

        <label>  
          Time:  
          <input  
            type="time"  
            value={time}  
            onChange={(e) => setTime(e.target.value)}  
          />  
        </label>  
        <br />  
        <label>  
          Description:  
          <input  
            type="text"  
            className='px-5 py-8'
            value={description}  
            onChange={(e) => setDescription(e.target.value)}  
          />  
        </label>  
        <br />  
     <div className='flex justify-between'>  <button onClick={handleSubmit} className='text-white bg-nurse-300 px-2 rounded-xl'>Submit</button>  
        <button onClick={resetForm} className='border-2 border-black p-1 rounded-2xl'>Proceed to payment</button> </div> </div> 
      </Modal>  

      {/* View All Appointments Modal */}  
      <Modal   
        isOpen={viewAllModalIsOpen}   
        onRequestClose={() => setViewAllModalIsOpen(false)}   
        style={{  
          content: {  
            top: '50%',  
            left: '50%',  
            right: 'auto',  
            bottom: 'auto',  
            marginRight: '-50%',  
            transform: 'translate(-50%, -50%)',  
            width: '300px',   // Set the desired width  
            height: '400px',  // Set the desired height  
          }  
        }}  
      >  
        <h2>All Appointments</h2>  
        <ul>  
          {appointments.map((appt, index) => (  
            <li key={index} style={{ marginBottom: '10px' }}>  
              <img src={appt.doctor.picture} alt={appt.doctor.name} style={{ width: '30px', marginRight: '10px' }} />  
              <strong>{appt.doctor.name}</strong> - {appt.time}  
              <button onClick={() => toggleDetails(index)}>  
                {visibleDetails[index] ? <FaArrowUp /> : <FaArrowDown />}  
              </button>  
              {visibleDetails[index] && (  
                <div style={{ marginTop: '5px', border: '1px solid #ccc', padding: '10px' }}>  
                  <p><strong>Doctor Details:</strong> {appt.doctor.details}</p>  
                  <p><strong>Description:</strong> {appt.description}</p>  
                </div>  
              )}  
            </li>  
          ))}  
        </ul>  
        <button onClick={() => setViewAllModalIsOpen(false)} style={{ backgroundColor: 'red', color: 'white' }}>Close</button>  
      </Modal>  
    </div>  
  );  
}  

export default RightAppoint;