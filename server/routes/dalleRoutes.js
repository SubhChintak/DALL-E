import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
// import OpenAI from 'openai';


dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  
  const openai = new OpenAIApi(configuration);

// const openaiapi = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
//   });
  
  router.route('/').get((req, res) => {
    // res.status(200).json({ message: 'Hello from DALL-E!' });

    res.send("hello Dall-E, thank you!")
  });

  router.route('/').post(async (req, res) => {
    try {
      const { prompt } = req.body;
  
      // const aiResponse = await openai.images.generate({
        const aiResponse = await openai.createImage({
        prompt,
        n: 1,
        size: '1024x1024',
        response_format: 'b64_json',
      });
  
      const image = aiResponse.data.data[0].b64_json;
      res.status(200).json({ photo: image });
    } catch (error) {
      console.error(error);
      // res.status(500).send(error?.response.data.error.message || 'Something went wrong');
    //   if (error && error.response) {
    //     res.status(500).send(error.response.data.error.message || 'Something went wrong');
    // } else {
    //     res.status(500).send('Something went wrong');
    // }
    
    }
  });

  export default router;