import Image from "next/image";
import {
  ArrowDownTrayIcon,
  MinusIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import profilePic from "../../public/profileImg.jpg";
import { PortfolioSocial } from "@/types";

export const Profile = ({ socials }: { socials: PortfolioSocial[] }) => {
  return (
    <div>
      <div className="py-4 bg-white rounded-md shadow-2xl">
        <div className="px-4 text-xl font-bold">MATTHEW BUDIMAN</div>
        <div className="px-4 text-[17px] text-[#777]">Cloud Engineer</div>
        <Image
          className="profileImgClipPath"
          src={profilePic}
          alt="profileImage"
        />
        <div className="px-3">
          <div className="relative -my-5">
            <div className="flex items-center justify-center bg-green-300 rounded-full h-11 w-11">
              <UserIcon className="w-5 h-5" />
            </div>
            <br />
          </div>
          {socials.map((social, idx) => (
            <div key={idx}>
              <div className="h-1"></div>
              <div className="flex flex-row px-4">
                <div className="flex flex-col items-start">
                  <div className="flex flex-row items-center justify-center gap-x-4">
                    <div className="w-4 text-xl font-bold text-center text-green-500">
                      o
                    </div>
                    <div className="flex flex-row space-x-1 cursor-pointer">
                      <span>{social.title}: </span>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500 transition hover:scale-105 hover:text-green-500"
                      >
                        {social.name}
                      </a>
                    </div>
                  </div>
                  <div>
                    <MinusIcon className="w-4 h-4 rotate-90" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center w-full py-2 text-center">
            <button className="flex flex-row  items-center justify-center p-1 space-x-2 transition bg-green-300 rounded-md hover:scale-105">
              <a
                href="MatthewBudimanResume.pdf"
                target={"_blank"}
                rel="noreferrer"
              >
                Download Resume
              </a>
              <div className="p-1 bg-white rounded-full">
                <ArrowDownTrayIcon className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
