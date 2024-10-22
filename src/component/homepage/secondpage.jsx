import React from 'react'
function Secondpage({cardstas, position}) {
  return (
    <div >
        <div className={`lg:flex grid grid-cols-1 ${position} w-full gap-5`}>
            {cardstas.map((card, id) => (
                <div key={id} className="px-5 group hover:bg-nurse-300 cursor-pointer bg-white border-nurse-300 border py-6 rounded-lg flex flex-col w-full">
                    <img src={card.icon} alt="" className='w-[15%] group-hover:bg-transparent bg-green-400 rounded-full' />
                    <h1 className='font-bold group-hover:text-white text-3xl'>{card.header}</h1>
                    <p className='text-gray-400   group-hover:text-white text-base'>{card.des}</p>
                </div>
            )) }
        </div>

        

    </div>
  )
}

export default Secondpage;