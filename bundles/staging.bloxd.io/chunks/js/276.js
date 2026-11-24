export const id = 276;
export const ids = [276];
export const modules = {
  41150: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      gamePackSource: () => dB
    });
    var QB = zB(5066),
      nB = zB(1532);

    function dB(BB) {
      return {
        packKey: async jB => (await nB.b.getGame(BB, jB, !0)).customTexturePackKey,
        fetchPack: QB.e
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);