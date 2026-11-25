export const id = 55;
export const ids = [55];
export const modules = {
  51295: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      startPageTexturePackFeed: () => Xu
    });
    var su = ju(1255),
      Uu = ju(31),
      Zu = ju(51284);

    function Xu(uu, Eu) {
      const ju = new Zu.d({
        store: Uu.h,
        warn: uu,
        oneShot: Eu,
        fetchLatest: async uu => {
          const Eu = await fetch(`${su.clientSideServerUrls.texturePackUrl}/${uu}.json`, {
            cache: "reload"
          });
          if (!Eu.ok) throw new Error(`fetching texture pack ${uu} answered HTTP ${Eu.status}`);
          return await Eu.json()
        }
      });
      return (0, Zu.g)(ju), ju
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);