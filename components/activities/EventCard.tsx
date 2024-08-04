import Modal from "@/components/shared/Modal";

interface EventItem {
  title: string;
  image: string;
  alt: string;
  des: string;
}

interface EventCardProps {
  item: EventItem;
}

const EventCard: React.FC<EventCardProps> = ({ item }) => {
  return (
    <Modal
      trigger={
        <div
          className="bg-white items-center p-3 rounded-lg border border-gray-300 flex flex-col md:flex-row cursor-pointer relative"
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
      }
    >
      <img src={item.image} alt={item.alt} />
    </Modal>
  );
};

export default EventCard;
