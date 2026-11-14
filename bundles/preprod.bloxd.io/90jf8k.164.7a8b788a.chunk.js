export const id = 164;
export const ids = [164];
export const modules = {
  7964: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      pageBody: () => CF
    });
    const CF = {
      whatIs: ["Don't get infected... or do. Bloxd Infection is a humans vs zombies game where the virus spreads fast and anyone could end up against you. As a human you're racing through obstacles to escape. As a zombie you're part of the horde trying to stop them getting away."],
      howToPlay: ["Everyone starts out human. After 15 seconds, 3 players turn into the first zombies. Humans follow the arrows and get through the obstacles before the zombies catch up. If a zombie takes you down, that's it, you're infected and on the zombie team now.", "Humans earn points by taking down zombies and shooting the diamonds hidden around the map. Spend those points to unlock the next section and buy guns at gun stations. Be the very last human alive and you'll get a Minigun. Zombies just need to hunt down every human before they escape."],
      features: ["Up to 18 Players per Match", "Play as Humans or Zombies", "9 Human Kits, Including Veteran, Medic, Scout and Bombardier", "5 Zombie Kits, Including Sprinter, Tank, Puker and Bomber", "Unlock New Sections and Buy Guns with Points", "5 Maps: Hospital, Bunker, Subway, Airport and Farm", "Awards for First Kill, Final Kill and Last Human Alive"],
      tips: ["Stick together as humans. Zombies find it much harder to pick you off", "Shoot the diamonds for extra points. They'll come back after a while", "Grab a gun at a gun station as soon as you can afford one", "The Medic kit lets you heal yourself and your teammates", "Playing zombie? Try the Sprinter to catch humans fast", "Last human alive? Make that Minigun count"],
      similarGames: ["murderMystery", "containmentBreach", "shooting", "hideseek"],
      faq: [{
        question: "What is Bloxd Infection?",
        answer: "A humans vs zombies mode for up to 18 players. Humans try to escape through maps full of obstacles, and zombies try to infect everyone before they do."
      }, {
        question: "How does the infection spread in Bloxd Infection?",
        answer: "Humans follow the arrows and get past the obstacles while zombies chase them. Anyone a zombie takes down becomes a zombie too."
      }, {
        question: "How do humans win?",
        answer: "Get through all the obstacles and escape before you're infected."
      }, {
        question: "How do zombies win?",
        answer: "By infecting every human before they escape."
      }, {
        question: "How are points earned?",
        answer: "Humans get 100 points for taking down a zombie and 25 for an assist, plus extra for shooting diamonds."
      }, {
        question: "What kits are in Bloxd Infection?",
        answer: "Humans can pick kits like Veteran, who starts with an AK-47, or Scout, who has a sniper rifle. On the zombie side there's Puker, who can puke acid, and Tank, who has more health. Win awards to earn gold for the kit shop."
      }, {
        question: "What's the player limit in Infection?",
        answer: "18 players per match."
      }]
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);