export const id = 132;
export const ids = [132];
export const modules = {
  5889: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd
    });
    var Wd = md(1253);
    async function Fd(dd) {
      const Od = await fetch(`${Wd.clientSideServerUrls.s3Url}/${dd}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === Od.status || 403 === Od.status) return null;
      if (!Od.ok) throw new Error(`Failed to download the texture pack (${Od.status})`);
      return await Od.json()
    }
  },
  42999: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      gamePackSource: () => Rd
    });
    var Wd = md(5889),
      Fd = md(1627);

    function Rd(dd) {
      return {
        packKey: async Od => (await Fd.e.getGame(dd, Od, !0)).customTexturePackKey,
        fetchPack: Wd.b
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);