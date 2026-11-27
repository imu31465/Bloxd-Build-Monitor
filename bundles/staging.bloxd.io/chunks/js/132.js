export const id = 132;
export const ids = [132];
export const modules = {
  5943: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr
    });
    var Zr = Qr(1262);
    async function Wr(rr) {
      const Sr = await fetch(`${Zr.clientSideServerUrls.s3Url}/${rr}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === Sr.status || 403 === Sr.status) return null;
      if (!Sr.ok) throw new Error(`Failed to download the texture pack (${Sr.status})`);
      return await Sr.json()
    }
  },
  42906: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      gamePackSource: () => ar
    });
    var Zr = Qr(5943),
      Wr = Qr(1629);

    function ar(rr) {
      return {
        packKey: async Sr => (await Wr.c.getGame(rr, Sr, !0)).customTexturePackKey,
        fetchPack: Zr.b
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);