import { prisma } from ".";

export const createTweet = (tweetData) =>
  prisma.tweet.create({
    data: tweetData,
  });
