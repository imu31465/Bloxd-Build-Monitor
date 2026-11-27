export const id = 66;
export const ids = [66];
export const modules = {
  54297: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      startPageTexturePackFeed: () => Ke
    });
    var ye = He(1141),
      be = He(35),
      Me = He(54292);

    function Ke(ee, ie) {
      const He = new Me.e({
        store: be.e,
        warn: ee,
        oneShot: ie,
        fetchLatest: async ee => {
          const ie = await fetch(`${ye.clientSideServerUrls.texturePackUrl}/${ee}.json`, {
            cache: "reload"
          });
          if (!ie.ok) throw new Error(`fetching texture pack ${ee} answered HTTP ${ie.status}`);
          return await ie.json()
        }
      });
      return (0, Me.g)(He), He
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);