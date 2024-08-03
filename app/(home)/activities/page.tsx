"use client";
import { useState } from "react";
import PageHero from "@/components/shared/PageHero";
import { upcomingEvents, events } from "@/libs/constant/events.constant";
import EventCarousel from "@/components/EventCarousel";

// Define types for event items
interface EventItem {
  title: string;
  image: string;
  alt: string;
  des: string;
}

// Define props for the Modal component
interface ModalProps {
  image?: string;
  alt?: string;
  onClose: () => void;
}

// Modal component
const Modal: React.FC<ModalProps> = ({ image, alt, onClose }) => {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="relative bg-white p-4 rounded-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        <img
          src={image}
          alt={alt}
          className="w-full h-auto max-w-full max-h-screen object-contain"
        />
      </div>
    </div>
  );
};

const Activities: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    alt: string;
  } | null>(null);

  const handleImageClick = (image: string, alt: string) => {
    setSelectedImage({ image, alt });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="p-3">
      <PageHero pageHeroTitle="Activities & Events" />

      {/* Upcoming section starts */}
      <div className="max-w-full lg:max-w-[1500px] mx-auto">
        <h1 className="text-green-500 md:text-3xl text-2xl font-semibold mt-6 mb-4">
          Upcoming Events
        </h1>
        <div className="flex flex-col gap-5 md:flex-row md:flex-wrap">
          {upcomingEvents.map((item: EventItem) => (
            <div
              key={item.title}
              className="bg-white items-center p-3 rounded-lg shadow-lg flex flex-col md:flex-row cursor-pointer relative"
              onClick={() => handleImageClick(item.image, item.alt)}
            >
              <span className="absolute top-2 left-2 text-xl">📍</span>
              <img
                src={item.image}
                alt={item.alt}
                className="w-full md:w-[200px] h-[200px] object-cover rounded-lg mb-4 md:mb-0 md:mr-4"
              />
              <div className="text-justify">
                <h2 className="text-base text-black font-semibold">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2 md:w-[200px]">
                  {item.des}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Upcoming section ends */}

      {/* Past Events section starts */}
      <div className="max-w-full lg:max-w-[1500px] mx-auto">
        <h1 className="text-green-500 md:text-3xl text-2xl font-semibold mt-6 mb-4">
          Past Events
        </h1>
        <div className="flex flex-col gap-5 md:flex-row md:flex-wrap">
          {events.map((item: EventItem) => (
            <div
              key={item.title}
              className="bg-white items-center p-3 rounded-lg shadow-lg flex flex-col md:flex-row cursor-pointer relative"
              onClick={() => handleImageClick(item.image, item.alt)}
            >
              <span className="absolute top-2 left-2 text-xl">📌</span>
              <img
                src={item.image}
                alt={item.alt}
                className="w-full md:w-[200px] h-[200px] object-cover rounded-lg mb-4 md:mb-0 md:mr-4"
              />
              <div className="text-justify">
                <h2 className="text-base text-black font-semibold">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2 md:w-[200px]">
                  {item.des}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Past Events section ends */}

      {/* Carousel section starts */}
      <div className="max-w-[1500px] mx-auto min-h-[70svh] flex flex-col justify-center mt-6">
        <h2 className="text-2xl font-semibold text-green-500 mb-5 md:text-3xl">
          Notable Events
        </h2>
        <EventCarousel />
      </div>
      {/* Carousel section ends */}

      {/* Modal Component */}
      <Modal
        image={selectedImage?.image}
        alt={selectedImage?.alt}
        onClose={closeModal}
      />
    </section>
  );
};

export default Activities;
