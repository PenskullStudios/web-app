import Accessory from "./Accessory";
import Heading from "./Heading";

const acs = [
  {
    imgIndex: 0,
    info: "Cloud Services",
    price: "Skyrocket Your Application With Cloud!",
  },
  {
    imgIndex: 1,
    info: "Maintenance Services",
    price: "Ensure Your Digital Show Never Flops!",
  },
];

export default function ITServices() {
  return (
    <div className="px-5 py-16 lg:px-16">
      <Heading title="IT Services" />
      <div className="mt-16 flex w-full flex-col justify-center items-center lg:justify-between lg:flex-row gap-20">
        {acs.map((ele, i) => {
          return (
            <Accessory
              key={i}
              imgIndex={ele.imgIndex}
              info={ele.info}
              price={ele.price}
            />
          );
        })}
      </div>
    </div>
  );
}
