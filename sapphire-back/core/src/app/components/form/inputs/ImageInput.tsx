import React from "react";
import { ReactSortable } from "react-sortablejs";
import Spinner from "react-spinner"; // Adjusted the path to locate the Spinner component
import { useState } from "react";
import axios from "axios";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import Image from "next/image"; // Adjusted the import statement for Image component

interface ImageInputProps {
  label: string; // Label for the input field
  url: string; // URL for the input field
  images: string[]; // Array of image URLs
  text?: string; // Optional text for the input field
  additionalLabelClassName?: string; // Optional additional class names for the label
}

const ImageInput: React.FC<ImageInputProps> = ({
  images: existingImages,
  text = "Upload a logo",
  additionalLabelClassName = "",
}) => {
  const [images, setImages] = useState(existingImages || []);
  const [isUploading, setIsUploading] = useState(false);

  async function uploadImages(ev: React.ChangeEvent<HTMLInputElement>) {
    const files = ev.target?.files;
    if (files && files.length > 0) {
      setIsUploading(true);
      const data = new FormData();

      for (const file of files) {
        data.append("file", file);
      }

      interface UploadResponse {
        links: string[];
      }

      const res = await axios.post<UploadResponse>("/api/upload", data);
      setImages((oldImages) => {
        return [...oldImages, ...res.data.links];
      });
      setIsUploading(false);
    }
  }

  function updateImagesOrder(newState: unknown[]) {
    const updatedImages = newState.map((item) => item as string);
    setImages(updatedImages);
  }

  return (
    <div className="flex flex-wrap gap-1">
      <ReactSortable
        list={images.map((url) => ({ id: url, url }))}
        className="flex flex-wrap gap-1"
        setList={updateImagesOrder}
      >
        {!!images?.length &&
          images.map((url) => (
            <div key={url} className="w-30 h-30 p-4">
              <Image src={url} alt="" className="rounded-full object-cover" />
            </div>
          ))}
      </ReactSortable>
      {isUploading && (
        <div className="h-30 flex items-center">
          <Spinner />
        </div>
      )}
      <label
        className={`w-30 h-30 flex flex-col items-center justify-center border border-gray-200 shadow-sm  cursor-pointer rounded-full overflow-hidden font-semibold  text-center text-sm text-gray-500 gap-2${additionalLabelClassName}`}
      >
        <ArrowUpTrayIcon className="w-5 h-5" />
        {text}
        <input type="file" onChange={uploadImages} className="hidden"></input>
      </label>
      {/* {!images?.length && (
                        <div>No photos in this product.</div>
                    )} test */}
    </div>
  );
};

export default ImageInput;
