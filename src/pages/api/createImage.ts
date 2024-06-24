import { NextApiResponse } from "next";
import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.NEXT_OPENAI_API_KEY,
});

async function createImage(req: any, res: NextApiResponse) {
  const { prompt, ...queryParams } = req.query;

  const image = await openai.images.generate({
    model: "dall-e-3",
    prompt: prompt,
    size: "1024x1024",
    response_format: 'url',
  });
  const imageurl = image.data[0].url;

  return res.status(200).json({
    success: true,
    imageurl
  });
}

export default createImage;