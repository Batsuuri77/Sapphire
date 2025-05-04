import React from "react";
import { ReactSortable } from "react-sortablejs";
import Spinner from "react-spinner"; // Adjusted the path to locate the Spinner component
import { useState } from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import Image from "next/image"; // Adjusted the import statement for Image component
import { ImageInputField } from "@/types/formInputs"; // Adjusted the import statement for ImageInputField type

const ImageInput: React.FC<ImageInputField> = ({
  images: existingImages,
  label = "",
  additionalLabelClassName = "",
  alt = "",
  onChange,
}) => {
  const [images, setImages] = useState(existingImages || []);
  const [isUploading, setIsUploading] = useState(false);

  async function uploadImages(ev: React.ChangeEvent<HTMLInputElement>) {
    const files = ev.target?.files;
    if (!files?.length) return;

    setIsUploading(true);
    const newImageUrls: string[] = [];

    for (const file of files) {
      // 1. Get presigned URL
      const res = await fetch(
        `/api/s3/upload-images?file=${encodeURIComponent(file.name)}&type=${
          file.type
        }`
      );
      const { url } = await res.json();

      // 2. Upload directly to S3
      await fetch(url, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": file.type,
          "x-amz-acl": "public-read", // ✅ REQUIRED to match your signed URL
        },
      });

      // 3. Push public URL to list (strip query params)
      const imageUrl = url.split("?")[0];
      newImageUrls.push(imageUrl);
    }

    setImages((prev) => [...prev, ...newImageUrls]);
    onChange?.(newImageUrls); // Notify parent
    setIsUploading(false);
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
        {
          /* {!!images?.length &&
          images.map((url) => (
            <div key={url} className="w-30 h-30 p-4">
              <Image
                src={url}
                alt={alt}
                fill
                className="rounded-full object-cover"
              />
            </div>
          ))} */
          images
            .filter((url) => url) // ✅ filters out "", null, undefined
            .map((url) => (
              <div key={url} className="w-30 h-30 p-4">
                <Image
                  src={url}
                  alt={alt || "Uploaded image"}
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
              </div>
            ))
        }
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
        {label}
        <input type="file" onChange={uploadImages} className="hidden"></input>
      </label>
      {/* {!images?.length && (
                        <div>No photos in this product.</div>
                    )} test */}
    </div>
  );
};

export default ImageInput;
