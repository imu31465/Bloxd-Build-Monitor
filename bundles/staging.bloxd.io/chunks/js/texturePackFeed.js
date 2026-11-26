export const id = 66;
export const ids = [66];
export const modules = {
  53994: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      startPageTexturePackFeed: () => yV
    });
    var JV = xV(1230),
      YV = xV(40),
      UV = xV(53983);

    function yV(VV, eV) {
      const xV = new UV.c({
        store: YV.i,
        warn: VV,
        oneShot: eV,
        fetchLatest: async VV => {
          const eV = await fetch(`${JV.clientSideServerUrls.texturePackUrl}/${VV}.json`, {
            cache: "reload"
          });
          if (!eV.ok) throw new Error(`fetching texture pack ${VV} answered HTTP ${eV.status}`);
          return await eV.json()
        }
      });
      return (0, UV.f)(xV), xV
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);