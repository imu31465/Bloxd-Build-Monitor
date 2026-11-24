export const id = 55;
export const ids = [55];
export const modules = {
  51100: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      startPageTexturePackFeed: () => GB
    });
    var TB = ZB(1258),
      JB = ZB(36),
      oB = ZB(51091);

    function GB(BB, IB) {
      const ZB = new oB.e({
        store: JB.i,
        warn: BB,
        oneShot: IB,
        fetchLatest: async BB => {
          const IB = await fetch(`${TB.clientSideServerUrls.texturePackUrl}/${BB}.json`, {
            cache: "reload"
          });
          if (!IB.ok) throw new Error(`fetching texture pack ${BB} answered HTTP ${IB.status}`);
          return await IB.json()
        }
      });
      return (0, oB.f)(ZB), ZB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);