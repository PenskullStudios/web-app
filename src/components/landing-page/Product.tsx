import Button from "./Button";
import productImage1 from "../../assets/product_1.webp";
import productImage2 from "../../assets/product_2.webp";
import productImage3 from "../../assets/product_3.webp";

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
        <p className="absolute bottom-24 text-center text-white uppercase text-4xl font-extrabold w-full px-10">
          {info}
        </p>
        <div className="absolute bottom-7 flex justify-center w-full">
          <Button info="find out more" link="/" />
        </div>
      </div>
    </div>
  );
}
