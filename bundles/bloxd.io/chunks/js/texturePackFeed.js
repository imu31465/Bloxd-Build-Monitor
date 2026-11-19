export const id = 51;
export const ids = [51];
export const modules = {
  42394: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      startPageTexturePackFeed: () => RY
    });
    var FY = DY(1222),
      AY = DY(40),
      IY = DY(42386);

    function RY(YY, rY) {
      const DY = new IY.c({
        store: AY.i,
        warn: YY,
        oneShot: rY,
        fetchLatest: async YY => {
          const rY = await fetch(`${FY.clientSideServerUrls.texturePackUrl}/${YY}.json`, {
            cache: "reload"
          });
          if (!rY.ok) throw new Error(`fetching texture pack ${YY} answered HTTP ${rY.status}`);
          return await rY.json()
        }
      });
      return (0, IY.f)(DY), DY
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);