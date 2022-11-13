import formidable from "formidable";
import { createMediaFile } from "~~/server/db/mediaFiles";
import { createTweet } from "~~/server/db/tweets";
import { tweetTransformer } from "~~/server/transformers/tweet";

export default defineEventHandler(async (event) => {
  const form = formidable({});

  // Analyze the form content
  const response = await new Promise((resolve, reject) => {
    form.parse(event.req, (err, fields, files) => {
      if (err) {
        reject(err);
      }
      resolve({ fields, files });
    });
  });

  const { fields, files } = response;

  const userId = event.context?.auth?.user?.id;

  const tweetData = {
    text: fields.text,
    authorId: userId,
  };

  const tweet = await createTweet(tweetData);

  const filePromises = Object.keys(files).map(async (key) =>
    createMediaFile({
      url: "",
      providerPublicId: "random_id",
      userId: userId,
      tweetId: tweet.id,
    })
  );

  await Promise.all(filePromises);

  return {
    // hello: tweetTransformer(tweet),
    files
  };
});
