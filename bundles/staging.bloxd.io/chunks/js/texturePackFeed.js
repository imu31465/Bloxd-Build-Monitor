export const id = 55;
export const ids = [55];
export const modules = {
  51184: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      startPageTexturePackFeed: () => IB
    });
    var QB = zB(1244),
      nB = zB(41),
      dB = zB(51173);

    function IB(BB, jB) {
      const zB = new dB.c({
        store: nB.g,
        warn: BB,
        oneShot: jB,
        fetchLatest: async BB => {
          const jB = await fetch(`${QB.clientSideServerUrls.texturePackUrl}/${BB}.json`, {
            cache: "reload"
          });
          if (!jB.ok) throw new Error(`fetching texture pack ${BB} answered HTTP ${jB.status}`);
          return await jB.json()
        }
      });
      return (0, dB.d)(zB), zB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);