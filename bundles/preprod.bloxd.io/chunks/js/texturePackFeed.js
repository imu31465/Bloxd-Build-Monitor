export const id = 66;
export const ids = [66];
export const modules = {
  53791: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      startPageTexturePackFeed: () => aM
    });
    var OM = iM(1202),
      SM = iM(30),
      jM = iM(53778);

    function aM(MM, rM) {
      const iM = new jM.e({
        store: SM.f,
        warn: MM,
        oneShot: rM,
        fetchLatest: async MM => {
          const rM = await fetch(`${OM.clientSideServerUrls.texturePackUrl}/${MM}.json`, {
            cache: "reload"
          });
          if (!rM.ok) throw new Error(`fetching texture pack ${MM} answered HTTP ${rM.status}`);
          return await rM.json()
        }
      });
      return (0, jM.f)(iM), iM
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);