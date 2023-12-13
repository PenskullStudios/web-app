import logo from "../../assets/temp_logo.svg";

export default function Logo() {
  return (
    <div className="flex justify-start items-center gap-5">
      <img src={logo} alt="penskull logo" width={40} height={40} />
      <p className="uppercase text-lg tracking-wider font-semibold">
        Penskull Studios
      </p>
    </div>
  );
}
