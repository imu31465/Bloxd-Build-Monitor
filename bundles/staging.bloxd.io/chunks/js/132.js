export const id = 132;
export const ids = [132];
export const modules = {
  6039: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Hb
    });
    var eb = Mb(1271);
    async function Hb(bb) {
      const wb = await fetch(`${eb.clientSideServerUrls.s3Url}/${bb}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === wb.status || 403 === wb.status) return null;
      if (!wb.ok) throw new Error(`Failed to download the texture pack (${wb.status})`);
      return await wb.json()
    }
  },
  42721: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      gamePackSource: () => pb
    });
    var eb = Mb(6039),
      Hb = Mb(1677);

    function pb(bb) {
      return {
        packKey: async wb => (await Hb.e.getGame(bb, wb, !0)).customTexturePackKey,
        fetchPack: eb.e
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);