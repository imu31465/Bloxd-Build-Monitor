export const id = 124;
export const ids = [124];
export const modules = {
  5473: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => DB
    });
    var YB = GB(1186);
    async function DB(BB) {
      const OB = await fetch(`${YB.clientSideServerUrls.s3Url}/${BB}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === OB.status || 403 === OB.status) return null;
      if (!OB.ok) throw new Error(`Failed to download the texture pack (${OB.status})`);
      return await OB.json()
    }
  },
  42056: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      gamePackSource: () => QB
    });
    var YB = GB(5473),
      DB = GB(1540);

    function QB(BB) {
      return {
        packKey: async OB => (await DB.b.getGame(BB, OB, !0)).customTexturePackKey,
        fetchPack: YB.e
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);