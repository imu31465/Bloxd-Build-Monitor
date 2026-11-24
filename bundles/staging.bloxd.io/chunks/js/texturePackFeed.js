export const id = 54;
export const ids = [54];
export const modules = {
  51052: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      startPageTexturePackFeed: () => xS
    });
    var tS = gS(1286),
      bS = gS(45),
      XS = gS(51036);

    function xS(SS, HS) {
      const gS = new XS.b({
        store: bS.e,
        warn: SS,
        oneShot: HS,
        fetchLatest: async SS => {
          const HS = await fetch(`${tS.clientSideServerUrls.texturePackUrl}/${SS}.json`, {
            cache: "reload"
          });
          if (!HS.ok) throw new Error(`fetching texture pack ${SS} answered HTTP ${HS.status}`);
          return await HS.json()
        }
      });
      return (0, XS.e)(gS), gS
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);