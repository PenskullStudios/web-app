import Product from "./Product";

const products = [
  { imgIndex: 0, info: "BRAND Building" },
  { imgIndex: 1, info: "MARKETING & SALES" },
  { imgIndex: 2, info: "IT SERVICES" },
];

export default function ProductSection() {
  return (
    <div className="px-5 py-16 pt-0 md:pt-16 lg:px-16">
      <h1 className="uppercase white-neon text-5xl text-center lg:text-left lg:text-7xl tracking-wide animate-ease-in animate-fade">
        Our Products
      </h1>
      <div className="flex flex-col lg:flex-row gap-14 justify-center items-center mt-14">
        {products.map((ele, i) => {
          return <Product key={i} imgIndex={ele.imgIndex} info={ele.info} />;
        })}
      </div>
    </div>
  );
}
