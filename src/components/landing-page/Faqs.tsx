import Faq from "./Faq";
import Heading from "./Heading";
import backVideo from "../../assets/back_video.mp4";

const faqs = [
  {
    imgIndex: 0,
    title: "What is the benefit of Penskull's commission-based sales model?",
    content:
      "Our commission-based model fosters a partnership where our dedicated sales team works tirelessly, ensuring mutual success – we succeed when your business thrives.",
  },
  {
    imgIndex: 1,
    title: "How does Penskull ensure my brand's success online?",
    content:
      "Penskull strategically elevates brand presence through a holistic approach, integrating Social Media Marketing, SEO/SEM, and cutting-edge design for a lasting digital impact.",
  },
  {
    imgIndex: 2,
    title: "What sets Penskull apart from other digital agencies?",
    content:
      "Penskull stands out by seamlessly blending creativity and tech expertise, creating digital experiences that captivate and innovate.",
  },
];

export default function Faqs() {
  return (
    <div className="relative flex items-center h-[72rem] lg:h-[48rem]">
      <div className="absolute z-10 lg:px-16">
        <Heading title="Faqs" />
        <div className="mt-10 lg:mt-28 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-14">
          {faqs.map((ele, i) => {
            return (
              <Faq
                key={i}
                imgIndex={ele.imgIndex}
                title={ele.title}
                content={ele.content}
              />
            );
          })}
        </div>
      </div>
      <video
        className="absolute top-0 w-full h-full object-fill"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={backVideo} type="video/mp4" />
      </video>
    </div>
  );
}
