import Logo from "../Logo";
import contactVideo from "../../assets/contact_video.mp4";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";

export default function ContactUs() {
  return (
    <div className="flex flex-col py-16 lg:pb-0 lg:flex-row lg:items-center gap-20">
      <div className="w-full lg:w-3/5 relative">
        <video
          className="transform scale-x-[-1]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={contactVideo} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 p-5 md:p-16 md:py-10">
          <Logo />
          <h1 className="uppercase text-3xl md:text-5xl xl:text-7xl white-neon mt-5 md:mt-10 w-full md:w-3/5">
            connect to what counts
          </h1>
          <h2 className="uppercase text-lg lg:text-2xl mt-5">
            Let&apos;s get started
          </h2>
        </div>
      </div>
      <div className="flex gap-10 flex-col px-5 lg:px-0">
        <div>
          <h1 className="text-custom-pink text-3xl">Phone</h1>
          <p className="text-lg mt-1">+91-7558445089</p>
        </div>
        <div>
          <h1 className="text-custom-pink text-3xl">Email</h1>
          <p className="text-lg mt-1">sales@penskullstudios.com</p>
        </div>
        <div>
          <h1 className="text-custom-pink text-3xl">Social</h1>
          <div className="flex gap-2 mt-1 items-center">
            <a
              href={"https://www.instagram.com/penskull.studios/"}
              target="_blank"
            >
              <FiInstagram size={"40px"} />
            </a>
            <a
              href={
                "https://www.facebook.com/people/Penskull-Studios/61554998945907/"
              }
              target="_blank"
            >
              <RiFacebookCircleFill size={"50px"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
