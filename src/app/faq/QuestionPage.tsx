import React from 'react';

const QuestionsPage: React.FC = () => {
  const boxes = [
    {
      heading: 'How we serve food?',
      text: 'This is a dummy text of 3 lines. This is a dummy text of 3 lines. This is a dummy text of 3 lines.'
    },
    {
      heading: 'How can we get in touch with you?',
      text: 'Quality is our top priority. We ensure that every dish is prepared with the freshest ingredients.'
    },
    {
      heading: 'How is our food quality',
      text: 'We offer fast and reliable home delivery services to ensure your food arrives hot and fresh.'
    },
    {
      heading: 'What will be delivered?and when?',
      text: 'Our customer support team is available 24/7 to assist you with any queries or concerns.'
    },
    {
      heading: 'Special offers',
      text: 'Check out our special offers and discounts available for a limited time only.'
    },
    {
      heading: 'Our chefs',
      text: 'Meet our talented chefs who bring their culinary expertise to every dish they prepare.'
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="font-bold mb-4 text-[#333333] text-center sm:text-1xl md:text-3xl lg:text-3xl">Questions Looks Here</h1>
      <p className="text-gray-500 mb-8 text-center sm:text-sm md:text-sm lg:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {boxes.map((box, index) => (
          <div key={index} className="flex flex-col items-center m-4 p-4 bg-[#FAF7F2] rounded-lg w-full sm:w-60 sm:h-40 md:w-80 lg:w-80 h-40 text-[#4F4F4F]">
            <div className="flex justify-between w-full">
              <h2 className="text-xl font-semibold mb-2 text-[#333333]">{box.heading}</h2>
              <button className="text-xl">+</button>
            </div>
            <p className="mb-2 text-sm">{box.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsPage;
