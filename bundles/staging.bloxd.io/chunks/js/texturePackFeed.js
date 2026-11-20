export const id = 52;
export const ids = [52];
export const modules = {
  42734: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      startPageTexturePackFeed: () => gv
    });
    var hv = Pv(1184),
      Sv = Pv(39),
      ev = Pv(42720);

    function gv(vv, zv) {
      const Pv = new ev.e({
        store: Sv.f,
        warn: vv,
        oneShot: zv,
        fetchLatest: async vv => {
          const zv = await fetch(`${hv.clientSideServerUrls.texturePackUrl}/${vv}.json`, {
            cache: "reload"
          });
          if (!zv.ok) throw new Error(`fetching texture pack ${vv} answered HTTP ${zv.status}`);
          return await zv.json()
        }
      });
      return (0, ev.i)(Pv), Pv
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);