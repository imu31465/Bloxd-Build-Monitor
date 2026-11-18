export const id = 47;
export const ids = [47];
export const modules = {
  42052: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      startPageTexturePackFeed: () => lB
    });
    var VB = dB(1089),
      yB = dB(33),
      pB = dB(42043);

    function lB(BB, TB) {
      const dB = new pB.b({
        store: yB.f,
        warn: BB,
        oneShot: TB,
        fetchLatest: async BB => {
          const TB = await fetch(`${VB.clientSideServerUrls.texturePackUrl}/${BB}.json`, {
            cache: "reload"
          });
          if (!TB.ok) throw new Error(`fetching texture pack ${BB} answered HTTP ${TB.status}`);
          return await TB.json()
        }
      });
      return (0, pB.d)(dB), dB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);