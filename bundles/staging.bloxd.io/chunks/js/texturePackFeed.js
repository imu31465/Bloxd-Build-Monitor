export const id = 51;
export const ids = [51];
export const modules = {
  42499: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      startPageTexturePackFeed: () => fD
    });
    var ID = cD(1199),
      pD = cD(36),
      iD = cD(42491);

    function fD(DD, CD) {
      const cD = new iD.e({
        store: pD.f,
        warn: DD,
        oneShot: CD,
        fetchLatest: async DD => {
          const CD = await fetch(`${ID.clientSideServerUrls.texturePackUrl}/${DD}.json`, {
            cache: "reload"
          });
          if (!CD.ok) throw new Error(`fetching texture pack ${DD} answered HTTP ${CD.status}`);
          return await CD.json()
        }
      });
      return (0, iD.g)(cD), cD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);