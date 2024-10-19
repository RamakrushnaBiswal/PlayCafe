import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoMdCall, IoMdMail } from 'react-icons/io';

export default function HelpAndSupport() {
  const FAqs = [
    {
      question: 'How to create an account?',
      answer:
        "To create an account, click on the 'Sign Up' button on the top right corner of the page. Fill in your details and click on 'Create Account'.",
    },
    {
      question: 'How to reset password?',
      answer:
        "To reset your password, click on 'Forgot Password' on the login page. Enter your email address and follow the instructions sent to your email.",
    },
    {
      question: 'What is Sip & Play?',
      answer:
        "Sip & Play is a board game cafe in Park Slope, Brooklyn. It's a place where you can come with friends and family to play board games, enjoy coffee, boba, sandwiches, and snacks.",
    },
    {
      question: 'How does it work?',
      answer:
        "You can come in with your friends and family to play any board game from our library of 300+ games. There's no cover charge, just pay for your food and drinks.",
    },
    {
      question: 'What kind of games do you have?',
      answer:
        'We have a wide variety of board games, including classics like Monopoly and Scrabble, as well as newer and more unique games.',
    },
    {
      question: 'Can I bring my own food and drinks?',
      answer:
        'No, we do not allow outside food or drinks.  We have a full menu of food and drinks available for purchase.',
    },
    {
      question: 'Is there parking available?',
      answer:
        ' There is limited street parking available near the cafe. You may also want to consider using public transportation.',
    },
    {
      question: 'Is there a cover charge?',
      answer:
        'No, there is no cover charge. Just pay for your food and drinks.',
    },
  ];

  const [activeFAQ, setActiveFAQ] = useState(null);

  const handleFAQClick = (index) => {
    if (activeFAQ === index) {
      setActiveFAQ(null);
    } else {
      setActiveFAQ(index);
    }
  };

  return (
    <>
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container mx-auto space-y-10 xl:space-y-16">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Lost? Let's find your way.
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Explore our FAQs, tutorials, and user guides to learn how to
                make the most of our platform. If you can't find the answer
                you're looking for, don't hesitate to contact our friendly
                support team. We're always happy to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}

      <section>
        <h1 className="my-4 text-3xl font-bold tracking-tighter text-center">
          {' '}
          Frequenty Asked Questions
        </h1>
        {FAqs.map((faq, index) => (
          <div
            key={index}
            className="container mx-auto space-y-4 md:space-y-6 lg:space-y-8 mb-3"
          >
            <div className="flex flex-col items-center space-y-2 w-full">
              <div
                className="flex items-center justify-between w-full sm:text-lg md:text-xl  lg:text-2xl bg-gradient-to-r from-green-200 to-amber-200"
                onClick={() => {
                  handleFAQClick(index);
                }}
              >
                <h1 className="font-bold tracking-tighter  p-3">
                  {faq.question}
                </h1>
                <MdKeyboardArrowDown
                  className={`m1 ease-in-out duration-300 ${activeFAQ == index ? `rotate-180 ` : ``}`}
                />
              </div>
              <p
                className={` mx-auto text-muted-foreground md:text-lg bg-gray-100 w-full p-2 ${activeFAQ == index ? `block` : `hidden`} `}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section>
        <div className="container mx-auto space-y-4 md:space-y-6 lg:space-y-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="my-4 text-3xl font-bold tracking-tighter text-center">
              Still having Issue?
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Our support team is here to help. Contact us via email or phone,
              and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col space-x-4">
              <div className="flex items-center justify-center gap-1">
                <IoMdMail />
                <a href="mailto:sipnplaynyc@gmail.com" className="">
                  sipnplaynyc@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-1">
                <IoMdCall />
                <p>718-971-1684</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
