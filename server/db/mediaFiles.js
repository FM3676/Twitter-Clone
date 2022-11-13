import { prisma } from ".";
export const createMediaFile = (mediaFile) =>
  prisma.mediaFile.create({
    data: mediaFile,
  });
