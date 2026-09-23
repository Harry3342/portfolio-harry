import React, { useState } from 'react';
import { ImagePlus, X } from 'lucide-react';

const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState('');

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files || []);

    if (!files.length) return;

    const nextImages = files.map((file, index) => ({
      id: `${file.name}-${Date.now()}-${index}`,
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prevImages) => [...prevImages, ...nextImages]);
    setMessage(`${files.length} image${files.length > 1 ? 's' : ''} ready to preview.`);
  };

  const removeImage = (id) => {
    setImages((prevImages) => prevImages.filter((image) => image.id !== id));
  };

  return (
    <div className="rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/70 p-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Upload project images</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Add screenshots or visuals for your portfolio without changing the rest of the app structure.
          </p>
        </div>

        <label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
          <ImagePlus size={18} />
          Choose images
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
      </div>

      {message && (
        <p className="mt-4 text-sm text-green-600 dark:text-green-400">{message}</p>
      )}

      {images.length > 0 ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="relative">
                <img
                  src={image.preview}
                  alt={image.file.name}
                  className="h-40 w-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeImage(image.id)}
                  className="absolute right-2 top-2 rounded-full bg-black/70 p-1 text-white transition hover:bg-black"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="p-3">
                <p className="truncate text-sm font-medium text-gray-800 dark:text-gray-200">
                  {image.file.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {(image.file.size / 1024).toFixed(1)} KB
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-xl border border-dashed border-gray-300 bg-white px-4 py-8 text-center text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
          No images selected yet.
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
