export const id = 124;
export const ids = [124];
export const modules = {
  5491: (ee, ie, He) => {
    He.d(ie, {
      e: () => be
    });
    var ye = He(1141);
    async function be(ee) {
      const ie = await fetch(`${ye.clientSideServerUrls.s3Url}/${ee}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === ie.status || 403 === ie.status) return null;
      if (!ie.ok) throw new Error(`Failed to download the texture pack (${ie.status})`);
      return await ie.json()
    }
  },
  42130: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      gamePackSource: () => Me
    });
    var ye = He(5491),
      be = He(1490);

    function Me(ee) {
      return {
        packKey: async ie => (await be.b.getGame(ee, ie, !0)).customTexturePackKey,
        fetchPack: ye.e
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);