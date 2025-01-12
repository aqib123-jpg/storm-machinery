import React from 'react'

const OurAdvantages:React.FC = () => {
  return (
    <div className="my-20 grid grid-cols-2 px-5">
        <div className='flex flex-col items-center justify-center'>
            <div>
                <h1 className='text-4xl text-[#272a2b] font-playfair font-semibold'>OUR ADVANTAGES</h1>
                <p className='text-[#4b4c4c] font-inter my-4 text-lg'>We have established a solid market foundation in the African and South American markets. By deeply understanding the specific needs of the local markets, we continuously adjust our products and services to ensure that our solutions can effectively help customers overcome the transportation and logistics challenges they encounter locally.</p>
            </div>
        </div>
        <div className='bg-blue-400 h-[65vh] rounded-lg'>
            <img src="/assests/ourAdvantages.jpg" alt="Truck Transportation" className="rounded-lg w-full h-full object-cover"/>
        </div>
    </div>
  )
}

export default OurAdvantages