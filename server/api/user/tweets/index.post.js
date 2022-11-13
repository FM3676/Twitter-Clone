import formidable from "formidable";

export default defineEventHandler(async (event) => {
  const form = formidable({});

  const response = await new Promise((resolve, reject) => {
    form.parse(event.req, (err, fields, fiels) => {
      if (err) {
        reject(err);
      }
      resolve({ fields, fiels });
    });
  });

  return {
    hello: response,
  };
});
