import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-white text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center text-black
        underline">About Us</h1>
        
       
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold">Our Journey</h2>
            <p>
              Cricket is more than just a sport; It&apos;s a tradition that dates back to the 16th century in England. Over the centuries, cricket has evolved into a global sport, inspiring millions of fans and players around the world. 
            </p>
            <p>
              Our journey began with a passion for cricket and a desire to provide high-quality cricket accessories to enthusiasts of the game. Established in [Year], our store has grown from a small local shop to a trusted name in cricket equipment, serving players of all levels. 
            </p>
            <p>
              We believe in the spirit of cricket — teamwork, dedication, and the pursuit of excellence. Our goal is to provide players with the best equipment, so they can perform at their peak.
            </p>
          </div>
          
        
          <div className="md:w-1/2">
            <Image 
              src="/about.jpg" 
              alt="Cricket History" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg">
            We aim to inspire cricketers worldwide by offering top-notch accessories that enhance performance and bring out the best in every player. Whether You&apos;re a beginner or a professional, we have something for you.
          </p>
        </div>
      </div>
    </section>
  );
}
