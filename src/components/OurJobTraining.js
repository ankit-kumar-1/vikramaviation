import React, { useState, useEffect, useCallback } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import ApplicationForm from './ApplicationForm';

function OurJobTraining({ trainingList }) {
    const [current, setCurrent] = useState(0);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const previousSlide = useCallback(() => {
        setCurrent(current => current === 0 ? trainingList.length - 1 : current - 1);
    }, [trainingList.length]);

    const nextSlide = useCallback(() => {
        setCurrent(current => current === trainingList.length - 1 ? 0 : current + 1);
    }, [trainingList.length]);

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 3000);
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    return (
        <div className='m-4 md:m-8 lg:m-12'>
            <div className='text-center'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold border-b-2 border-gray-500 inline-block pb-2 md:pb-4'>
                    On Job <span className='text-yellow-500'>Training</span>
                </h1>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-center mt-8 gap-6 lg:gap-10'>
                <div className='w-full lg:w-1/2 p-4 md:p-5 border border-gray-300 rounded-lg text-center'>
                    <h2 className='text-lg md:text-xl lg:text-2xl font-bold mb-4'>
                        VAPL On-The-Job <span className='text-yellow-500'>Training</span>
                    </h2>
                    <p className='text-sm md:text-base lg:text-lg mb-6'>
                        At VAPL, we offer exceptional On-The-Job Training programs that pave the way for a successful career in the aviation industry. As a student in our AME (Aircraft Maintenance Engineering) training, you will delve into the captivating world of aviation, gaining hands-on experience and practical knowledge that sets you apart. During the six-month training period, you will actively participate in various activities conducted by VAPL, immersing yourself in real-world scenarios and challenges.
                    </p>
                    <button
                        className='bg-yellow-400 hover:bg-yellow-500 text-black text-base md:text-md lg:text-lg p-2 rounded-lg px-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                        onClick={() => setIsFormOpen(true)}
                    >
                        Apply Now
                    </button>
                </div>
                <div className='w-full lg:w-1/2 relative mt-6 lg:mt-0'>
                    <div className='overflow-hidden rounded-lg shadow-lg'>
                        <div
                            className='flex transition-transform ease-out duration-500'
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {trainingList.map((t, i) => (
                                <img
                                    key={i}
                                    src={t}
                                    alt={`On-The-Job Training ${i + 1}`}
                                    className='h-auto w-full object-cover'
                                />
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={previousSlide}
                        className='absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300'
                    >
                        <HiChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className='absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300'
                    >
                        <HiChevronRight size={24} />
                    </button>
                    <div className='absolute bottom-4 right-0 left-0'>
                        <div className='flex items-center justify-center gap-2'>
                            {trainingList.map((_, i) => (
                                <div
                                    key={i}
                                    className={`
                                        transition-all w-2 md:w-3 h-2 md:h-3 bg-white rounded-full
                                        ${current === i ? "p-1 md:p-2" : "bg-opacity-50"}
                                    `}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <ApplicationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </div>
    );
}

export default OurJobTraining;