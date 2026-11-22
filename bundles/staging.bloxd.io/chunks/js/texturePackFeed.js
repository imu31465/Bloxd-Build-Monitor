export const id = 54;
export const ids = [54];
export const modules = {
  50585: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      startPageTexturePackFeed: () => bk
    });
    var Dk = ik(1177),
      fk = ik(38),
      Sk = ik(50577);

    function bk(kk, ek) {
      const ik = new Sk.c({
        store: fk.e,
        warn: kk,
        oneShot: ek,
        fetchLatest: async kk => {
          const ek = await fetch(`${Dk.clientSideServerUrls.texturePackUrl}/${kk}.json`, {
            cache: "reload"
          });
          if (!ek.ok) throw new Error(`fetching texture pack ${kk} answered HTTP ${ek.status}`);
          return await ek.json()
        }
      });
      return (0, Sk.f)(ik), ik
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);