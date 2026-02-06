"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { MouseEvent, useCallback, useState } from "react";
import { GridTileImage } from "./grid";

type Props = {
  images: StaticImageData[];
};

export function Gallery({ images }: Props) {
  const [selected, setSelected] = useState(0);

  const updateImage = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    const index = Number((event.currentTarget as HTMLButtonElement).id);
    setSelected(index);
  }, []);

  const nextImageIndex = selected + 1 < images.length ? selected + 1 : 0;
  const previousImageIndex = selected === 0 ? images.length - 1 : selected - 1;

  const buttonClassName =
    "h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center";

  return (
    <div className="w-full h-full flex flex-col rounded-lg border border-neutral-200 bg-white p-4 md:p-8 gap-8 lg:gap-12 dark:border-neutral-800 dark:bg-black">
      <div className="relative aspect-square h-full max-h-[650px] w-full overflow-hidden">
        {images[selected] && (
          <Image
            className="h-full w-full object-contain"
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            alt="Image Alt Text"
            src={images[selected]?.src}
            priority={true}
          />
        )}

        {images.length > 1 ? (
          <div className="absolute bottom-[15%] flex w-full justify-center">
            <div className="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur-sm dark:border-black dark:bg-neutral-900/80">
              <button
                id={previousImageIndex?.toString()}
                onClick={updateImage}
                aria-label="Previous product image"
                className={buttonClassName}
              >
                <ArrowLeftIcon className="h-5" />
              </button>
              <div className="mx-1 h-6 w-px bg-neutral-500"></div>
              <button
                id={nextImageIndex?.toString()}
                onClick={updateImage}
                aria-label="Next product image"
                className={buttonClassName}
              >
                <ArrowRightIcon className="h-5" />
              </button>
            </div>
          </div>
        ) : null}
      </div>

      {images.length > 1 ? (
        <ul className="flex items-center flex-wrap justify-center gap-2 overflow-auto py-1 lg:mb-0">
          {images.map((image, index) => {
            const isActive = index === selected;

            return (
              <li key={index} className="h-20 w-20">
                <button
                  id={index?.toString()}
                  onClick={updateImage}
                  aria-label="Select product image"
                  className="h-full w-full"
                >
                  <GridTileImage
                    alt="Image Alt Text"
                    src={image.src}
                    width={80}
                    height={80}
                    active={isActive}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
