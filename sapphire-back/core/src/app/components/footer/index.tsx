import React from "react";
import Image from "next/image";
import { SOCIAL_IMAGE_PATHS } from "@/app/utils/imagePaths";

const Footer = () => {
  const socials =
    "w-5 h-5 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 flex items-center justify-center";

  return (
    <footer className="flex-shrink-0 w-full h-50">
      <div className="flex flex-col justify-between pt-6 border-t-[2px] border-borderBlack border-dashed w-full">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="font-semibold text-2xl sm:text-4xl 2xl:text-5xl">
            FIND ME ON 👇
          </h1>
          <a
            href="mailto: batsuuri2146@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row justify-between text-md sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-normal"
          >
            batsuuri2146@gmail.com
          </a>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 py-4">
          <div className="flex flex-row justify-between gap-x-6 sm:gap-x-8 text-2xl">
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
        <div className="flex justify-start items-center px-4 py-2 xl:py-3 2xl:py-4 border-borderBlack border-t">
          <p className="font-normal text-sm sm:text-lg xl:text-xl 2xl:text-2xl text-left">
            © Batsuuri Battsooj 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
