export const id = 66;
export const ids = [66];
export const modules = {
  54098: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      startPageTexturePackFeed: () => oB
    });
    var YB = GB(1186),
      DB = GB(31),
      QB = GB(54089);

    function oB(BB, OB) {
      const GB = new QB.d({
        store: DB.d,
        warn: BB,
        oneShot: OB,
        fetchLatest: async BB => {
          const OB = await fetch(`${YB.clientSideServerUrls.texturePackUrl}/${BB}.json`, {
            cache: "reload"
          });
          if (!OB.ok) throw new Error(`fetching texture pack ${BB} answered HTTP ${OB.status}`);
          return await OB.json()
        }
      });
      return (0, QB.h)(GB), GB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);