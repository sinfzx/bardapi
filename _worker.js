import { Bard } from "googlebard";
let cookies = `__Secure-1PSID=ZQh-Y56ngZsWMXBy3Vgk-LY9cGRAkeNJXq-TVngSpqteWZIEZ-e-BN7gMfRtGlWzdg7LgA.`;
let bot = new Bard(cookies);
let conversationId = "bardchat"; // optional: to make it remember the conversation
let res;
export default {
  async fetch(request, env) {
    res = await bot.ask("What is my name?", conversationId);
    return res;
  }
}
