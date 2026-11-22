export const id = 269;
export const ids = [269];
export const modules = {
  40641: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      gamePackSource: () => Sk
    });
    var Dk = ik(4915),
      fk = ik(1459);

    function Sk(kk) {
      return {
        packKey: async ek => (await fk.b.getGame(kk, ek, !0)).customTexturePackKey,
        fetchPack: Dk.e
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);