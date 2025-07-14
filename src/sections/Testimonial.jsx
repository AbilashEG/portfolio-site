import { twMerge } from "tailwind-merge";
import { learningNow } from "../constants";

const LearningCard = ({ item }) => {
  return (
    <div
      className={twMerge(
        "h-full w-64 rounded-xl border border-gray-50/[.1] p-4 bg-gradient-to-r bg-indigo to-storm text-white hover:bg-royal hover-animation"
      )}
    >
      <p className="text-sm">{item}</p>
    </div>
  );
};

export default function Testimonial() {
  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <h2 className="text-heading">{learningNow.title}</h2>
      <div className="flex flex-wrap justify-center gap-6 mt-12">
        {learningNow.items.map((item, index) => (
          <LearningCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
