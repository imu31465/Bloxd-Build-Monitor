export const id = 343;
export const ids = [343];
export const modules = {
  42770: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      gamePackSource: () => ak
    });
    var Rk = Bk(4681),
      tk = Bk(1441);

    function ak(kk) {
      return {
        packKey: async Fk => (await tk.b.getGame(kk, Fk, !0)).customTexturePackKey,
        fetchPack: Rk.d
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);