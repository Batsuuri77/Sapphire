import React from "react";
import Image from "next/image";
import { SOCIAL_IMAGE_PATHS } from "@/utils/imagePaths";

const Footer = () => {
  const socials =
    "w-5 h-5 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 flex items-center justify-center";

  return (
    <footer className="flex-shrink-0 w-full h-auto">
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-row justify-between items-center gap-2 px-4 py-2 border-t  border-gray-300 ">
          <div className="flex justify-start items-center px-4 xl:py-3 2xl:py-4 ">
            <p className="text-xs sm:text-base xl:text-lg 2xl:text-xl text-left ">
              © Batsuuri Battsooj 2025
            </p>
          </div>
          <div className="flex flex-row justify-between gap-x-2 sm:gap-x-8 text-2xl">
            <a
              href="https://www.facebook.com/kalu.ulak.77"
              target="_blank"
              rel="noopener noreferrer"
              className={socials}
            >
              <Image
                src={SOCIAL_IMAGE_PATHS.facebook1}
                alt={"facebook"}
                className="w-full h-full object-contain"
                width={30}
                height={30}
              ></Image>
            </a>
            <a
              href="https://www.instagram.com/batsuuri_77/"
              target="_blank"
              rel="noopener noreferrer"
              className={socials}
            >
              <Image
                src={SOCIAL_IMAGE_PATHS.instagram}
                alt={"instagram"}
                className="w-full h-full object-contain"
                width={30}
                height={30}
              ></Image>
            </a>
            <a
              href="https://github.com/Batsuuri77"
              target="_blank"
              rel="noopener noreferrer"
              className={socials}
            >
              <Image
                src={SOCIAL_IMAGE_PATHS.github}
                alt={"github"}
                className="w-full h-full object-contain"
                width={30}
                height={30}
              ></Image>
            </a>
            <a
              href="https://www.linkedin.com/in/batsuuri-battsooj-b27231b8/"
              target="_blank"
              rel="noopener noreferrer"
              className={socials}
            >
              <Image
                src={SOCIAL_IMAGE_PATHS.linkedin}
                alt={"linkedin"}
                className="w-full h-full object-contain"
                width={30}
                height={30}
              ></Image>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
