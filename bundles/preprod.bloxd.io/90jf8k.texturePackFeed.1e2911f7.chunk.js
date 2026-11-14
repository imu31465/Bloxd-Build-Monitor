export const id = 43;
export const ids = [43];
export const modules = {
  41203: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      startPageTexturePackFeed: () => hF
    });
    var CF = SF(1056),
      AF = SF(33),
      uF = SF(41192);

    function hF(FF, WF) {
      const SF = new uF.d({
        store: AF.f,
        warn: FF,
        oneShot: WF,
        fetchLatest: async FF => {
          const WF = await fetch(`${CF.clientSideServerUrls.texturePackUrl}/${FF}.json`, {
            cache: "reload"
          });
          if (!WF.ok) throw new Error(`fetching texture pack ${FF} answered HTTP ${WF.status}`);
          return await WF.json()
        }
      });
      return (0, uF.h)(SF), SF
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);