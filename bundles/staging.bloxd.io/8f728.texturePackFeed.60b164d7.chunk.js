export const id = 44;
export const ids = [44];
export const modules = {
  41249: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      startPageTexturePackFeed: () => uc
    });
    var Vc = nc(1062),
      Ic = nc(51),
      rB = nc(41240);

    function uc(cB, Bc) {
      const nc = new rB.c({
        store: Ic.d,
        warn: cB,
        oneShot: Bc,
        fetchLatest: async cB => {
          const Bc = await fetch(`${Vc.clientSideServerUrls.texturePackUrl}/${cB}.json`, {
            cache: "reload"
          });
          if (!Bc.ok) throw new Error(`fetching texture pack ${cB} answered HTTP ${Bc.status}`);
          return await Bc.json()
        }
      });
      return (0, rB.e)(nc), nc
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);