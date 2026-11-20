export const id = 51;
export const ids = [51];
export const modules = {
  42800: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      startPageTexturePackFeed: () => Xk
    });
    var Rk = Bk(1154),
      tk = Bk(42),
      ak = Bk(42791);

    function Xk(kk, Fk) {
      const Bk = new ak.d({
        store: tk.f,
        warn: kk,
        oneShot: Fk,
        fetchLatest: async kk => {
          const Fk = await fetch(`${Rk.clientSideServerUrls.texturePackUrl}/${kk}.json`, {
            cache: "reload"
          });
          if (!Fk.ok) throw new Error(`fetching texture pack ${kk} answered HTTP ${Fk.status}`);
          return await Fk.json()
        }
      });
      return (0, ak.f)(Bk), Bk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);