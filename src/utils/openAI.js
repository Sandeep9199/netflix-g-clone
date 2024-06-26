import OpenAI from "openai";
import { OPEN_AI_KEY } from "./constant";

const openai = new OpenAI({
  //   apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
  apiKey: OPEN_AI_KEY,
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});

export default openai;
