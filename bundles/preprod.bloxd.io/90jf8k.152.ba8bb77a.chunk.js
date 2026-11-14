export const id = 152;
export const ids = [152];
export const modules = {
  7890: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      pageBody: () => CF
    });
    const CF = {
      whatIs: ["Infinite blocks, custom tools and no limits on what you build. Bloxd Creative is the free building mode where you can get creating straight away. Build in a shared world with players from all over, or set up your own free build server and create with your friends online. There's no health bar and nobody can attack you, so all you have to think about is your build."],
      howToPlay: ["Open the creative menu and grab any block or item you want. It's all sorted into categories like Building Blocks, Coloured Blocks, Nature, Decoration, Utility, Tools and Vehicles, and World Tools. Place as many as you like, fly around your build and make anything from a tiny cottage to an entire city.", "Want a completely blank canvas? Try Superflat, a world of endless flat grass that's great for big projects. In the normal Creative world, use Teleport To Fresh Land to jump to a random empty spot so nobody gets in your way. Place a Protector and other players can't change blocks or open chests in that area. If you'd like a plot of your own that's saved for good, Plots is the one to try."],
      features: ["Infinite Blocks and Items from the Creative Menu", "Fly Freely Around Your Builds", "Superflat Worlds for Big Builds", "Teleport To Fresh Land for Uninterrupted Building", "Free Private Build Servers to Create with Friends", "Extra Tools for Server Owners, Including WorldBuilder and Code Editing", "Protectors to Keep Your Builds Safe", "No Health Bar and No Attacks from Other Players"],
      tips: ["Teleport To Fresh Land is the quickest way to find some empty space", "In public lobbies, build more than about 200 blocks from spawn, because blocks near spawn reset every few hours", "Put down a Protector so other players can't change your build or open your chests", "Use /tp to get around fast, and type /help to see all the commands", "Saplings are limited in Creative, so plan your trees carefully", "Free cam lets you check your build from every angle", "If you want your build to stay exactly as you left it, start a private build server"],
      similarGames: ["classic", "classic_survival", "plots", "skyblock", "oneBlock"],
      faq: [{
        question: "What is Bloxd Creative?",
        answer: "Bloxd Creative is the creative building mode in Bloxd.io. You get infinite blocks and custom tools to build whatever you like, on your own or with friends."
      }, {
        question: "Can you fly in Bloxd Creative?",
        answer: "Yes, you can fly in Creative, so you can reach every bit of your build."
      }, {
        question: "What is Superflat in Bloxd?",
        answer: "A Creative world made of endless flat grass. It gives you a clean canvas for your biggest projects."
      }, {
        question: "How do I make a free build server in Bloxd?",
        answer: "Start your own private lobby for free and invite your friends. As the owner you also get extra tools like WorldBuilder."
      }, {
        question: "Can you use TNT in Bloxd Creative?",
        answer: "Not in public Creative worlds. You can't take explosives from the menu or craft them, so nobody can blow up other people's builds."
      }, {
        question: "Why did my build disappear in Bloxd Creative?",
        answer: "In public lobbies, blocks within about 200 blocks of spawn reset every few hours. Build further away, use Teleport To Fresh Land, or start a private build server, where nothing resets."
      }, {
        question: "What's the difference between Creative and Plots?",
        answer: "Creative is an open shared world. You build wherever you want and guard areas with Protectors. In Plots you claim your own 91\xd791 plot that only you and the players you add can change, and it's saved for good once you've changed 500 blocks."
      }]
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);