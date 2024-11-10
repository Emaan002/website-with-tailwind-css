import React from "react";

const accessories = [
  { name: 'Cricket Bat', description: 'High quality bat', price: '$100', img: '/bat.png' },
  { name: 'Cricket Ball', description: 'Durable leather ball', price: '$70', img: '/ball.png' },
  { name: 'Batting Equipment', description: 'Deliver powerful shots', price: '$150', img: '/batting-equipment.png' },
  { name: 'Cricket Footwear', description: 'Boost field performance', price: '$200', img: '/footwear.png' },
  { name: 'Cricket Gloves', description: 'Enhance grip control', price: '$90', img: '/gloves.png' },
  { name: 'Cricket Halmet', description: 'Ensure complete protection', price: '$50', img: '/halmet.png' },
];

const Store = () => {
  return (
    <>
     
      <section className="container mx-auto p-10">
        <h2 className="text-3xl font-bold text-center mb-10 underline">Our Product</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {accessories.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-200 text-black rounded-lg shadow-md transform hover:-translate-y-2 transition-transform duration-300"
            >
              <img
               src={item.img} 
               alt={item.name} 
               className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-xl font-bold mt-4 underline">{item.name}</h3>
              <p>{item.description}</p>
              <p className="text-lg font-semibold mt-2">{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Store;
