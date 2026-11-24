export const id = 54;
export const ids = [54];
export const modules = {
  50816: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      startPageTexturePackFeed: () => rD
    });
    var pD = wD(1211),
      sD = wD(35),
      KD = wD(50808);

    function rD(DD, zD) {
      const wD = new KD.b({
        store: sD.g,
        warn: DD,
        oneShot: zD,
        fetchLatest: async DD => {
          const zD = await fetch(`${pD.clientSideServerUrls.texturePackUrl}/${DD}.json`, {
            cache: "reload"
          });
          if (!zD.ok) throw new Error(`fetching texture pack ${DD} answered HTTP ${zD.status}`);
          return await zD.json()
        }
      });
      return (0, KD.e)(wD), wD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);