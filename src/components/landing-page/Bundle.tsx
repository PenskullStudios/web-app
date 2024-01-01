import bundle1 from "../../assets/marketing&sales-Social Media.png";
import bundle2 from "../../assets/marketing&sales-SEO.png";
import bundle3 from "../../assets/marketing&sales-Commision based.png";

const bundles = [bundle1, bundle2, bundle3];

export default function Bundle({
  imgIndex,
  info,
  plan,
}: {
  imgIndex: number;
  info: string;
  plan: string;
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
    </div>
  );
}
