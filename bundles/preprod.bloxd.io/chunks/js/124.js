export const id = 124;
export const ids = [124];
export const modules = {
  5473: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => rH
    });
    var AH = LH(1131);
    async function rH(HH) {
      const BH = await fetch(`${AH.clientSideServerUrls.s3Url}/${HH}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === BH.status || 403 === BH.status) return null;
      if (!BH.ok) throw new Error(`Failed to download the texture pack (${BH.status})`);
      return await BH.json()
    }
  },
  42361: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      gamePackSource: () => SH
    });
    var AH = LH(5473),
      rH = LH(1502);

    function SH(HH) {
      return {
        packKey: async BH => (await rH.d.getGame(HH, BH, !0)).customTexturePackKey,
        fetchPack: AH.b
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);