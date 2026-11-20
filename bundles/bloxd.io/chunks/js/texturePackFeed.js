export const id = 51;
export const ids = [51];
export const modules = {
  42914: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      startPageTexturePackFeed: () => mu
    });
    var Eu = yu(1176),
      Ku = yu(47),
      Qu = yu(42910);

    function mu(uu, Ru) {
      const yu = new Qu.e({
        store: Ku.f,
        warn: uu,
        oneShot: Ru,
        fetchLatest: async uu => {
          const Ru = await fetch(`${Eu.clientSideServerUrls.texturePackUrl}/${uu}.json`, {
            cache: "reload"
          });
          if (!Ru.ok) throw new Error(`fetching texture pack ${uu} answered HTTP ${Ru.status}`);
          return await Ru.json()
        }
      });
      return (0, Qu.g)(yu), yu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);