import {
  CalendarIcon,
  BriefcaseIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";

export const WorkExperience = ({
  logo,
  title,
  company,
  location,
  duration,
}: {
  logo: StaticImageData;
  title: string;
  company?: string;
  location?: string;
  duration: string;
}) => {
  return (
    <div className="flex flex-row">
      <div className="w-12 h-12 overflow-hidden rounded-md">
        <Image src={logo} alt={`${title}_logo`} />
      </div>
      <div className="grid px-2 text-sm text-gray-500 lg:grid-row-1 grow">
        <div className="font-bold text-black xl:col-span-2 lg:row-span-1">
          {title}
        </div>
        <div className="flex flex-row gap-x-3 lg:row-span-1">
          {company && (
            <div className="flex flex-row items-center justify-self-end gap-x-1">
              <span>
                <BriefcaseIcon className="w-4 h-4" />
              </span>
              <div>{company}</div>
            </div>
          )}
          {location && (
            <div className="flex flex-row items-center justify-self-end gap-x-1">
              <span>
                <MapPinIcon className="w-4 h-4" />
              </span>
              <div>{location}</div>
            </div>
          )}
        </div>
        <div className="flex flex-row items-center xl:justify-self-end gap-x-1 lg:row-span-1">
          <span>
            <CalendarIcon className="w-4 h-4" />
          </span>
          <div>{duration}</div>
        </div>
      </div>
    </div>
  );
};
