import React, { useState } from 'react';
import { QUESTIONS } from '@/constants/faq';
import { RxCaretUp, RxCaretDown } from "react-icons/rx";

export function FAQ() {

    const [isOpen, setIsOpen] = useState({});

    const toggleDropdown = (index) => {
        setIsOpen((prevOpen) => ({
            ...prevOpen,
            [index]:!prevOpen[index],
        }));
    };

    return (
        <div className="bg-secondary-950">
            <div className="max-w-full mx-auto flex flex-col items-center justify-center bg-secondary-950 rounded shadow-md p-10">
                <div className="px-4 md:px-14 pt-10 flex justify-center items-center">
                    <h1 className='text-[40px] md:text-[56px] text-[#ffffff] roobert-bold flex items-center justify-center text-center mb-10 mt-20'>FAQs</h1>
                    <img
                        className=" md:max-w-[100px] md:w-[50px] md:flex hidden hover:scale-1.2"
                        src="faq.svg"
                        alt="foreground"
                    />
                </div>

            <div className='flex lg:flex-row flex-col justify-between gap-10 items-center'>
                <div>
                    <p className="poppins text-sm md:text-xl mb-14 text-[#0063c0]">Answers to the most frequently asked questions.</p>
                        {QUESTIONS.map((question, index) => (
                            <div key={index} className={`mb-4 ${index!== QUESTIONS.length - 1? 'border-b border-[#013769] pb-4' : ''}`}>
                                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown(index)}>
                                    <span className="text-white">{question.question}</span>
                                    <span className="text-lg">{isOpen[index]? <RxCaretUp /> : <RxCaretDown />}</span>
                                </div>
                                {isOpen[index] && (
                                    <div className="text-gray-600 mt-2">{question.answer}</div>
                                )}
                            </div>
                        ))}
                </div>

                <img
                        className=" md:max-w-[1400px] md:w-[600px] w-[200px] md:flex hover:scale-1.2"
                        src="cloud.svg"
                        alt="foreground"
                    />


            </div>

            </div>
      </div>
    );
    }
