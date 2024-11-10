import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="bg-[url('/main2.jpg')] bg-cover h-screen text-white flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-6xl lg:text-8xl font-bold text-white underline">Welcome to<span className="text-red-900 underline"> Our Cricket</span> Accessories <span className="text-red-900 underline">Store</span></h1>
          <p className="mt-4 text-xl text-white">The best place to find all your cricket gear!</p>
          <Link href="/store">
          <button 
           className="bg-primary text-white px-6 py-2 mt-3 rounded hover:-translate-y-2 transition-transform duration-300">Let&apos;s Look</button></Link>
        </div>
      </section>
    </>
  );
};

export default Home;
