export const id = 132;
export const ids = [132];
export const modules = {
  6028: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR
    });
    var yR = GR(1282);
    async function tR(RR) {
      const JR = await fetch(`${yR.clientSideServerUrls.s3Url}/${RR}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === JR.status || 403 === JR.status) return null;
      if (!JR.ok) throw new Error(`Failed to download the texture pack (${JR.status})`);
      return await JR.json()
    }
  },
  42579: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      gamePackSource: () => uR
    });
    var yR = GR(6028),
      tR = GR(1647);

    function uR(RR) {
      return {
        packKey: async JR => (await tR.c.getGame(RR, JR, !0)).customTexturePackKey,
        fetchPack: yR.c
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);