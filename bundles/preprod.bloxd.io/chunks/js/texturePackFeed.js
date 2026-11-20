export const id = 52;
export const ids = [52];
export const modules = {
  43103: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      startPageTexturePackFeed: () => mq
    });
    var Yq = gq(1195),
      lq = gq(38),
      Oq = gq(43092);

    function mq(qq, Eq) {
      const gq = new Oq.c({
        store: lq.f,
        warn: qq,
        oneShot: Eq,
        fetchLatest: async qq => {
          const Eq = await fetch(`${Yq.clientSideServerUrls.texturePackUrl}/${qq}.json`, {
            cache: "reload"
          });
          if (!Eq.ok) throw new Error(`fetching texture pack ${qq} answered HTTP ${Eq.status}`);
          return await Eq.json()
        }
      });
      return (0, Oq.f)(gq), gq
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);