export const id = 67;
export const ids = [67];
export const modules = {
  54687: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      startPageTexturePackFeed: () => ZR
    });
    var yR = GR(1282),
      tR = GR(46),
      uR = GR(54680);

    function ZR(RR, JR) {
      const GR = new uR.c({
        store: tR.g,
        warn: RR,
        oneShot: JR,
        fetchLatest: async RR => {
          const JR = await fetch(`${yR.clientSideServerUrls.texturePackUrl}/${RR}.json`, {
            cache: "reload"
          });
          if (!JR.ok) throw new Error(`fetching texture pack ${RR} answered HTTP ${JR.status}`);
          return await JR.json()
        }
      });
      return (0, uR.d)(GR), GR
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);