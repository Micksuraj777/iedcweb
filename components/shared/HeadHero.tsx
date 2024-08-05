interface HeadHeroProps {
    headTitle: string;
    children?: React.ReactNode;
  }
  export default function HeadHero(props: HeadHeroProps) {
    return (
        <>
        <h2 className="text-2xl font-semibold text-green-500 mb-5 md:text-3xl lg:text-4xl">
          {props.headTitle}
        </h2>
      </>
    );
  }
