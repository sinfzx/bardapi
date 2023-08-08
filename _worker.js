import { Bard } from "googlebard";
let cookies = `__Secure-1PSID=ZQh-Y56ngZsWMXBy3Vgk-LY9cGRAkeNJXq-TVngSpqteWZIEZ-e-BN7gMfRtGlWzdg7LgA.`;
let bot = new Bard(cookies);
let conversationId = "bardchat"; // optional: to make it remember the conversation
export default {
  async fetch(request) {
    
   const res = await bot.ask(req.body, conversationId);
    return res;
  }
}
