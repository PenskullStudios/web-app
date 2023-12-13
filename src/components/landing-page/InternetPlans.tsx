import Button from "./Button";
import Heading from "./Heading";
import laptopImg from "../../assets/laptop.webp";

const plans = [
  {
    title: "BASIC PLAN",
    content:
      "We want what works for you. With Nimble Signals, you get to decide the inclusion and details of your internet plans. Just envision it, and we'll deliver it.",
  },
  {
    title: "PREMIUM PLAN",
    content:
      "We want what works for you. With Nimble Signals, you get to decide the inclusion and details of your internet plans. Just envision it, and we'll deliver it.",
  },
  {
    title: "GROUP PLAN",
    content:
      "We want what works for you. With Nimble Signals, you get to decide the inclusion and details of your internet plans. Just envision it, and we'll deliver it.",
  },
];

export default function InternetPlans() {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row gap-20 lg:gap-10 px-5 py-16 lg:px-16">
      <div className="w-full md:w-5/6 lg:w-1/2 flex flex-col items-center lg:items-start">
        <Heading title="Internet Plans" />
        <div className="w-full md:w-11/12 h-[23rem] mt-10">
          <img
            src={laptopImg}
            alt="laptop image"
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
          <Button info="compare plans" link="/" />
        </div>
      </div>
    </div>
  );
}
