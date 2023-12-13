import diamond from "../../assets/diamond.webp";
import cube from "../../assets/cube.webp";
import star from "../../assets/star.webp";

const images = [diamond, cube, star];

export default function Faq({
  imgIndex,
  title,
  content,
}: {
  imgIndex: number;
  title: string;
  content: string;
}) {
  return (
    <div className="w-full px-5 md:w-[50%] lg:w-[30%]">
      <div className="relative w-14 h-14">
        <img
          src={images[imgIndex]}
          alt="graphics image"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full">
        <h4 className="text-xl font-semibold mt-5">{title}</h4>
        <p className="text-lg mt-3">{content}</p>
      </div>
    </div>
  );
}
