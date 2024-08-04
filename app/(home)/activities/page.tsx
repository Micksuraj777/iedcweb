import { promises as fs } from "fs";
import path from "path";
import PageHero from "@/components/shared/PageHero";
import HeadHero from "@/components/shared/HeadHero";
import EventCarousel from "@/components/EventCarousel";
import EventCard from "@/components/activities/EventCard";

interface EventItem {
  title: string;
  image: string;
  alt: string;
  des: string;
}

interface EventCategory {
  type: string;
  items: EventItem[];
}

interface Events {
  events: EventCategory[];
}

export default async function Activities() {
  const filePath = path.join(process.cwd(), "public", "/json/events.json");
  const { events }: Events = (
    await fs.readFile(filePath, "utf8").then((data) => JSON.parse(data))
  );

  return (
    <section className="px-3">
      <PageHero pageHeroTitle="Activities & Events" />

      {/* Event section starts */}
      <div className="max-w-full lg:max-w-[1500px] mx-auto">
        {events.map((category) => (
          <div className="mt-5" key={category.type}>
            <HeadHero headTitle={category.type}/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((item, index) => (
                <EventCard key={index} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Event section ends */}

      {/* Carousel section starts */}
      <div className="max-w-[1500px] mx-auto min-h-[70svh] flex flex-col justify-center mt-6">
      <HeadHero headTitle="Notable Events"/>
        <EventCarousel />
      </div>
      {/* Carousel section ends */}
    </section>
  );
}
