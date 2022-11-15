import { prisma } from ".";

export const createTweet = (tweetData) =>
  prisma.tweet.create({
    data: tweetData,
  });

export const getTweets = (params = {}) => prisma.tweet.findMany({ ...params });

export const getTweetById = (tweetId, params = {}) =>
  prisma.tweet.findUnique({
    ...params,
    where: {
      ...params.where,
      id: tweetId,
    },
  });
