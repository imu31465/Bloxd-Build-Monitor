export const id = 47;
export const ids = [47];
export const modules = {
  42004: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      startPageTexturePackFeed: () => XJ
    });
    var FJ = ZJ(1098),
      UJ = ZJ(29),
      eJ = ZJ(41991);

    function XJ(JJ, cJ) {
      const ZJ = new eJ.e({
        store: UJ.g,
        warn: JJ,
        oneShot: cJ,
        fetchLatest: async JJ => {
          const cJ = await fetch(`${FJ.clientSideServerUrls.texturePackUrl}/${JJ}.json`, {
            cache: "reload"
          });
          if (!cJ.ok) throw new Error(`fetching texture pack ${JJ} answered HTTP ${cJ.status}`);
          return await cJ.json()
        }
      });
      return (0, eJ.i)(ZJ), ZJ
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);