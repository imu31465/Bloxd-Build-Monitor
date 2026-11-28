export const id = 67;
export const ids = [67];
export const modules = {
  55115: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      startPageTexturePackFeed: () => Xd
    });
    var Wd = md(1253),
      Fd = md(46),
      Rd = md(55102);

    function Xd(dd, Od) {
      const md = new Rd.d({
        store: Fd.h,
        warn: dd,
        oneShot: Od,
        fetchLatest: async dd => {
          const Od = await fetch(`${Wd.clientSideServerUrls.texturePackUrl}/${dd}.json`, {
            cache: "reload"
          });
          if (!Od.ok) throw new Error(`fetching texture pack ${dd} answered HTTP ${Od.status}`);
          return await Od.json()
        }
      });
      return (0, Rd.g)(md), md
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);