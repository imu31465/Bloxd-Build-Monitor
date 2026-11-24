export const id = 54;
export const ids = [54];
export const modules = {
  51002: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      startPageTexturePackFeed: () => yk
    });
    var Xk = Ik(1194),
      Tk = Ik(41),
      ik = Ik(50992);

    function yk(kk, Fk) {
      const Ik = new ik.d({
        store: Tk.g,
        warn: kk,
        oneShot: Fk,
        fetchLatest: async kk => {
          const Fk = await fetch(`${Xk.clientSideServerUrls.texturePackUrl}/${kk}.json`, {
            cache: "reload"
          });
          if (!Fk.ok) throw new Error(`fetching texture pack ${kk} answered HTTP ${Fk.status}`);
          return await Fk.json()
        }
      });
      return (0, ik.f)(Ik), Ik
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);