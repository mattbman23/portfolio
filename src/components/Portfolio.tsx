import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

import { WorkExperience } from "./WorkExperience";
import IBMLogo from "../../public/ibmLogo.png";
import AcentureLogo from "../../public/accenture.png";
import RainbowAQ from "../../public/rainbow.jpg";
import HackReactor from "../../public/hackReactor.png";
import NYP from "../../public/NYP.png";
import ITE from "../../public/ITE.png";

export const Portfolio = ({ skills }: { skills: string[] }) => {
  return (
    <div className="p-5 my-5 bg-white rounded-lg shadow-lg">
      <div className="boldTitle">About Me</div>
      <div className="text-justify">
        My strong curiosity of technology has driven me to explore various IT
        domains such as Networking, AI, Cyber Security, Cloud, and Software
        Development. This journey has brought me to the realization that my true
        passion lies in building applications. With its versatile nature and
        ever-changing environment, software engineering presents a new and
        exciting challenge day to day. My diverse technological background and
        desire for an exhilarating challenge enables me to make valuable
        contributions on any team or organization.
      </div>
      <div className="boldTitle">Resume</div>
      <div className="grid xl:grid-cols-2 lg:grid-cols-2">
        <div className="m-2">
          <div className="flex items-center pb-3 gap-x-3">
            <div className="p-2 bg-green-400 rounded-full">
              <BriefcaseIcon className="w-5 h-5 text-gray-600" />
            </div>
            <div className="text-xl font-semibold">Experience</div>
          </div>
          <div className="flex flex-col gap-y-3">
            <WorkExperience
              logo={IBMLogo}
              title="Cloud Engineer"
              company="IBM"
              location="USA"
              duration="Apr 2021 - Present"
            />
            <WorkExperience
              logo={AcentureLogo}
              title="Software Engineer"
              company="Accenture"
              location="Singapore"
              duration="Aug 2019 - Feb 2020"
            />
            <WorkExperience
              logo={RainbowAQ}
              title="Software Engineer"
              company="Rainbowaq"
              location="Singapore"
              duration="Jul 2017 - Dec 2017"
            />
          </div>
        </div>
        <div className="m-2">
          <div className="flex items-center pb-3 gap-x-3">
            <div className="p-2 bg-green-400 rounded-full">
              <AcademicCapIcon className="w-5 h-5 text-gray-600" />
            </div>
            <div className="text-xl font-semibold">Education</div>
          </div>
          <div className="flex flex-col gap-y-3">
            <WorkExperience
              logo={HackReactor}
              title="Hack Reactor"
              company="Software Engineering"
              duration="Oct 2020 - Feb 2021"
            />
            <WorkExperience
              logo={NYP}
              title="Nanyang Polytechnic"
              company="IT"
              location="Singapore"
              duration="2018 - 2020"
            />
            <WorkExperience
              logo={ITE}
              title="Institute of Technical Education"
              company="IT"
              location="Singapore"
              duration="2016 - 2018"
            />
          </div>
        </div>
      </div>
      <div className="boldTitle">Skills</div>
      <ul>
        <li className="skillsGroup">
          {skills.map((skill, idx) => (
            <span key={idx}>{skill}</span>
          ))}
        </li>
      </ul>
    </div>
  );
};
