export const id = 52;
export const ids = [52];
export const modules = {
  43264: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      startPageTexturePackFeed: () => Pd
    });
    var pd = kd(1220),
      Nd = kd(33),
      Wd = kd(43253);

    function Pd(dd, Jd) {
      const kd = new Wd.e({
        store: Nd.f,
        warn: dd,
        oneShot: Jd,
        fetchLatest: async dd => {
          const Jd = await fetch(`${pd.clientSideServerUrls.texturePackUrl}/${dd}.json`, {
            cache: "reload"
          });
          if (!Jd.ok) throw new Error(`fetching texture pack ${dd} answered HTTP ${Jd.status}`);
          return await Jd.json()
        }
      });
      return (0, Wd.i)(kd), kd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);