import { v2 as _cloudinary } from "cloudinary";

const cloudinary = () => {
  const config = useRuntimeConfig();

  _cloudinary.config({
    cloud_name: config.cloudinaryCloudName,
    api_key: config.cloudinaryApiKey,
    api_secret: config.cloudinaryApiSecret,
  });
  return _cloudinary;
};

export const uploadToCloudinary = (image) =>
  new Promise((resolve, reject) =>
    cloudinary().uploader.upload(image, (error, data) =>
      error ? reject(error) : resolve(data)
    )
  );
