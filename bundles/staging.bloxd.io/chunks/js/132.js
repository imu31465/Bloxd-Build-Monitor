export const id = 132;
export const ids = [132];
export const modules = {
  5897: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW
    });
    var mW = OW(1185);
    async function EW(WW) {
      const iW = await fetch(`${mW.clientSideServerUrls.s3Url}/${WW}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === iW.status || 403 === iW.status) return null;
      if (!iW.ok) throw new Error(`Failed to download the texture pack (${iW.status})`);
      return await iW.json()
    }
  },
  42537: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      gamePackSource: () => NW
    });
    var mW = OW(5897),
      EW = OW(1584);

    function NW(WW) {
      return {
        packKey: async iW => (await EW.e.getGame(WW, iW, !0)).customTexturePackKey,
        fetchPack: mW.b
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);