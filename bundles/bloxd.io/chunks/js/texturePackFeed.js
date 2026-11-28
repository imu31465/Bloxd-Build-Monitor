export const id = 67;
export const ids = [67];
export const modules = {
  54916: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      startPageTexturePackFeed: () => Vb
    });
    var eb = Mb(1271),
      Hb = Mb(43),
      pb = Mb(54903);

    function Vb(bb, wb) {
      const Mb = new pb.e({
        store: Hb.h,
        warn: bb,
        oneShot: wb,
        fetchLatest: async bb => {
          const wb = await fetch(`${eb.clientSideServerUrls.texturePackUrl}/${bb}.json`, {
            cache: "reload"
          });
          if (!wb.ok) throw new Error(`fetching texture pack ${bb} answered HTTP ${wb.status}`);
          return await wb.json()
        }
      });
      return (0, pb.g)(Mb), Mb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);