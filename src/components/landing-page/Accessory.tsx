import acs1 from "../../assets/acs_1.webp";
import acs2 from "../../assets/acs_2.webp";

const image = [acs1, acs2];

export default function Accessory({
  imgIndex,
  info,
  price,
}: {
  imgIndex: number;
  info: string;
  price: string;
}) {
  return (
    <div className="w-full md:w-[80%] lg:w-1/2">
      <div className="w-full md:w-full h-80 relative">
        <img
          src={image[imgIndex]}
          alt="acessory images"
          loading="lazy"
          className="rounded-[3rem] w-full h-full object-cover"
        />
      </div>
      <h2 className="text-custom-pink text-3xl font-bold mt-7">{info}</h2>
      <h4 className="mt-1 text-lg">{price}</h4>
    </div>
  );
}
