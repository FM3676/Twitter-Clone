import formidable from "formidable";
import { createTweet } from "~~/server/db/tweets";
import { tweetTransformer } from "~~/server/transformers/tweet";

export default defineEventHandler(async (event) => {
  const form = formidable({});

  // Analyze the form content
  const response = await new Promise((resolve, reject) => {
    form.parse(event.req, (err, fields, fiels) => {
      if (err) {
        reject(err);
      }
      resolve({ fields, fiels });
    });
  });

  const { fields, fiels } = response;

  const userId = event.context?.auth?.user?.id;

  const tweetData = {
    text: fields.text,
    authorId: userId,
  };

  const tweet = await createTweet(tweetData);

  return {
    hello: tweetTransformer(tweet),
  };
});
