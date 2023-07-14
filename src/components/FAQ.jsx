import React, { useState } from 'react';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'How do I order takeaway?',
      answer: '- To place an order, simply visit our restaurants page and choose an offering. Follow the on- screen instructions to set up an account, or log-in if you have one already, and follow the steps.',
      isOpen: true,
    },
    {
      question: 'I want to order more drinks or add another course; how do I do this? ',
      answer: '- When eating in one of our restaurants, simply create a new order: scan the QR code on the menu and navigate through the journey choosing your table number and the additional drinks or food of your choice, then checkout.',
      isOpen: true,
    },
    {
      question: 'Do I need ID to order?',
      answer: '- If you are purchasing alcohol you will need to bring photographic ID (e.g. a passport or drivers license) - if you are lucky enough to look under 21, we will be required to ask you for ID. In order to keep you and our team safe, please hold the ID up against your closed window for our team to check. You will not need ID if you are only ordering food.',
      isOpen: true,
    },
    {
      question: 'I want to order more drinks or add another course; how do I do this? ',
      answer: '- When eating in one of our restaurants, simply create a new order: scan the QR code on the menu and navigate through the journey choosing your table number and the additional drinks or food of your choice, then checkout.',
      isOpen: true,
    },
    {
      question: 'How do I cancel an order?',
      answer: '- To cancel an order, please call the support team by calling*:Elveden Forest: 01842 894580 Longleat Forest: 01985 848324 Sherwood Forest: 01623 827593 Whinfell Forest: 01768 893076, Woburn Forest: 01525 842887, Longford Forest: 0818 812618 (Republic of Ireland) or 03448 260113 (United Kingdom) *Our Dining In team are available to answer calls between 3pm and 10pm',
      isOpen: true,
    },
    {
      question: 'I want to order more drinks or add another course; how do I do this? ',
      answer: '- When eating in one of our restaurants, simply create a new order: scan the QR code on the menu and navigate through the journey choosing your table number and the additional drinks or food of your choice, then checkout.',
      isOpen: true,
    },
    {
      question: 'How do I order takeaway?',
      answer: '- To place an order, simply visit our restaurants page and choose an offering. Follow the on- screen instructions to set up an account, or log-in if you have one already, and follow the steps.',
      isOpen: true,
    },
    {
      question: 'I want to order more drinks or add another course; how do I do this? ',
      answer: '- When eating in one of our restaurants, simply create a new order: scan the QR code on the menu and navigate through the journey choosing your table number and the additional drinks or food of your choice, then checkout.',
      isOpen: true,
    },
    {
      question: 'How do I cancel an order?',
      answer: '- To cancel an order, please call the support team by calling*:Elveden Forest: 01842 894580 Longleat Forest: 01985 848324 Sherwood Forest: 01623 827593 Whinfell Forest: 01768 893076, Woburn Forest: 01525 842887, Longford Forest: 0818 812618 (Republic of Ireland) or 03448 260113 (United Kingdom) *Our Dining In team are available to answer calls between 3pm and 10pm',
      isOpen: true,
    },
    {
      question: 'I want to order more drinks or add another course; how do I do this? ',
      answer: '- When eating in one of our restaurants, simply create a new order: scan the QR code on the menu and navigate through the journey choosing your table number and the additional drinks or food of your choice, then checkout.',
      isOpen: true,
    },
    {
      question: 'How do I order takeaway?',
      answer: '- To place an order, simply visit our restaurants page and choose an offering. Follow the on- screen instructions to set up an account, or log-in if you have one already, and follow the steps.',
      isOpen: true,
    },
    {
      question: 'I want to order more drinks or add another course; how do I do this? ',
      answer: '- When eating in one of our restaurants, simply create a new order: scan the QR code on the menu and navigate through the journey choosing your table number and the additional drinks or food of your choice, then checkout.',
      isOpen: true,
    },
    
  ]);

  const toggleFAQ = (index) => {
    setFaqs((prevFaqs) => {
      const updatedFaqs = [...prevFaqs];
      updatedFaqs[index].isOpen = !updatedFaqs[index].isOpen;
      return updatedFaqs;
    });
  };

  return (
    <div className="faq-container">
      <h1>
      <span className="text-orange-600 text-[1rem] lg:text-[2rem]">
          Frequently Asked Questions
          </span></h1>
      {faqs.map((faq, index) => (
        <div className="faq" key={index}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span>{faq.question}</span>
            <span className={faq.isOpen ? 'icon-chevron-up' : 'icon-chevron-down'}></span>
          </div>
          {faq.isOpen && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
