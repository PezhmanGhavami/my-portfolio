import type { TWorkExperienceData } from "@/content/homepage";

const SingleWorkExperience = ({ data }: { data: TWorkExperienceData }) => {
  return (
    <div>
      <p className="w-fit flex-1 brightness-90">{data.duration}</p>
      <div className="space-y-2">
        <p className="text-blue-400">{data.jobTitle}</p>

        <div className="space-y-3 text-base">
          <ul>
            {data.highlights.map((highlight, index) => (
              <li className="list-inside list-disc" key={index}>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleWorkExperience;
