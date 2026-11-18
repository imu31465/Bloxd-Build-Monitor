export const id = 333;
export const ids = [333];
export const modules = {
  42032: (BB, TB, dB) => {
    dB.d(TB, {
      gamePackSource: () => pB
    });
    var VB = dB(4400),
      yB = dB(1393);

    function pB(BB) {
      return {
        packKey: async TB => (await yB.c.getGame(BB, TB, !0)).customTexturePackKey,
        fetchPack: VB.c
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);