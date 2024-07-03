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
        <div className="bg-secondary-950 p-10 pt-6 md:p-20 lg:p-28">
            <div className="max-w-full mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-secondary-950 rounded shadow-md">
                <h2 className="text-4xl font-bold mb-4 grotesk text-white">FAQs</h2>
                <p className="poppins text-sm md:text-xl my-1 mb-14 text-[#0063c0]">Answers to the most frequently asked questions.</p>
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
      </div>
    );
    }
