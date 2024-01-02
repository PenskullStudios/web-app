import Button from "./Button";
import Heading from "./Heading";
import brandImg from "../../assets/brand builidng-02.png";

const plans = [
  {
    title: "Design Services",
    content:
      "Design with Penskull is not just about pixels; it's a visual fiesta! We don't do boring – our designers bring the party to logos, flyers, and brochures. Your brand isn’t just seen; it’s the VIP guest stealing the show.",
  },
  {
    title: "UI/UX and Web Dev",
    content:
      "Penskull is not your average web developer; we’re the architects of digital amusement parks! Your website isn't just a page; it's an adventure. Let's build an online rollercoaster that leaves your audience screaming... in excitement!",
  },
  {
    title: "Customized App Development",
    content:
      "Penskull doesn't do cookie-cutter software; we're the chefs cooking up bespoke digital feasts! Your software isn’t just a program; it’s a tailored suit for your business. Let’s create something so unique, it’s the James Bond of applications.",
  },
];

export default function BrandBuilding() {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row gap-20 lg:gap-10 px-5 py-16 lg:px-16">
      <div className="w-full md:w-5/6 lg:w-1/2 flex flex-col items-center lg:items-start">
        <Heading title="Brand Building" />
        <div className="w-full md:w-11/12 h-[23rem] mt-10">
          <img
            src={brandImg}
            alt="brand image"
            loading="lazy"
            className="rounded-[5rem] h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="w-5/6 lg:w-1/2 flex flex-col gap-10">
        {plans.map((ele, i) => {
          return (
            <div key={i}>
              <h3 className="text-custom-pink text-xl font-bold mb-1">
                {ele.title}
              </h3>
              <p className="text-lg">{ele.content}</p>
            </div>
          );
        })}
        <div className="mt-4 md:mt-10">
          <Button
            info="compare plans"
            link="https://docs.google.com/forms/d/e/1FAIpQLSf5jJBuLZkQT9kGZdsyEwyhjlbU0AF4Xy4BLxfBtLJWePDkZg/viewform"
          />
        </div>
      </div>
    </div>
  );
}
