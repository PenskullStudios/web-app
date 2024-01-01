import Bundle from "./Bundle";
import Heading from "./Heading";

const bundles = [
  {
    imgIndex: 0,
    info: "Let's gain those followers",
    plan: "Social Media Marketing",
  },
  {
    imgIndex: 1,
    info: "Wanna rank up on google?",
    plan: "SEO/SEM, Rank Improvement",
  },
  {
    imgIndex: 2,
    info: "Looking to boost your revenue?",
    plan: "Commission-Based Sales",
  },
];

export default function MarketingSales() {
  return (
    <div className="px-5 py-16 lg:px-16">
      <Heading title="Marketing & Sales" />
      <div className="mt-16 flex flex-col justify-center items-center lg:items-start lg:flex-row gap-10">
        {bundles.map((ele, i) => {
          return (
            <Bundle
              key={i}
              imgIndex={ele.imgIndex}
              info={ele.info}
              plan={ele.plan}
            />
          );
        })}
      </div>
    </div>
  );
}
