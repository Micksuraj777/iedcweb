interface PageHeroProps {
  pageHeroTitle: string;
}
export default function PageHero(props: PageHeroProps) {
  return (
    <div className="flex items-center justify-center p-6 my-3 max-w-[1500px] mx-auto bg-green-500 rounded-xl">
      <h1 className="font-bold text-xl md:text-4xl lg:text-7xl text-white">
        {props.pageHeroTitle}
      </h1>
    </div>
  );
}
