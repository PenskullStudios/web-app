import bundle1 from "../../assets/bundle_1.webp";
import bundle2 from "../../assets/bundle_2.webp";
import bundle3 from "../../assets/bundle_3.webp";

const bundles = [bundle1, bundle2, bundle3];

export default function Bundle({
  imgIndex,
  info,
  plan,
  price,
}: {
  imgIndex: number;
  info: string;
  plan: string;
  price: string;
}) {
  return (
    <div className="w-full md:w-3/5 lg:w-[30%]">
      <div className="w-full h-64 relative">
        <img
          src={bundles[imgIndex]}
          alt="bundle image"
          loading="lazy"
          className="rounded-[3.5rem] w-full h-full object-cover"
        />
      </div>
      <h3 className="uppercase mt-8">{info}</h3>
      <h2 className="text-custom-pink text-3xl font-bold mt-3">{plan}</h2>
      <h4 className="text-lg mt-1 font-bold">{price}</h4>
    </div>
  );
}
