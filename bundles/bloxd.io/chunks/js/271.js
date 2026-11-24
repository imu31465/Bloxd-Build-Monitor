export const id = 271;
export const ids = [271];
export const modules = {
  41067: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      gamePackSource: () => ik
    });
    var Xk = Ik(4976),
      Tk = Ik(1453);

    function ik(kk) {
      return {
        packKey: async Fk => (await Tk.e.getGame(kk, Fk, !0)).customTexturePackKey,
        fetchPack: Xk.c
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);