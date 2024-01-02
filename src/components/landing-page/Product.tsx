import Button from "./Button";
import productImage1 from "../../assets/Products-Brand Building.png";
import productImage2 from "../../assets/Products-Marketing.png";
import productImage3 from "../../assets/Products-IT Services.png";

const images = [productImage1, productImage2, productImage3];

export default function Product({
  imgIndex,
  info,
}: {
  imgIndex: number;
  info: string;
}) {
  return (
    <div className="w-full md:w-3/5 lg:w-[30%]">
      <div className="h-[30rem] w-full relative">
        <img
          src={images[imgIndex]}
          alt="products image"
          loading="lazy"
          className="rounded-[5rem] w-full h-full object-cover"
        />
        <p className="absolute bottom-24 text-center text-white uppercase text-4xl font-extrabold w-full">
          <span className="bg-[rgba(131,46,255,0.5)] px-2">{info}</span>
        </p>
        <div className="absolute bottom-7 flex justify-center w-full">
          <Button
            info="find out more"
            link="https://docs.google.com/forms/d/e/1FAIpQLSf5jJBuLZkQT9kGZdsyEwyhjlbU0AF4Xy4BLxfBtLJWePDkZg/viewform"
          />
        </div>
      </div>
    </div>
  );
}
