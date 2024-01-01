import logo from "../assets/penskull-logo.svg";

export default function Logo() {
  return (
    <div className="flex justify-start items-center gap-2">
      <img src={logo} alt="penskull logo" width={50} height={50} />
      <p className="uppercase text-lg tracking-wider font-semibold">
        Penskull Studios
      </p>
    </div>
  );
}
