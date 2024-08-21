"use client";
import { useState } from 'react';

export default function Home() {
  const [imageIndex, setImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('Photos');

  const images = [
    'https://t3.ftcdn.net/jpg/03/26/52/14/360_F_326521465_d3Lv3za5GEGqYAR3M8bem2mHY1vjvmJP.jpg',
    'https://t3.ftcdn.net/jpg/01/04/66/04/360_F_104660422_p60jOsetzMzq2mbWKXm9slH9wfDyW2tB.jpg',
    'https://static.toiimg.com/thumb/msid-80136252,width-400,resizemode-4/80136252.jpg'
  ];

  const videos = [
    'https://t3.ftcdn.net/jpg/03/26/52/14/360_F_326521465_d3Lv3za5GEGqYAR3M8bem2mHY1vjvmJP.jpg',
    'https://t3.ftcdn.net/jpg/01/04/66/04/360_F_104660422_p60jOsetzMzq2mbWKXm9slH9wfDyW2tB.jpg',
    'https://static.toiimg.com/thumb/msid-80136252,width-400,resizemode-4/80136252.jpg'
  ];

  const imageHeadings = ["Singer", "Dancer", "Comedian"];

  const changeImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const recentShows = [
    {
      imageUrl: 'https://hindi.cdn.zeenews.com/hindi/sites/default/files/styles/zm_700x400/public/2021/04/25/812437-nora-fatehi.jpg?itok=95lOprV_', // Replace with actual image URLs
      name: 'Nora Fatehi',
      eventDescription: 'For an event hosted by XYZ performed at Pune',
      date: '14 March 2023',
    },
    {
      imageUrl: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da842c84a4a1a61d01c745a1221b', // Replace with actual image URLs
      name: 'Arijit Singh',
      eventDescription: 'Performed at a corporate event in Mumbai',
      date: '20 April 2023',
    },
    {
      imageUrl: 'https://www.hindustantimes.com/ht-img/img/2023/08/11/1600x900/Badshah-feels-proud-to-be-addressed-as-an-hip-hop-_1691742757518.jpg', // Replace with actual image URLs
      name: 'Badshah',
      eventDescription: 'Live concert at Delhi',
      date: '10 June 2023',
    },
  ];

  const [showIndex, setShowIndex] = useState(0);

  const handleNextShow = () => {
    setShowIndex((prevIndex) => (prevIndex + 1) % recentShows.length);
  };

  const handlePreviousShow = () => {
    setShowIndex((prevIndex) => (prevIndex - 1 + recentShows.length) % recentShows.length);
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-black px-8">
      {/* Top Section */}
      <div className="relative flex items-center justify-between w-full mb-10">
        <div className="absolute text-white text-7xl font-semibold left-[60px] z-10">
          {imageHeadings[imageIndex]}
        </div>
        <div className="relative ml-[100px]">
          <div className="w-[600px] h-[600px] rounded-full overflow-hidden border-[6px] border-gradient-to-r from-red-500 to-orange-500">
            <img
              src={images[imageIndex]}
              alt={imageHeadings[imageIndex]}
              className="w-full h-full object-cover"
            />
          </div>
          <p
            onClick={changeImage}
            className="absolute bottom-[-20px] w-full text-center text-sm text-gray-400 cursor-pointer"
          >
            Click here to view more
          </p>
        </div>
        <div className="text-right mr-[60px]">
          <p className="text-5xl text-gray-300">Choose from</p>
          <p className="text-5xl font-semibold text-gray-500">100+ Categories</p>
          <p className="mt-4 text-red-400 cursor-pointer">
            Explore all categories →
          </p>
        </div>
      </div>

      {/* Toggle Section */}
      <div className="flex justify-center mb-6">
        <div className="bg-gray-800 rounded-full p-1 flex">
          <button
            className={`px-4 py-2 rounded-full ${activeTab === 'Photos' ? 'bg-white text-black' : 'text-gray-400'
              }`}
            onClick={() => setActiveTab('Photos')}
          >
            Photos
          </button>
          <button
            className={`px-4 py-2 rounded-full ${activeTab === 'Videos' ? 'bg-white text-black' : 'text-gray-400'
              }`}
            onClick={() => setActiveTab('Videos')}
          >
            Videos
          </button>
        </div>
      </div>

      {/* Curved Background and Grid Section */}
      <div className="relative w-full max-w-6xl mt-10">
        {/* Curved Background */}
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-gray-900 to-black rounded-t-full z-0"></div>

        {/* Content Switching */}
        {activeTab === 'Photos' ? (
          <div className="relative grid grid-cols-4 gap-4 z-10 mt-[50px]">
            {/* Top Left Circular Image */}
            <div className="col-span-1 flex justify-center">
              <div className="w-40 h-40 rounded-full overflow-hidden">
                <img src={images[0]} alt="Image 1" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Two Square Images in the Middle */}
            <div className="col-span-2 grid grid-cols-2 gap-4">
              <div className="w-full h-40 rounded-lg overflow-hidden">
                <img src={images[1]} alt="Image 2" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-40 rounded-lg overflow-hidden">
                <img src={images[2]} alt="Image 3" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Top Right Circular Image */}
            <div className="col-span-1 flex justify-center">
              <div className="w-40 h-40 rounded-full overflow-hidden">
                <img src={images[1]} alt="Image 4" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Two Square Images at the Bottom */}
            <div className="col-span-2 col-start-2 flex justify-between">
              <div className="w-40 h-40 rounded-lg overflow-hidden">
                <img src={images[0]} alt="Image 5" className="w-full h-full object-cover" />
              </div>
              <div className="w-40 h-40 rounded-lg overflow-hidden">
                <img src={images[2]} alt="Image 6" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        ) : (
          <div className="relative flex justify-center z-10 mt-[50px]">
            {videos.map((videoSrc, index) => (
              <div key={index} className="mx-4">
                <div className="w-72 h-96 rounded-lg overflow-hidden">
                  <img src={videoSrc} alt={`Video ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pagination Indicator */}
      <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-gray-600"></div>
          <div className="w-2 h-2 rounded-full bg-gray-600"></div>
          <div className="w-2 h-2 rounded-full bg-gray-600"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </div>
      </div>

      {/* New Section at the Bottom */}
      <div className="relative w-full bg-gradient-to-b from-gray-900 to-black py-10 mt-20">
        {/* Top Left Text Strip */}
        <div className="absolute top-0 left-0 w-full overflow-hidden bg-black ">
          <marquee
            className="text-gray-400 text-lg font-semibold whitespace-nowrap"
            behavior="scroll"
            direction="left"
            scrollamount="8"
          >
            Live Concerts · Corporate Events · Weddings · Special Appearances · Exclusive Shows ·
          </marquee>
        </div>

        <h2 className="text-white text-4xl font-bold mb-6 text-center">Recent Shows</h2>
        <div className="flex justify-center items-center">
          <button
            onClick={handlePreviousShow}
            className="text-gray-400 text-4xl mr-4"
          >
            &#8249;
          </button> {/* Left Arrow */}
          <div className="flex items-center bg-gradient-to-b from-gray-900 to-black rounded-lg overflow-hidden ">
            <div className="w-[300px] h-[400px] overflow-hidden">
              <img
                src={recentShows[showIndex].imageUrl}
                alt={recentShows[showIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <p className="text-white text-xl font-semibold">{recentShows[showIndex].name}</p>
              <p className="text-gray-400 text-lg">{recentShows[showIndex].eventDescription}</p>
              <p className="text-gray-400 text-lg">{recentShows[showIndex].date}</p>
            </div>
          </div>
          <button
            onClick={handleNextShow}
            className="text-gray-400 text-4xl ml-4"
          >
            &#8250;
          </button> {/* Right Arrow */}
        </div>

        {/* Bottom Right Text Strip */}
        <div className="absolute bottom-0 right-0 w-full overflow-hidden bg-black ">
          <marquee
            className="text-gray-400 text-lg text-white font-semibold whitespace-nowrap"
            behavior="scroll"
            direction="right"
            scrollamount="8"
          >
            Upcoming Shows · Celebrity Meet & Greets · VIP Tickets · Exclusive Backstage Access ·
          </marquee>
        </div>
      </div>
    </div>
  );
}
